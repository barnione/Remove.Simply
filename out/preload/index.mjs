import { contextBridge, ipcRenderer } from "electron";
const api = {
  removeBg(file, options) {
    return ipcRenderer.invoke("engine:remove", file, options);
  },
  settings: {
    get() {
      return ipcRenderer.invoke("settings:get");
    },
    set(patch) {
      return ipcRenderer.invoke("settings:set", patch);
    },
    defaults() {
      return ipcRenderer.invoke("settings:defaults");
    },
    onChanged(callback) {
      const listener = (_event, settings) => callback(settings);
      ipcRenderer.on("settings:changed", listener);
      return () => ipcRenderer.off("settings:changed", listener);
    }
  },
  models: {
    list() {
      return ipcRenderer.invoke("models:list");
    },
    download(modelId) {
      return ipcRenderer.invoke("models:download", modelId);
    },
    cancel(modelId) {
      return ipcRenderer.invoke("models:cancel", modelId);
    },
    delete(modelId) {
      return ipcRenderer.invoke("models:delete", modelId);
    },
    onProgress(callback) {
      const listener = (_event, progress) => callback(progress);
      ipcRenderer.on("models:progress", listener);
      return () => ipcRenderer.off("models:progress", listener);
    }
  },
  windows: {
    openSettings() {
      return ipcRenderer.invoke("window:openSettings");
    },
    openModels() {
      return ipcRenderer.invoke("window:openModels");
    },
    openAbout() {
      return ipcRenderer.invoke("window:openAbout");
    },
    closeAbout() {
      return ipcRenderer.invoke("window:closeAbout");
    }
  },
  update: {
    check() {
      return ipcRenderer.invoke("update:check");
    },
    download() {
      return ipcRenderer.invoke("update:download");
    },
    install() {
      return ipcRenderer.invoke("update:install");
    },
    info() {
      return ipcRenderer.invoke("update:info");
    },
    onAvailable(callback) {
      const listener = (_event, info) => callback(info);
      ipcRenderer.on("update:available", listener);
      return () => ipcRenderer.off("update:available", listener);
    },
    onStatus(callback) {
      const listener = (_event, status) => callback(status);
      ipcRenderer.on("update:status", listener);
      return () => ipcRenderer.off("update:status", listener);
    }
  }
};
contextBridge.exposeInMainWorld("api", api);
