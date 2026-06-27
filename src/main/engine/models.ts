import { app, BrowserWindow } from "electron";
import { existsSync, readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import type { DownloadProgress, ModelInfo } from "../../types";
import { clearCachedPipeline } from "./pipelineCache";

type RegistryEntry = Omit<ModelInfo, "cached" | "sizeOnDiskMB" | "status">;

export const MODEL_REGISTRY: RegistryEntry[] = [
  {
    id: "isnet",
    label: "ISNet / RMBG 1.4",
    hfRepo: "briaai/RMBG-1.4",
    approxSizeMB: 176,
    speedNote: "Best default balance",
    default: true
  },
  {
    id: "birefnet",
    label: "BiRefNet / RMBG 2.0",
    hfRepo: "briaai/RMBG-2.0",
    approxSizeMB: 920,
    speedNote: "High quality, slower"
  },
  {
    id: "u2net",
    label: "U2Net classic",
    hfRepo: "Xenova/u2net",
    approxSizeMB: 176,
    speedNote: "Classic rembg-style model"
  },
  {
    id: "human-seg",
    label: "Human segmentation",
    hfRepo: "Xenova/u2net-human-seg",
    approxSizeMB: 176,
    speedNote: "People-focused masks"
  },
  {
    id: "portrait",
    label: "Portrait / MODNet",
    hfRepo: "Xenova/modnet",
    approxSizeMB: 26,
    speedNote: "Portrait-optimized"
  },
  {
    id: "lite",
    label: "Lite / U2NetP",
    hfRepo: "Xenova/u2netp",
    approxSizeMB: 4,
    speedNote: "Smallest and fastest"
  }
];

const downloading = new Set<string>();

export function modelCacheRoot(): string {
  return join(app.getPath("userData"), "models");
}

export function configureModelCache(): void {
  const cache = modelCacheRoot();
  process.env.HF_HOME = cache;
  process.env.TRANSFORMERS_CACHE = cache;
}

function cachePathFor(repo: string): string {
  return join(modelCacheRoot(), "models--" + repo.replace("/", "--"));
}

function folderSize(path: string): number {
  if (!existsSync(path)) return 0;
  const stat = statSync(path);
  if (stat.isFile()) return stat.size;
  return readdirSync(path).reduce((sum, name) => sum + folderSize(join(path, name)), 0);
}

function isModelCached(repo: string): boolean {
  const path = cachePathFor(repo);
  if (!existsSync(path)) return false;
  const snapshots = join(path, "snapshots");
  if (!existsSync(snapshots)) return false;
  return readdirSync(snapshots).some(
    (snapshot) => readdirSync(join(snapshots, snapshot)).length > 0
  );
}

export function getModelEntry(modelId: string): RegistryEntry {
  return MODEL_REGISTRY.find((model) => model.id === modelId) ?? MODEL_REGISTRY[0];
}

export function listModels(): ModelInfo[] {
  return MODEL_REGISTRY.map((model) => {
    const path = cachePathFor(model.hfRepo);
    const cached = isModelCached(model.hfRepo);
    return {
      ...model,
      cached,
      sizeOnDiskMB: Math.round((folderSize(path) / 1024 / 1024) * 10) / 10,
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
  downloading.add(model.id);
  emitProgress({ modelId: model.id, progress: 8, status: "downloading", message: "Starting download" });

  try {
    const transformers = await import("@huggingface/transformers");
    const env = transformers.env as unknown as { cacheDir?: string; allowLocalModels?: boolean };
    env.cacheDir = modelCacheRoot();
    env.allowLocalModels = true;

    const progress_callback = (event: { status?: string; progress?: number; file?: string }) => {
      if (typeof event.progress === "number") {
        emitProgress({
          modelId: model.id,
          progress: Math.max(8, Math.min(98, event.progress)),
          status: "downloading",
          message: event.file ?? event.status
        });
      }
    };

    const pipeline = transformers.pipeline as unknown as (
      task: string,
      modelName: string,
      options?: Record<string, unknown>
    ) => Promise<unknown>;
    await pipeline("image-segmentation", model.hfRepo, { progress_callback });
    emitProgress({ modelId: model.id, progress: 100, status: "ready", message: "Ready" });
  } catch (error) {
    emitProgress({
      modelId: model.id,
      progress: 0,
      status: "error",
      message: error instanceof Error ? error.message : "Download failed"
    });
  } finally {
    downloading.delete(model.id);
  }

  return listModels();
}

export function deleteModel(modelId: string): ModelInfo[] {
  const model = getModelEntry(modelId);
  const path = cachePathFor(model.hfRepo);
  if (existsSync(path)) rmSync(path, { recursive: true, force: true });
  clearCachedPipeline(model.id);
  return listModels();
}
