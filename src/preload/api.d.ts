import type { AppSettings, DownloadProgress, ModelInfo, RemoveOptions, RemoveResult, UpdateInfoPayload } from "../types";

export interface RemoveSimplyApi {
  removeBg(file: ArrayBuffer, options: RemoveOptions): Promise<RemoveResult>;
  settings: {
    get(): Promise<AppSettings>;
    set(patch: Partial<AppSettings>): Promise<AppSettings>;
    onChanged(callback: (settings: AppSettings) => void): () => void;
  };
  models: {
    list(): Promise<ModelInfo[]>;
    download(modelId: string): Promise<ModelInfo[]>;
    cancel(modelId: string): Promise<ModelInfo[]>;
    delete(modelId: string): Promise<ModelInfo[]>;
    onProgress(callback: (progress: DownloadProgress) => void): () => void;
  };
  windows: {
    openSettings(): Promise<void>;
    openModels(): Promise<void>;
    openAbout(): Promise<void>;
    closeAbout(): Promise<void>;
  };
  update: {
    check(): Promise<unknown>;
    download(): Promise<unknown>;
    install(): Promise<void>;
    info(): Promise<UpdateInfoPayload | null>;
    onAvailable(callback: (info: UpdateInfoPayload) => void): () => void;
    onStatus(callback: (status: { status: string; version?: string; message?: string }) => void): () => void;
  };
}

declare global {
  interface Window {
    api: RemoveSimplyApi;
  }
}
