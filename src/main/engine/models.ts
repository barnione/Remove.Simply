import { app, BrowserWindow } from "electron";
import { createWriteStream, existsSync, mkdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import type { DownloadProgress, ModelFamily, ModelInfo } from "../../types";
import { clearCachedPipeline } from "./pipelineCache";

const RELEASE_BASE = "https://github.com/danielgatis/rembg/releases/download/v0.0.0";

type RegistryEntry = Omit<ModelInfo, "cached" | "sizeOnDiskMB" | "status">;

export const MODEL_REGISTRY: RegistryEntry[] = [
  {
    id: "isnet-general",
    label: "ISNet General",
    family: "isnet",
    onnxFile: "isnet-general-use.onnx",
    approxSizeMB: 170,
    speedNote: "Great all-rounder",
    default: true
  },
  {
    id: "u2net",
    label: "U2-Net",
    family: "u2net",
    onnxFile: "u2net.onnx",
    approxSizeMB: 168,
    speedNote: "Classic, reliable"
  },
  {
    id: "u2netp",
    label: "U2-Net Lite",
    family: "u2net",
    onnxFile: "u2netp.onnx",
    approxSizeMB: 4,
    speedNote: "Very fast, lower quality"
  },
  {
    id: "u2net-human",
    label: "U2-Net Human Seg",
    family: "u2net",
    onnxFile: "u2net_human_seg.onnx",
    approxSizeMB: 168,
    speedNote: "Optimized for people"
  },
  {
    id: "silueta",
    label: "Silueta",
    family: "u2net",
    onnxFile: "silueta.onnx",
    approxSizeMB: 42,
    speedNote: "Lightweight, decent quality"
  },
  {
    id: "isnet-anime",
    label: "ISNet Anime",
    family: "isnet",
    onnxFile: "isnet-anime.onnx",
    approxSizeMB: 168,
    speedNote: "Optimized for anime/illustration"
  },
  {
    id: "birefnet-general",
    label: "BiRefNet General",
    family: "birefnet",
    onnxFile: "BiRefNet-general-epoch_244.onnx",
    approxSizeMB: 927,
    speedNote: "High quality, large"
  },
  {
    id: "birefnet-general-lite",
    label: "BiRefNet General Lite",
    family: "birefnet",
    onnxFile: "BiRefNet-general-bb_swin_v1_tiny-epoch_232.onnx",
    approxSizeMB: 214,
    speedNote: "Good quality, lighter"
  },
  {
    id: "birefnet-portrait",
    label: "BiRefNet Portrait",
    family: "birefnet",
    onnxFile: "BiRefNet-portrait-epoch_150.onnx",
    approxSizeMB: 927,
    speedNote: "Best for portraits, large"
  },
  {
    id: "birefnet-massive",
    label: "BiRefNet Massive",
    family: "birefnet",
    onnxFile: "BiRefNet-massive-TR_DIS5K_TR_TEs-epoch_420.onnx",
    approxSizeMB: 927,
    speedNote: "Highest quality, very large"
  }
];

const downloading = new Map<string, AbortController>();

export function modelCacheRoot(): string {
  return join(app.getPath("userData"), "models");
}

export function configureModelCache(): void {
  const cache = modelCacheRoot();
  if (!existsSync(cache)) mkdirSync(cache, { recursive: true });
}

function onnxPathFor(onnxFile: string): string {
  return join(modelCacheRoot(), onnxFile);
}

function isModelCached(onnxFile: string): boolean {
  return existsSync(onnxPathFor(onnxFile));
}

export function getModelEntry(modelId: string): RegistryEntry {
  return MODEL_REGISTRY.find((model) => model.id === modelId) ?? MODEL_REGISTRY[0];
}

export function getOnnxPath(modelId: string): string {
  return onnxPathFor(getModelEntry(modelId).onnxFile);
}

export function getModelFamily(modelId: string): ModelFamily {
  return getModelEntry(modelId).family;
}

export function listModels(): ModelInfo[] {
  return MODEL_REGISTRY.map((model) => {
    const path = onnxPathFor(model.onnxFile);
    const cached = isModelCached(model.onnxFile);
    const sizeOnDiskMB = cached
      ? Math.round((statSync(path).size / 1024 / 1024) * 10) / 10
      : 0;
    return {
      ...model,
      cached,
      sizeOnDiskMB,
      status: downloading.has(model.id) ? "downloading" : cached ? "ready" : "missing"
    };
  });
}

function emitProgress(progress: DownloadProgress): void {
  BrowserWindow.getAllWindows().forEach((window) => {
    window.webContents.send("models:progress", progress);
  });
}

export async function downloadModel(modelId: string): Promise<ModelInfo[]> {
  const model = getModelEntry(modelId);
  if (downloading.has(model.id)) return listModels();
  const abort = new AbortController();
  downloading.set(model.id, abort);
  emitProgress({ modelId: model.id, progress: 5, status: "downloading", message: "Starting download" });

  const dest = onnxPathFor(model.onnxFile);

  try {
    const url = `${RELEASE_BASE}/${model.onnxFile}`;
    mkdirSync(modelCacheRoot(), { recursive: true });

    const response = await fetch(url, { redirect: "follow", signal: abort.signal });
    if (!response.ok || !response.body) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }

    const contentLength = Number(response.headers.get("content-length") ?? 0);
    const fileStream = createWriteStream(dest);
    let downloaded = 0;

    const reader = response.body.getReader();
    await reader.read().then(function pump({ done, value }): Promise<void> | void {
      if (abort.signal.aborted) {
        reader.cancel();
        fileStream.destroy();
        return;
      }
      if (done) {
        fileStream.end();
        return;
      }
      fileStream.write(value);
      downloaded += value.byteLength;
      if (contentLength > 0) {
        const pct = Math.max(5, Math.min(98, Math.round((downloaded / contentLength) * 100)));
        emitProgress({
          modelId: model.id,
          progress: pct,
          status: "downloading",
          message: `${Math.round(downloaded / 1024 / 1024)} / ${Math.round(contentLength / 1024 / 1024)} MB`
        });
      }
      return reader.read().then(pump);
    });

    if (!abort.signal.aborted) {
      await new Promise<void>((resolve, reject) => {
        fileStream.on("finish", resolve);
        fileStream.on("error", reject);
      });
      emitProgress({ modelId: model.id, progress: 100, status: "ready", message: "Ready" });
    }
  } catch (error) {
    if (abort.signal.aborted) return listModels();
    console.error("[models] download error:", error);
    emitProgress({
      modelId: model.id,
      progress: 0,
      status: "error",
      message: error instanceof Error ? error.message : "Download failed"
    });
  } finally {
    downloading.delete(model.id);
    if (abort.signal.aborted && existsSync(dest)) rmSync(dest, { force: true });
  }

  return listModels();
}

export function cancelDownload(modelId: string): ModelInfo[] {
  const abort = downloading.get(modelId);
  if (abort) abort.abort();
  return listModels();
}

export function deleteModel(modelId: string): ModelInfo[] {
  const model = getModelEntry(modelId);
  const path = onnxPathFor(model.onnxFile);
  if (existsSync(path)) rmSync(path, { force: true });
  clearCachedPipeline(model.id);
  return listModels();
}
