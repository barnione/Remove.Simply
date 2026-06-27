import { app, BrowserWindow, shell, ipcMain } from "electron";
import { existsSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import Store from "electron-store";
import __cjs_mod__ from "node:module";
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
const require2 = __cjs_mod__.createRequire(import.meta.url);
const MODEL_REGISTRY = [
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
const downloading = /* @__PURE__ */ new Set();
function modelCacheRoot() {
  return join(app.getPath("userData"), "models");
}
function configureModelCache() {
  const cache = modelCacheRoot();
  process.env.HF_HOME = cache;
  process.env.TRANSFORMERS_CACHE = cache;
}
function cachePathFor(repo) {
  return join(modelCacheRoot(), "models--" + repo.replace("/", "--"));
}
function folderSize(path) {
  if (!existsSync(path)) return 0;
  const stat = statSync(path);
  if (stat.isFile()) return stat.size;
  const { readdirSync } = require2("node:fs");
  return readdirSync(path).reduce((sum, name) => sum + folderSize(join(path, name)), 0);
}
function getModelEntry(modelId) {
  return MODEL_REGISTRY.find((model) => model.id === modelId) ?? MODEL_REGISTRY[0];
}
function listModels() {
  return MODEL_REGISTRY.map((model) => {
    const path = cachePathFor(model.hfRepo);
    const cached = existsSync(path);
    return {
      ...model,
      cached,
      sizeOnDiskMB: Math.round(folderSize(path) / 1024 / 1024 * 10) / 10,
      status: downloading.has(model.id) ? "downloading" : cached ? "ready" : "missing"
    };
  });
}
function emitProgress(progress) {
  BrowserWindow.getAllWindows().forEach((window) => {
    window.webContents.send("models:progress", progress);
  });
}
async function downloadModel(modelId) {
  const model = getModelEntry(modelId);
  downloading.add(model.id);
  emitProgress({ modelId: model.id, progress: 8, status: "downloading", message: "Starting download" });
  try {
    const transformers = await import("@huggingface/transformers");
    const env = transformers.env;
    env.cacheDir = modelCacheRoot();
    env.allowLocalModels = true;
    const progress_callback = (event) => {
      if (typeof event.progress === "number") {
        emitProgress({
          modelId: model.id,
          progress: Math.max(8, Math.min(98, event.progress)),
          status: "downloading",
          message: event.file ?? event.status
        });
      }
    };
    const pipeline = transformers.pipeline;
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
function deleteModel(modelId) {
  const model = getModelEntry(modelId);
  const path = cachePathFor(model.hfRepo);
  if (existsSync(path)) rmSync(path, { recursive: true, force: true });
  return listModels();
}
function mimeForFormat(format) {
  if (format === "jpg") return "image/jpeg";
  if (format === "webp") return "image/webp";
  return "image/png";
}
async function encodeOutput(rgba, width, height, format, quality, transparentBackground, backgroundColor) {
  let image = sharp(rgba, { raw: { width, height, channels: 4 } });
  if (!transparentBackground || format === "jpg") {
    image = image.flatten({ background: backgroundColor });
  }
  if (format === "webp") return image.webp({ quality }).toBuffer();
  if (format === "jpg") return image.jpeg({ quality }).toBuffer();
  return image.png().toBuffer();
}
const loadedPipelines = /* @__PURE__ */ new Map();
function clamp(value) {
  return Math.max(0, Math.min(255, value));
}
function applyAlphaSettings(alpha, options) {
  if (!options.alphaMatting.enabled) return alpha;
  const bg = options.alphaMatting.backgroundThreshold;
  const fg = options.alphaMatting.foregroundThreshold;
  if (alpha <= bg) return 0;
  if (alpha >= fg) return 255;
  return clamp(Math.round((alpha - bg) / Math.max(1, fg - bg) * 255));
}
async function createFallbackMask(input, options) {
  const source = sharp(input).rotate().ensureAlpha();
  const metadata = await source.metadata();
  const width = metadata.width ?? 1;
  const height = metadata.height ?? 1;
  const raw = await source.raw().toBuffer();
  const sampleSize = Math.max(4, Math.floor(Math.min(width, height) * 0.04));
  const samples = [];
  for (let y = 0; y < height; y += Math.max(1, height - sampleSize)) {
    for (let x = 0; x < width; x += Math.max(1, width - sampleSize)) {
      for (let yy = y; yy < Math.min(height, y + sampleSize); yy += 4) {
        for (let xx = x; xx < Math.min(width, x + sampleSize); xx += 4) {
          const index = (yy * width + xx) * 4;
          samples.push([raw[index], raw[index + 1], raw[index + 2]]);
        }
      }
    }
  }
  const bg = samples.reduce(
    (sum, pixel) => [sum[0] + pixel[0], sum[1] + pixel[1], sum[2] + pixel[2]],
    [0, 0, 0]
  ).map((value) => value / Math.max(1, samples.length));
  for (let index = 0; index < raw.length; index += 4) {
    const dr = raw[index] - bg[0];
    const dg = raw[index + 1] - bg[1];
    const db = raw[index + 2] - bg[2];
    const distance = Math.sqrt(dr * dr + dg * dg + db * db);
    raw[index + 3] = applyAlphaSettings(clamp(Math.round((distance - 24) * 3.2)), options);
  }
  return { rgba: raw, width, height };
}
async function getPipeline(modelId) {
  if (!loadedPipelines.has(modelId)) {
    loadedPipelines.set(
      modelId,
      (async () => {
        const model = getModelEntry(modelId);
        const transformers = await import("@huggingface/transformers");
        const env = transformers.env;
        env.cacheDir = modelCacheRoot();
        env.allowLocalModels = true;
        const pipeline = transformers.pipeline;
        return pipeline("image-segmentation", model.hfRepo, { local_files_only: true });
      })()
    );
  }
  return loadedPipelines.get(modelId);
}
async function tryModelMask(input, options) {
  try {
    const segment = await getPipeline(options.modelId);
    const result = await segment(input);
    const first = Array.isArray(result) ? result[0] : result;
    const mask = first?.mask;
    if (!mask?.data || !mask.width || !mask.height) return null;
    const source = await sharp(input).rotate().resize(mask.width, mask.height, { fit: "fill" }).ensureAlpha().raw().toBuffer();
    const maskData = mask.data;
    for (let pixel = 0; pixel < mask.width * mask.height; pixel++) {
      const alpha = maskData[pixel * 4 + 3] ?? maskData[pixel] ?? 0;
      source[pixel * 4 + 3] = applyAlphaSettings(alpha, options);
    }
    return { rgba: source, width: mask.width, height: mask.height };
  } catch {
    return null;
  }
}
async function removeBackground(input, options) {
  const modelMasked = await tryModelMask(input, options);
  const masked = modelMasked ?? await createFallbackMask(input, options);
  const buffer = await encodeOutput(
    masked.rgba,
    masked.width,
    masked.height,
    options.format,
    options.quality,
    options.transparentBackground,
    options.backgroundColor
  );
  return {
    buffer: new Uint8Array(buffer).slice().buffer,
    mimeType: mimeForFormat(options.format),
    width: masked.width,
    height: masked.height,
    usedFallback: modelMasked === null
  };
}
const DEFAULT_SETTINGS = {
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
const store = new Store({
  name: "remove-simply",
  defaults: {
    settings: DEFAULT_SETTINGS
  }
});
function getSettings() {
  return { ...DEFAULT_SETTINGS, ...store.get("settings") };
}
function setSettings(patch) {
  const current = getSettings();
  const next = {
    ...current,
    ...patch,
    alphaMatting: {
      ...current.alphaMatting,
      ...patch.alphaMatting ?? {}
    }
  };
  store.set("settings", next);
  return next;
}
let mainWindow = null;
let settingsWindow = null;
let modelsWindow = null;
const preload = join(__dirname, "../preload/index.mjs");
const iconPath = join(process.cwd(), "build/icon.png");
function loadRenderer(window, entry) {
  if (process.env.ELECTRON_RENDERER_URL) {
    window.loadURL(`${process.env.ELECTRON_RENDERER_URL}/${entry}/index.html`);
  } else {
    window.loadFile(join(__dirname, `../renderer/${entry}/index.html`));
  }
}
const titleBarOptions = process.platform === "darwin" ? {
  titleBarStyle: "hiddenInset",
  trafficLightPosition: { x: 16, y: 14 }
} : {
  titleBarStyle: "hidden",
  titleBarOverlay: {
    color: "#0f0f12",
    symbolColor: "#ffffff",
    height: 40
  }
};
function commonWindowOptions() {
  return {
    backgroundColor: "#0f0f12",
    show: false,
    autoHideMenuBar: true,
    icon: iconPath,
    ...titleBarOptions,
    webPreferences: {
      preload,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  };
}
function createMainWindow() {
  mainWindow = new BrowserWindow({
    ...commonWindowOptions(),
    width: 1200,
    height: 820,
    minWidth: 720,
    minHeight: 520,
    title: "Remove.Simply"
  });
  mainWindow.once("ready-to-show", () => mainWindow?.show());
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
  mainWindow.on("closed", () => {
    mainWindow = null;
  });
  loadRenderer(mainWindow, "main");
  return mainWindow;
}
function openSettingsWindow() {
  if (settingsWindow) {
    settingsWindow.focus();
    return;
  }
  settingsWindow = new BrowserWindow({
    ...commonWindowOptions(),
    width: 520,
    height: 640,
    resizable: false,
    parent: mainWindow ?? void 0,
    modal: false,
    title: "Settings"
  });
  settingsWindow.once("ready-to-show", () => settingsWindow?.show());
  settingsWindow.on("closed", () => {
    settingsWindow = null;
  });
  loadRenderer(settingsWindow, "settings");
}
function openModelsWindow() {
  if (modelsWindow) {
    modelsWindow.focus();
    return;
  }
  modelsWindow = new BrowserWindow({
    ...commonWindowOptions(),
    width: 760,
    height: 620,
    minWidth: 680,
    minHeight: 520,
    parent: mainWindow ?? void 0,
    modal: false,
    title: "Models"
  });
  modelsWindow.once("ready-to-show", () => modelsWindow?.show());
  modelsWindow.on("closed", () => {
    modelsWindow = null;
  });
  loadRenderer(modelsWindow, "models");
}
function installAppWindowHandlers() {
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
}
function broadcastSettings(settings) {
  BrowserWindow.getAllWindows().forEach((window) => {
    window.webContents.send("settings:changed", settings);
  });
}
function registerIpcHandlers() {
  ipcMain.handle("engine:remove", async (_event, input, options) => {
    return removeBackground(Buffer.from(input), options);
  });
  ipcMain.handle("settings:get", () => getSettings());
  ipcMain.handle("settings:set", (_event, patch) => {
    const next = setSettings(patch);
    broadcastSettings(next);
    return next;
  });
  ipcMain.handle("models:list", () => listModels());
  ipcMain.handle("models:download", (_event, modelId) => downloadModel(modelId));
  ipcMain.handle("models:delete", (_event, modelId) => deleteModel(modelId));
  ipcMain.handle("window:openSettings", () => openSettingsWindow());
  ipcMain.handle("window:openModels", () => openModelsWindow());
}
app.commandLine.appendSwitch("enable-features", "SharedArrayBuffer");
configureModelCache();
registerIpcHandlers();
installAppWindowHandlers();
app.whenReady().then(() => {
  createMainWindow();
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
