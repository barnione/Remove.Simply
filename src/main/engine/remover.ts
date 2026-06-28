import sharp from "sharp";
import type { RemoveOptions, RemoveResult, ModelFamily } from "../../types";
import { encodeOutput, mimeForFormat } from "./encode";
import { getOnnxPath, getModelFamily } from "./models";
import { getCachedPipeline, setCachedPipeline } from "./pipelineCache";

type MaskResult = { rgba: Buffer; width: number; height: number };
type PipelineFn = (input: Buffer) => Promise<MaskResult>;

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

function buildPreprocessor(family: ModelFamily) {
  const { size, mean, std } = MODEL_CONFIGS[family];
  return async (input: Buffer) => {
    const pixels = await sharp(input)
      .rotate()
      .resize(size, size, { fit: "fill" })
      .removeAlpha()
      .raw()
      .toBuffer();

    const float = new Float32Array(3 * size * size);
    for (let i = 0; i < size * size; i++) {
      float[i] = (pixels[i * 3] / 255 - mean[0]) / std[0];
      float[size * size + i] = (pixels[i * 3 + 1] / 255 - mean[1]) / std[1];
      float[2 * size * size + i] = (pixels[i * 3 + 2] / 255 - mean[2]) / std[2];
    }
    return float;
  };
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

async function getPipeline(modelId: string): Promise<PipelineFn> {
  const cached = getCachedPipeline(modelId);
  if (cached) return cached as Promise<PipelineFn>;

  const pending = (async (): Promise<PipelineFn> => {
    const ort = await import("onnxruntime-node");
    const onnxPath = getOnnxPath(modelId);
    const family = getModelFamily(modelId);
    const { size } = MODEL_CONFIGS[family];
    const session = await ort.InferenceSession.create(onnxPath);
    const preprocess = buildPreprocessor(family);
    const inputName = session.inputNames[0];

    return async (input: Buffer): Promise<MaskResult> => {
      const metadata = await sharp(input).rotate().metadata();
      const origW = metadata.width ?? 1;
      const origH = metadata.height ?? 1;

      const floatData = await preprocess(input);
      const tensor = new ort.Tensor("float32", floatData, [1, 3, size, size]);
      const results = await session.run({ [inputName]: tensor });
      const outputTensor = results[session.outputNames[0]];
      const rawMask = postprocessMask(outputTensor.data as Float32Array, family, size);

      const maskResized = await sharp(Buffer.from(rawMask), { raw: { width: size, height: size, channels: 1 } })
        .resize(origW, origH, { fit: "fill" })
        .raw()
        .toBuffer();

      const source = await sharp(input).rotate().resize(origW, origH).ensureAlpha().raw().toBuffer();
      for (let i = 0; i < origW * origH; i++) {
        source[i * 4 + 3] = maskResized[i];
      }

      return { rgba: source, width: origW, height: origH };
    };
  })();

  setCachedPipeline(modelId, pending);
  return pending;
}

async function tryModelMask(input: Buffer, options: RemoveOptions): Promise<MaskResult | null> {
  try {
    const pipeline = await getPipeline(options.modelId);
    const result = await pipeline(input);
    if (options.alphaMatting.enabled) {
      for (let i = 0; i < result.width * result.height; i++) {
        result.rgba[i * 4 + 3] = applyAlphaSettings(result.rgba[i * 4 + 3], options);
      }
    }
    return result;
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
