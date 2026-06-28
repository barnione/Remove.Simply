import { execSync } from "node:child_process";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import react from "@vitejs/plugin-react";

const pkg = JSON.parse(
  readFileSync(resolve(__dirname, "package.json"), "utf8")
) as { version: string };

const buildId = (() => {
  try {
    return execSync("git rev-parse --short HEAD", { stdio: ["ignore", "pipe", "ignore"] })
      .toString()
      .trim();
  } catch {
    return new Date().toISOString().slice(0, 10).replace(/-/g, "");
  }
})();

const appDefine = {
  __APP_VERSION__: JSON.stringify(pkg.version),
  __BUILD_ID__: JSON.stringify(buildId)
};

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, "src/main/index.ts"),
          inferenceWorker: resolve(__dirname, "src/main/engine/inferenceWorker.ts")
        }
      }
    }
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
    build: {
      rollupOptions: {
        input: {
          index: resolve(__dirname, "src/preload/index.ts")
        }
      }
    }
  },
  renderer: {
    plugins: [react()],
    define: appDefine,
    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, "src/renderer/main/index.html"),
          settings: resolve(__dirname, "src/renderer/settings/index.html"),
          models: resolve(__dirname, "src/renderer/models/index.html"),
          about: resolve(__dirname, "src/renderer/about/index.html")
        }
      }
    }
  }
});
