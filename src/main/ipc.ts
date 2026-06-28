import { BrowserWindow, ipcMain } from "electron";
import type { AppSettings, RemoveOptions } from "../types";
import { cancelDownload, deleteModel, downloadModel, listModels } from "./engine/models";
import { removeBackground } from "./engine/remover";
import { getSettings, setSettings } from "./store";
import {
  closeAboutWindow,
  openAboutWindow,
  openModelsWindow,
  openSettingsWindow
} from "./windows";

function broadcastSettings(settings: AppSettings): void {
  BrowserWindow.getAllWindows().forEach((window) => {
    window.webContents.send("settings:changed", settings);
  });
}

export function registerIpcHandlers(): void {
  ipcMain.handle("engine:remove", async (_event, input: ArrayBuffer, options: RemoveOptions) => {
    return removeBackground(Buffer.from(input), options);
  });

  ipcMain.handle("settings:get", () => getSettings());
  ipcMain.handle("settings:set", (_event, patch: Partial<AppSettings>) => {
    const next = setSettings(patch);
    broadcastSettings(next);
    return next;
  });

  ipcMain.handle("models:list", () => listModels());
  ipcMain.handle("models:download", (_event, modelId: string) => downloadModel(modelId));
  ipcMain.handle("models:cancel", (_event, modelId: string) => cancelDownload(modelId));
  ipcMain.handle("models:delete", (_event, modelId: string) => deleteModel(modelId));

  ipcMain.handle("window:openSettings", () => openSettingsWindow());
  ipcMain.handle("window:openModels", () => openModelsWindow());
  ipcMain.handle("window:openAbout", () => openAboutWindow());
  ipcMain.handle("window:closeAbout", () => closeAboutWindow());
}
