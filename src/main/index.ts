import { app } from "electron";
import { configureModelCache } from "./engine/models";
import { registerIpcHandlers } from "./ipc";
import { createMainWindow, installAppWindowHandlers } from "./windows";

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
