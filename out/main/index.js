import { app, BrowserWindow, utilityProcess, shell, ipcMain } from "electron";
import { existsSync, mkdirSync, statSync, createWriteStream, rmSync } from "node:fs";
import { join } from "node:path";
import sharp from "sharp";
import Store from "electron-store";
import electronUpdater from "electron-updater";
import __cjs_mod__ from "node:module";
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
const require2 = __cjs_mod__.createRequire(import.meta.url);
const RELEASE_BASE = "https://github.com/danielgatis/rembg/releases/download/v0.0.0";
const MODEL_REGISTRY = [
  {
    id: "isnet-general",
    label: "ISNet General",
    family: "isnet",
    onnxFile: "isnet-general-use.onnx",
    approxSizeMB: 170,
    speedNote: "Great all-rounder",
    default: true
  },
  {
    id: "u2net",
    label: "U2-Net",
    family: "u2net",
    onnxFile: "u2net.onnx",
    approxSizeMB: 168,
    speedNote: "Classic, reliable"
  },
  {
    id: "u2netp",
    label: "U2-Net Lite",
    family: "u2net",
    onnxFile: "u2netp.onnx",
    approxSizeMB: 4,
    speedNote: "Very fast, lower quality"
  },
  {
    id: "u2net-human",
    label: "U2-Net Human Seg",
    family: "u2net",
    onnxFile: "u2net_human_seg.onnx",
    approxSizeMB: 168,
    speedNote: "Optimized for people"
  },
  {
    id: "silueta",
    label: "Silueta",
    family: "u2net",
    onnxFile: "silueta.onnx",
    approxSizeMB: 42,
    speedNote: "Lightweight, decent quality"
  },
  {
    id: "isnet-anime",
    label: "ISNet Anime",
    family: "isnet",
    onnxFile: "isnet-anime.onnx",
    approxSizeMB: 168,
    speedNote: "Optimized for anime/illustration"
  },
  {
    id: "birefnet-general",
    label: "BiRefNet General",
    family: "birefnet",
    onnxFile: "BiRefNet-general-epoch_244.onnx",
    approxSizeMB: 927,
    speedNote: "High quality, large"
  },
  {
    id: "birefnet-general-lite",
    label: "BiRefNet General Lite",
    family: "birefnet",
    onnxFile: "BiRefNet-general-bb_swin_v1_tiny-epoch_232.onnx",
    approxSizeMB: 214,
    speedNote: "Good quality, lighter"
  },
  {
    id: "birefnet-portrait",
    label: "BiRefNet Portrait",
    family: "birefnet",
    onnxFile: "BiRefNet-portrait-epoch_150.onnx",
    approxSizeMB: 927,
    speedNote: "Best for portraits, large"
  },
  {
    id: "birefnet-massive",
    label: "BiRefNet Massive",
    family: "birefnet",
    onnxFile: "BiRefNet-massive-TR_DIS5K_TR_TEs-epoch_420.onnx",
    approxSizeMB: 927,
    speedNote: "Highest quality, very large"
  }
];
const downloading = /* @__PURE__ */ new Map();
function modelCacheRoot() {
  return join(app.getPath("userData"), "models");
}
function configureModelCache() {
  const cache = modelCacheRoot();
  if (!existsSync(cache)) mkdirSync(cache, { recursive: true });
}
function onnxPathFor(onnxFile) {
  return join(modelCacheRoot(), onnxFile);
}
function isModelCached(onnxFile) {
  return existsSync(onnxPathFor(onnxFile));
}
function getModelEntry(modelId) {
  return MODEL_REGISTRY.find((model) => model.id === modelId) ?? MODEL_REGISTRY[0];
}
function getOnnxPath(modelId) {
  return onnxPathFor(getModelEntry(modelId).onnxFile);
}
function getModelFamily(modelId) {
  return getModelEntry(modelId).family;
}
function listModels() {
  return MODEL_REGISTRY.map((model) => {
    const path = onnxPathFor(model.onnxFile);
    const cached = isModelCached(model.onnxFile);
    const sizeOnDiskMB = cached ? Math.round(statSync(path).size / 1024 / 1024 * 10) / 10 : 0;
    return {
      ...model,
      cached,
      sizeOnDiskMB,
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
  if (downloading.has(model.id)) return listModels();
  const abort = new AbortController();
  downloading.set(model.id, abort);
  emitProgress({ modelId: model.id, progress: 5, status: "downloading", message: "Starting download" });
  const dest = onnxPathFor(model.onnxFile);
  try {
    const url = `${RELEASE_BASE}/${model.onnxFile}`;
    mkdirSync(modelCacheRoot(), { recursive: true });
    const response = await fetch(url, { redirect: "follow", signal: abort.signal });
    if (!response.ok || !response.body) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const contentLength = Number(response.headers.get("content-length") ?? 0);
    const fileStream = createWriteStream(dest);
    let downloaded = 0;
    const reader = response.body.getReader();
    await reader.read().then(function pump({ done, value }) {
      if (abort.signal.aborted) {
        reader.cancel();
        fileStream.destroy();
        return;
      }
      if (done) {
        fileStream.end();
        return;
      }
      fileStream.write(value);
      downloaded += value.byteLength;
      if (contentLength > 0) {
        const pct = Math.max(5, Math.min(98, Math.round(downloaded / contentLength * 100)));
        emitProgress({
          modelId: model.id,
          progress: pct,
          status: "downloading",
          message: `${Math.round(downloaded / 1024 / 1024)} / ${Math.round(contentLength / 1024 / 1024)} MB`
        });
      }
      return reader.read().then(pump);
    });
    if (!abort.signal.aborted) {
      await new Promise((resolve, reject) => {
        fileStream.on("finish", resolve);
        fileStream.on("error", reject);
      });
      emitProgress({ modelId: model.id, progress: 100, status: "ready", message: "Ready" });
    }
  } catch (error) {
    if (abort.signal.aborted) return listModels();
    console.error("[models] download error:", error);
    emitProgress({
      modelId: model.id,
      progress: 0,
      status: "error",
      message: error instanceof Error ? error.message : "Download failed"
    });
  } finally {
    downloading.delete(model.id);
    if (abort.signal.aborted && existsSync(dest)) rmSync(dest, { force: true });
  }
  return listModels();
}
function cancelDownload(modelId) {
  const abort = downloading.get(modelId);
  if (abort) abort.abort();
  return listModels();
}
function deleteModel(modelId) {
  const model = getModelEntry(modelId);
  const path = onnxPathFor(model.onnxFile);
  if (existsSync(path)) rmSync(path, { force: true });
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
const MODEL_CONFIGS = {
  u2net: { size: 320, mean: [0.485, 0.456, 0.406], std: [0.229, 0.224, 0.225] },
  isnet: { size: 1024, mean: [0.5, 0.5, 0.5], std: [1, 1, 1] },
  birefnet: { size: 1024, mean: [0.485, 0.456, 0.406], std: [0.229, 0.224, 0.225] }
};
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
async function preprocess(input, family) {
  const { size, mean, std } = MODEL_CONFIGS[family];
  const pixels = await sharp(input).rotate().resize(size, size, { fit: "fill", kernel: "lanczos3" }).removeAlpha().raw().toBuffer();
  let maxVal = 0;
  for (let i = 0; i < pixels.length; i++) {
    if (pixels[i] > maxVal) maxVal = pixels[i];
  }
  const norm = Math.max(maxVal, 1);
  const float = new Float32Array(3 * size * size);
  for (let i = 0; i < size * size; i++) {
    float[i] = (pixels[i * 3] / norm - mean[0]) / std[0];
    float[size * size + i] = (pixels[i * 3 + 1] / norm - mean[1]) / std[1];
    float[2 * size * size + i] = (pixels[i * 3 + 2] / norm - mean[2]) / std[2];
  }
  return float;
}
function postprocessMask(output, family, size) {
  const useSigmoid = family === "birefnet";
  const pixelCount = size * size;
  const mask = new Uint8Array(pixelCount);
  let min = Infinity;
  let max = -Infinity;
  for (let i = 0; i < pixelCount; i++) {
    let v = output[i];
    if (useSigmoid) v = 1 / (1 + Math.exp(-v));
    if (v < min) min = v;
    if (v > max) max = v;
  }
  const range = max - min || 1;
  for (let i = 0; i < pixelCount; i++) {
    let v = output[i];
    if (useSigmoid) v = 1 / (1 + Math.exp(-v));
    mask[i] = clamp(Math.round((v - min) / range * 255));
  }
  return mask;
}
function runInferenceInProcess(onnxPath, floatData, size, executionProvider) {
  return new Promise((resolve, reject) => {
    const workerPath = join(__dirname, "inferenceWorker.js");
    const child = utilityProcess.fork(workerPath);
    let settled = false;
    child.on("message", (msg) => {
      if (settled) return;
      settled = true;
      if (msg?.error) {
        reject(new Error(msg.error));
      } else if (msg?.data) {
        const buf = Buffer.from(msg.data, "base64");
        resolve(new Float32Array(buf.buffer, buf.byteOffset, buf.byteLength / 4));
      }
      child.kill();
    });
    child.on("exit", (code) => {
      if (!settled) {
        settled = true;
        reject(new Error(`Inference process crashed (exit code ${code})`));
      }
    });
    const floatBuf = Buffer.from(floatData.buffer, floatData.byteOffset, floatData.byteLength);
    child.postMessage({
      onnxPath,
      floatDataBase64: floatBuf.toString("base64"),
      size,
      executionProvider
    });
  });
}
async function tryModelMask(input, options) {
  try {
    const modelId = options.modelId;
    const onnxPath = getOnnxPath(modelId);
    const family = getModelFamily(modelId);
    const { size } = MODEL_CONFIGS[family];
    const metadata = await sharp(input).rotate().metadata();
    const origW = metadata.width ?? 1;
    const origH = metadata.height ?? 1;
    const floatData = await preprocess(input, family);
    const outputData = await runInferenceInProcess(
      onnxPath,
      floatData,
      size,
      options.executionProvider
    );
    const rawMask = postprocessMask(outputData, family, size);
    const maskResized = await sharp(Buffer.from(rawMask), { raw: { width: size, height: size, channels: 1 } }).resize(origW, origH, { fit: "fill", kernel: "lanczos3" }).raw().toBuffer();
    const source = await sharp(input).rotate().resize(origW, origH).ensureAlpha().raw().toBuffer();
    for (let i = 0; i < origW * origH; i++) {
      source[i * 4 + 3] = maskResized[i];
    }
    if (options.alphaMatting.enabled) {
      for (let i = 0; i < origW * origH; i++) {
        source[i * 4 + 3] = applyAlphaSettings(source[i * 4 + 3], options);
      }
    }
    return { rgba: source, width: origW, height: origH };
  } catch (err) {
    console.error("[remover] model inference failed:", err);
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
const store = new Store({
  name: "remove-simply",
  defaults: {
    settings: DEFAULT_SETTINGS
  }
});
function getSettings() {
  const settings = { ...DEFAULT_SETTINGS, ...store.get("settings") };
  const cached = listModels().filter((m) => m.cached);
  if (cached.length && !cached.some((m) => m.id === settings.defaultModel)) {
    settings.defaultModel = cached[0].id;
  }
  return settings;
}
function setSettings(patch) {
  const current = getSettings();
  if (patch.defaultModel) {
    const cached = listModels().filter((m) => m.cached);
    if (!cached.some((m) => m.id === patch.defaultModel)) {
      delete patch.defaultModel;
    }
  }
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
let aboutWindow = null;
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
function getMainWindow() {
  return mainWindow;
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
function openAboutWindow() {
  if (aboutWindow) {
    aboutWindow.focus();
    return;
  }
  aboutWindow = new BrowserWindow({
    width: 380,
    height: 260,
    resizable: false,
    minimizable: false,
    maximizable: false,
    fullscreenable: false,
    frame: false,
    show: false,
    autoHideMenuBar: true,
    backgroundColor: "#0f0f12",
    parent: mainWindow ?? void 0,
    modal: false,
    skipTaskbar: true,
    webPreferences: {
      preload,
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false
    }
  });
  aboutWindow.once("ready-to-show", () => aboutWindow?.show());
  aboutWindow.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url);
    return { action: "deny" };
  });
  aboutWindow.on("closed", () => {
    aboutWindow = null;
  });
  loadRenderer(aboutWindow, "about");
}
function closeAboutWindow() {
  aboutWindow?.close();
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
  ipcMain.handle("settings:defaults", () => DEFAULT_SETTINGS);
  ipcMain.handle("settings:set", (_event, patch) => {
    const next = setSettings(patch);
    broadcastSettings(next);
    return next;
  });
  ipcMain.handle("models:list", () => listModels());
  ipcMain.handle("models:download", (_event, modelId) => downloadModel(modelId));
  ipcMain.handle("models:cancel", (_event, modelId) => cancelDownload(modelId));
  ipcMain.handle("models:delete", (_event, modelId) => deleteModel(modelId));
  ipcMain.handle("window:openSettings", () => openSettingsWindow());
  ipcMain.handle("window:openModels", () => openModelsWindow());
  ipcMain.handle("window:openAbout", () => openAboutWindow());
  ipcMain.handle("window:closeAbout", () => closeAboutWindow());
}
const { autoUpdater } = electronUpdater;
let lastUpdateInfo = null;
let isDownloading = false;
function send(channel, payload) {
  const win = getMainWindow();
  if (!win || win.isDestroyed()) return;
  win.webContents.send(channel, payload);
}
function initAutoUpdater() {
  autoUpdater.autoDownload = false;
  autoUpdater.autoInstallOnAppQuit = true;
  autoUpdater.on("update-available", (info) => {
    lastUpdateInfo = info;
    const settings = getSettings();
    send("update:available", {
      version: info.version,
      releaseNotes: info.releaseNotes,
      downloaded: false,
      autoUpdatesEnabled: settings.autoUpdatesEnabled
    });
    if (settings.autoUpdatesEnabled && !isDownloading) {
      isDownloading = true;
      send("update:status", { status: "downloading", version: info.version });
      autoUpdater.downloadUpdate().catch((error) => {
        isDownloading = false;
        send("update:status", { status: "error", message: String(error) });
      });
    }
  });
  autoUpdater.on("update-downloaded", (info) => {
    isDownloading = false;
    lastUpdateInfo = info;
    send("update:available", {
      version: info.version,
      releaseNotes: info.releaseNotes,
      downloaded: true,
      autoUpdatesEnabled: getSettings().autoUpdatesEnabled
    });
  });
  autoUpdater.on("error", (error) => {
    isDownloading = false;
    send("update:status", { status: "error", message: error.message });
  });
  ipcMain.handle("update:check", async () => {
    return autoUpdater.checkForUpdates();
  });
  ipcMain.handle("update:download", async () => {
    if (isDownloading) return null;
    isDownloading = true;
    return autoUpdater.downloadUpdate();
  });
  ipcMain.handle("update:install", () => {
    autoUpdater.quitAndInstall(false, true);
  });
  ipcMain.handle(
    "update:info",
    () => lastUpdateInfo ? {
      version: lastUpdateInfo.version,
      releaseNotes: lastUpdateInfo.releaseNotes,
      downloaded: false,
      autoUpdatesEnabled: getSettings().autoUpdatesEnabled
    } : null
  );
}
function scheduleUpdateCheck(delayMs = 5e3) {
  if (process.env.NODE_ENV === "development") return;
  setTimeout(() => {
    autoUpdater.checkForUpdates().catch(() => {
    });
  }, delayMs);
}
app.commandLine.appendSwitch("enable-features", "SharedArrayBuffer");
configureModelCache();
registerIpcHandlers();
installAppWindowHandlers();
initAutoUpdater();
app.whenReady().then(() => {
  createMainWindow();
  scheduleUpdateCheck();
});
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
