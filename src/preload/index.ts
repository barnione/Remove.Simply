import { contextBridge, ipcRenderer } from "electron";
import type { AppSettings, DownloadProgress, ModelInfo, RemoveOptions, RemoveResult } from "../types";
import type { RemoveSimplyApi } from "./api";

const api: RemoveSimplyApi = {
  removeBg(file: ArrayBuffer, options: RemoveOptions): Promise<RemoveResult> {
    return ipcRenderer.invoke("engine:remove", file, options) as Promise<RemoveResult>;
  },
  settings: {
    get(): Promise<AppSettings> {
      return ipcRenderer.invoke("settings:get") as Promise<AppSettings>;
    },
    set(patch: Partial<AppSettings>): Promise<AppSettings> {
      return ipcRenderer.invoke("settings:set", patch) as Promise<AppSettings>;
    },
    onChanged(callback: (settings: AppSettings) => void): () => void {
      const listener = (_event: Electron.IpcRendererEvent, settings: AppSettings) => callback(settings);
      ipcRenderer.on("settings:changed", listener);
      return () => ipcRenderer.off("settings:changed", listener);
    }
  },
  models: {
    list(): Promise<ModelInfo[]> {
      return ipcRenderer.invoke("models:list") as Promise<ModelInfo[]>;
    },
    download(modelId: string): Promise<ModelInfo[]> {
      return ipcRenderer.invoke("models:download", modelId) as Promise<ModelInfo[]>;
    },
    delete(modelId: string): Promise<ModelInfo[]> {
      return ipcRenderer.invoke("models:delete", modelId) as Promise<ModelInfo[]>;
    },
    onProgress(callback: (progress: DownloadProgress) => void): () => void {
      const listener = (_event: Electron.IpcRendererEvent, progress: DownloadProgress) => callback(progress);
      ipcRenderer.on("models:progress", listener);
      return () => ipcRenderer.off("models:progress", listener);
    }
  },
  windows: {
    openSettings(): Promise<void> {
      return ipcRenderer.invoke("window:openSettings") as Promise<void>;
    },
    openModels(): Promise<void> {
      return ipcRenderer.invoke("window:openModels") as Promise<void>;
    },
    openAbout(): Promise<void> {
      return ipcRenderer.invoke("window:openAbout") as Promise<void>;
    },
    closeAbout(): Promise<void> {
      return ipcRenderer.invoke("window:closeAbout") as Promise<void>;
    }
  }
};

contextBridge.exposeInMainWorld("api", api);
