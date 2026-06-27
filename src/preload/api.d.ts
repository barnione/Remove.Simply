import type { AppSettings, DownloadProgress, ModelInfo, RemoveOptions, RemoveResult } from "../types";

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
    delete(modelId: string): Promise<ModelInfo[]>;
    onProgress(callback: (progress: DownloadProgress) => void): () => void;
  };
  windows: {
    openSettings(): Promise<void>;
    openModels(): Promise<void>;
    openAbout(): Promise<void>;
    closeAbout(): Promise<void>;
  };
}

declare global {
  interface Window {
    api: RemoveSimplyApi;
  }
}
