import { ipcMain } from "electron";
import { autoUpdater, type UpdateInfo } from "electron-updater";
import { getMainWindow } from "./windows";
import { getSettings } from "./store";

let lastUpdateInfo: UpdateInfo | null = null;
let isDownloading = false;

function send(channel: string, payload?: unknown): void {
  const win = getMainWindow();
  if (!win || win.isDestroyed()) return;
  win.webContents.send(channel, payload);
}

export function initAutoUpdater(): void {
  autoUpdater.autoDownload = false;
  autoUpdater.autoInstallOnAppQuit = true;

  autoUpdater.on("update-available", (info) => {
    lastUpdateInfo = info;
    const settings = getSettings();

    send("update:available", {
      version: info.version,
      releaseNotes: info.releaseNotes as string | undefined,
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
      releaseNotes: info.releaseNotes as string | undefined,
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

  ipcMain.handle("update:info", () =>
    lastUpdateInfo
      ? {
          version: lastUpdateInfo.version,
          releaseNotes: lastUpdateInfo.releaseNotes as string | undefined,
          downloaded: false,
          autoUpdatesEnabled: getSettings().autoUpdatesEnabled
        }
      : null
  );
}

export function scheduleUpdateCheck(delayMs = 5000): void {
  if (process.env.NODE_ENV === "development") return;
  setTimeout(() => {
    autoUpdater.checkForUpdates().catch(() => {
      // Network or metadata issues are expected in some environments.
    });
  }, delayMs);
}
