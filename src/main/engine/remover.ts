import sharp from "sharp";
import type { RemoveOptions, RemoveResult } from "../../types";
import { encodeOutput, mimeForFormat } from "./encode";
import { getModelEntry, modelCacheRoot } from "./models";
import { getCachedPipeline, setCachedPipeline } from "./pipelineCache";

type PipelineFn = (input: Buffer) => Promise<unknown>;

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

async function createFallbackMask(input: Buffer, options: RemoveOptions): Promise<{ rgba: Buffer; width: number; height: number }> {
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

async function getPipeline(modelId: string): Promise<PipelineFn> {
  const cached = getCachedPipeline(modelId);
  if (cached) return cached as Promise<PipelineFn>;
  const pending = (async () => {
    const model = getModelEntry(modelId);
    const transformers = await import("@huggingface/transformers");
    const env = transformers.env as unknown as { cacheDir?: string; allowLocalModels?: boolean };
    env.cacheDir = modelCacheRoot();
    env.allowLocalModels = true;
    const pipeline = transformers.pipeline as unknown as (
      task: string,
      modelName: string,
      options?: Record<string, unknown>
    ) => Promise<PipelineFn>;
    return pipeline("image-segmentation", model.hfRepo, { local_files_only: true });
  })();
  setCachedPipeline(modelId, pending);
  return pending;
}

async function tryModelMask(input: Buffer, options: RemoveOptions): Promise<{ rgba: Buffer; width: number; height: number } | null> {
  try {
    const segment = await getPipeline(options.modelId);
    const result = await segment(input);
    const first = Array.isArray(result) ? result[0] : result;
    const mask = (first as { mask?: { data?: Uint8ClampedArray; width?: number; height?: number } })?.mask;
    if (!mask?.data || !mask.width || !mask.height) return null;

    const source = await sharp(input).rotate().resize(mask.width, mask.height, { fit: "fill" }).ensureAlpha().raw().toBuffer();
    const maskData = mask.data;
    for (let pixel = 0; pixel < mask.width * mask.height; pixel++) {
      const alpha = maskData[pixel * 4 + 3] ?? maskData[pixel] ?? 0;
      source[pixel * 4 + 3] = applyAlphaSettings(alpha, options);
    }
    return { rgba: source, width: mask.width, height: mask.height };
  } catch {
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
