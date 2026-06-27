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
  }
};
contextBridge.exposeInMainWorld("api", api);
