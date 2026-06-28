import Store from "electron-store";
import type { AppSettings } from "../types";
import { listModels } from "./engine/models";

export const DEFAULT_SETTINGS: AppSettings = {
  defaultModel: "isnet-general",
  outputFormat: "png",
  outputQuality: 92,
  transparentBackground: true,
  backgroundColor: "#ffffff",
  executionProvider: process.platform === "darwin" ? "coreml" : "cpu",
  maxUploadSizeMB: 25,
  darkTheme: true,
  autoUpdatesEnabled: true,
  alphaMatting: {
    enabled: true,
    foregroundThreshold: 240,
    backgroundThreshold: 18,
    erodeSize: 1
  }
};

type StoreShape = {
  settings: AppSettings;
};

export const store = new Store<StoreShape>({
  name: "remove-simply",
  defaults: {
    settings: DEFAULT_SETTINGS
  }
});

export function getSettings(): AppSettings {
  const settings = { ...DEFAULT_SETTINGS, ...store.get("settings") };
  const cached = listModels().filter((m) => m.cached);
  if (cached.length && !cached.some((m) => m.id === settings.defaultModel)) {
    settings.defaultModel = cached[0].id;
  }
  return settings;
}

export function setSettings(patch: Partial<AppSettings>): AppSettings {
  const current = getSettings();
  if (patch.defaultModel) {
    const cached = listModels().filter((m) => m.cached);
    if (!cached.some((m) => m.id === patch.defaultModel)) {
      delete patch.defaultModel;
    }
  }
  const next: AppSettings = {
    ...current,
    ...patch,
    alphaMatting: {
      ...current.alphaMatting,
      ...(patch.alphaMatting ?? {})
    }
  };
  store.set("settings", next);
  return next;
}
