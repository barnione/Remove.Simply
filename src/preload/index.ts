import { contextBridge, ipcRenderer } from "electron";
import type { AppSettings, DownloadProgress, ModelInfo, RemoveOptions, RemoveResult, UpdateInfoPayload } from "../types";
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
    cancel(modelId: string): Promise<ModelInfo[]> {
      return ipcRenderer.invoke("models:cancel", modelId) as Promise<ModelInfo[]>;
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
  },
  update: {
    check(): Promise<unknown> {
      return ipcRenderer.invoke("update:check");
    },
    download(): Promise<unknown> {
      return ipcRenderer.invoke("update:download");
    },
    install(): Promise<void> {
      return ipcRenderer.invoke("update:install") as Promise<void>;
    },
    info(): Promise<UpdateInfoPayload | null> {
      return ipcRenderer.invoke("update:info") as Promise<UpdateInfoPayload | null>;
    },
    onAvailable(callback: (info: UpdateInfoPayload) => void): () => void {
      const listener = (_event: Electron.IpcRendererEvent, info: UpdateInfoPayload) => callback(info);
      ipcRenderer.on("update:available", listener);
      return () => ipcRenderer.off("update:available", listener);
    },
    onStatus(callback: (status: { status: string; version?: string; message?: string }) => void): () => void {
      const listener = (_event: Electron.IpcRendererEvent, status: { status: string; version?: string; message?: string }) => callback(status);
      ipcRenderer.on("update:status", listener);
      return () => ipcRenderer.off("update:status", listener);
    }
  }
};

contextBridge.exposeInMainWorld("api", api);
