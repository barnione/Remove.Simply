import Store from "electron-store";
import type { AppSettings } from "../types";

export const DEFAULT_SETTINGS: AppSettings = {
  defaultModel: "isnet",
  outputFormat: "png",
  outputQuality: 92,
  transparentBackground: true,
  backgroundColor: "#ffffff",
  executionProvider: "cpu",
  maxUploadSizeMB: 25,
  darkTheme: true,
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
  return { ...DEFAULT_SETTINGS, ...store.get("settings") };
}

export function setSettings(patch: Partial<AppSettings>): AppSettings {
  const current = getSettings();
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
