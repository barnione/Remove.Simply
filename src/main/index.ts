import { app } from "electron";
import { configureModelCache } from "./engine/models";
import { registerIpcHandlers } from "./ipc";
import { initAutoUpdater, scheduleUpdateCheck } from "./updater";
import { createMainWindow, installAppWindowHandlers } from "./windows";

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
