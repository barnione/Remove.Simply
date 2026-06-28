import { utilityProcess } from "electron";
import { join } from "node:path";
import sharp from "sharp";
import type { RemoveOptions, RemoveResult, ModelFamily } from "../../types";
import { encodeOutput, mimeForFormat } from "./encode";
import { getOnnxPath, getModelFamily } from "./models";

type MaskResult = { rgba: Buffer; width: number; height: number };

const MODEL_CONFIGS: Record<ModelFamily, { size: number; mean: number[]; std: number[] }> = {
  u2net: { size: 320, mean: [0.485, 0.456, 0.406], std: [0.229, 0.224, 0.225] },
  isnet: { size: 1024, mean: [0.5, 0.5, 0.5], std: [1.0, 1.0, 1.0] },
  birefnet: { size: 1024, mean: [0.485, 0.456, 0.406], std: [0.229, 0.224, 0.225] }
};

function clamp(value: number): number {
  return Math.max(0, Math.min(255, value));
}

function applyAlphaSettings(alpha: number, options: RemoveOptions): number {
  if (!options.alphaMatting.enabled) return alpha;
  const bg = options.alphaMatting.backgroundThreshold;
  const fg = options.alphaMatting.foregroundThreshold;
  if (alpha <= bg) return 0;
  if (alpha >= fg) return 255;
  return clamp(Math.round(((alpha - bg) / Math.max(1, fg - bg)) * 255));
}

async function createFallbackMask(input: Buffer, options: RemoveOptions): Promise<MaskResult> {
  const source = sharp(input).rotate().ensureAlpha();
  const metadata = await source.metadata();
  const width = metadata.width ?? 1;
  const height = metadata.height ?? 1;
  const raw = await source.raw().toBuffer();
  const sampleSize = Math.max(4, Math.floor(Math.min(width, height) * 0.04));
  const samples: number[][] = [];

  for (let y = 0; y < height; y += Math.max(1, height - sampleSize)) {
    for (let x = 0; x < width; x += Math.max(1, width - sampleSize)) {
      for (let yy = y; yy < Math.min(height, y + sampleSize); yy += 4) {
        for (let xx = x; xx < Math.min(width, x + sampleSize); xx += 4) {
          const index = (yy * width + xx) * 4;
          samples.push([raw[index], raw[index + 1], raw[index + 2]]);
        }
      }
    }
  }

  const bg = samples.reduce(
    (sum, pixel) => [sum[0] + pixel[0], sum[1] + pixel[1], sum[2] + pixel[2]],
    [0, 0, 0]
  ).map((value) => value / Math.max(1, samples.length));

  for (let index = 0; index < raw.length; index += 4) {
    const dr = raw[index] - bg[0];
    const dg = raw[index + 1] - bg[1];
    const db = raw[index + 2] - bg[2];
    const distance = Math.sqrt(dr * dr + dg * dg + db * db);
    raw[index + 3] = applyAlphaSettings(clamp(Math.round((distance - 24) * 3.2)), options);
  }

  return { rgba: raw, width, height };
}

async function preprocess(input: Buffer, family: ModelFamily): Promise<Float32Array> {
  const { size, mean, std } = MODEL_CONFIGS[family];
  const pixels = await sharp(input)
    .rotate()
    .resize(size, size, { fit: "fill", kernel: "lanczos3" })
    .removeAlpha()
    .raw()
    .toBuffer();

  let maxVal = 0;
  for (let i = 0; i < pixels.length; i++) {
    if (pixels[i] > maxVal) maxVal = pixels[i];
  }
  const norm = Math.max(maxVal, 1);

  const float = new Float32Array(3 * size * size);
  for (let i = 0; i < size * size; i++) {
    float[i] = (pixels[i * 3] / norm - mean[0]) / std[0];
    float[size * size + i] = (pixels[i * 3 + 1] / norm - mean[1]) / std[1];
    float[2 * size * size + i] = (pixels[i * 3 + 2] / norm - mean[2]) / std[2];
  }
  return float;
}

