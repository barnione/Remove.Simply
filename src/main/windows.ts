import { BrowserWindow, app, shell } from "electron";
import { join } from "node:path";

let mainWindow: BrowserWindow | null = null;
let settingsWindow: BrowserWindow | null = null;
let modelsWindow: BrowserWindow | null = null;
let aboutWindow: BrowserWindow | null = null;

const preload = join(__dirname, "../preload/index.mjs");
const iconPath = join(process.cwd(), "build/icon.png");

function loadRenderer(
  window: BrowserWindow,
  entry: "main" | "settings" | "models" | "about"
): void {
  if (process.env.ELECTRON_RENDERER_URL) {
    window.loadURL(`${process.env.ELECTRON_RENDERER_URL}/${entry}/index.html`);
  } else {
    window.loadFile(join(__dirname, `../renderer/${entry}/index.html`));
  }
}

const titleBarOptions =
  process.platform === "darwin"
    ? ({
        titleBarStyle: "hiddenInset" as const,
        trafficLightPosition: { x: 16, y: 14 }
      } as const)
    : ({
        titleBarStyle: "hidden" as const,
        titleBarOverlay: {
          color: "#0f0f12",
          symbolColor: "#ffffff",
          height: 40
        }
      } as const);

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

export function getMainWindow(): BrowserWindow | null {
  return mainWindow;
}

export function createMainWindow(): BrowserWindow {
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

export function openSettingsWindow(): void {
  if (settingsWindow) {
    settingsWindow.focus();
    return;
  }

  settingsWindow = new BrowserWindow({
    ...commonWindowOptions(),
    width: 520,
    height: 640,
    resizable: false,
    parent: mainWindow ?? undefined,
    modal: false,
    title: "Settings"
  });
  settingsWindow.once("ready-to-show", () => settingsWindow?.show());
  settingsWindow.on("closed", () => {
    settingsWindow = null;
  });
  loadRenderer(settingsWindow, "settings");
}

export function openModelsWindow(): void {
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
    parent: mainWindow ?? undefined,
    modal: false,
    title: "Models"
  });
  modelsWindow.once("ready-to-show", () => modelsWindow?.show());
  modelsWindow.on("closed", () => {
    modelsWindow = null;
  });
  loadRenderer(modelsWindow, "models");
}

export function openAboutWindow(): void {
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
    parent: mainWindow ?? undefined,
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

export function closeAboutWindow(): void {
  aboutWindow?.close();
}

export function installAppWindowHandlers(): void {
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
  });
}