function postprocessMask(output: Float32Array, family: ModelFamily, size: number): Uint8Array {
  const useSigmoid = family === "birefnet";
  const pixelCount = size * size;
  const mask = new Uint8Array(pixelCount);

  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < pixelCount; i++) {
    let v = output[i];
    if (useSigmoid) v = 1 / (1 + Math.exp(-v));
    if (v < min) min = v;
    if (v > max) max = v;
  }

  const range = max - min || 1;
  for (let i = 0; i < pixelCount; i++) {
    let v = output[i];
    if (useSigmoid) v = 1 / (1 + Math.exp(-v));
    mask[i] = clamp(Math.round(((v - min) / range) * 255));
  }

  return mask;
}

function runInferenceInProcess(
  onnxPath: string,
  floatData: Float32Array,
  size: number,
  executionProvider: string
): Promise<Float32Array> {
  return new Promise((resolve, reject) => {
    const workerPath = join(__dirname, "inferenceWorker.js");
    const child = utilityProcess.fork(workerPath);

    let settled = false;
    child.on("message", (msg: any) => {
      if (settled) return;
      settled = true;
      if (msg?.error) {
        reject(new Error(msg.error));
      } else if (msg?.data) {
        const buf = Buffer.from(msg.data, "base64");
        resolve(new Float32Array(buf.buffer, buf.byteOffset, buf.byteLength / 4));
      }
      child.kill();
    });

    child.on("exit", (code) => {
      if (!settled) {
        settled = true;
        reject(new Error(`Inference process crashed (exit code ${code})`));
      }
    });

    const floatBuf = Buffer.from(floatData.buffer, floatData.byteOffset, floatData.byteLength);
    child.postMessage({
      onnxPath,
      floatDataBase64: floatBuf.toString("base64"),
      size,
      executionProvider
    });
  });
}

async function tryModelMask(input: Buffer, options: RemoveOptions): Promise<MaskResult | null> {
  try {
    const modelId = options.modelId;
    const onnxPath = getOnnxPath(modelId);
    const family = getModelFamily(modelId);
    const { size } = MODEL_CONFIGS[family];

    const metadata = await sharp(input).rotate().metadata();
    const origW = metadata.width ?? 1;
    const origH = metadata.height ?? 1;

    const floatData = await preprocess(input, family);
    const outputData = await runInferenceInProcess(
      onnxPath,
      floatData,
      size,
      options.executionProvider
    );
    const rawMask = postprocessMask(outputData, family, size);

    const maskResized = await sharp(Buffer.from(rawMask), { raw: { width: size, height: size, channels: 1 } })
      .resize(origW, origH, { fit: "fill", kernel: "lanczos3" })
      .raw()
      .toBuffer();

    const source = await sharp(input).rotate().resize(origW, origH).ensureAlpha().raw().toBuffer();
    for (let i = 0; i < origW * origH; i++) {
      source[i * 4 + 3] = maskResized[i];
    }

    if (options.alphaMatting.enabled) {
      for (let i = 0; i < origW * origH; i++) {
        source[i * 4 + 3] = applyAlphaSettings(source[i * 4 + 3], options);
      }
    }

    return { rgba: source, width: origW, height: origH };
  } catch (err) {
    console.error("[remover] model inference failed:", err);
    return null;
  }
}

export async function removeBackground(input: Buffer, options: RemoveOptions): Promise<RemoveResult> {
  const modelMasked = await tryModelMask(input, options);
  const masked = modelMasked ?? (await createFallbackMask(input, options));
  const buffer = await encodeOutput(
    masked.rgba,
    masked.width,
    masked.height,
    options.format,
    options.quality,
    options.transparentBackground,
    options.backgroundColor
  );

  return {
    buffer: new Uint8Array(buffer).slice().buffer,
    mimeType: mimeForFormat(options.format),
    width: masked.width,
    height: masked.height,
    usedFallback: modelMasked === null
  };
}
