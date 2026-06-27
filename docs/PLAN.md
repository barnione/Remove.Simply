# Plan: "Remove.Simply" — Electron background-removal app on HeroUI

## Context

We're building a desktop background-removal app inspired by
[`tecnomanu/remove-background-local`](https://github.com/tecnomanu/remove-background-local).
The original is a FastAPI + Python `rembg`/`onnxruntime` server with a single static HTML
UI, wrapped in a thin Electron shell that spawns the Python process and loads
`http://127.0.0.1:7860` over HTTP.

Goals for this rewrite:
- **Self-contained Electron app** — no Python runtime to ship or maintain.
- **UI built entirely from [HeroUI](https://heroui.com) React components.**
- **One main page** for the drag-drop / queue / download workflow.
- **Two popup windows**: Settings and Models (separate native `BrowserWindow`s).
- Keep the original's **full model lineup** (ISNet / BiRefNet / U2Net / human-seg /
  portrait / lite) with per-model download + status management.

### Key architectural decision (engine)
The original's models are `rembg`-specific (Python). To keep the full lineup *without*
Python, we run the inference in Electron's **main/utility process** using
**`@huggingface/transformers` (transformers.js) backed by `onnxruntime-node`** (native
CPU, optional CoreML on Apple Silicon). This gives native ONNX speed ("best overall")
with no external runtime ("least painful to maintain"). The renderer (HeroUI SPA) talks
to the engine over **IPC** via a `contextBridge` preload — no localhost HTTP server.

## Tech stack

| Concern | Choice |
|---|---|
| Shell | Electron (latest) |
| Build/dev | **electron-vite** (Vite under the hood; native multi-HTML renderer entries) |
| UI | React 18 + **HeroUI** (new generation, per [getting-started](https://heroui.com/docs/react/getting-started)) + `framer-motion` |
| Styling | `@heroui/styles` global import + **custom CSS-variable theme** (violet accent, provided below) + **Inter** font |
| Inference | `@huggingface/transformers` + `onnxruntime-node`, in main/utility process |
| Persistence | `electron-store` (settings + model registry state) |
| Packaging | `electron-builder` |

## Project structure

```
Remove.Simply/
├── package.json
├── README.md
├── docs/
│   └── PLAN.md                    # implementation notes and original structure plan
├── electron.vite.config.ts        # renderer HTML entries + main + preload
├── electron-builder.yml
├── build/                         # packaging assets (generated from the brand files below)
│   ├── icon.icns                  # macOS — compiled from assets/icon-removesimply.icon/
│   ├── icon.ico                   # Windows — generated from assets/windowsicon-removesimply.png
│   └── icon.png                   # Linux / fallback (512–1024px)
├── assets/
│   ├── icon-removesimply.icon/    # source Apple Icon Composer bundle (violet "layers" glyph)
│   └── windowsicon-removesimply.png
├── src/
│   ├── main/
│   │   ├── index.ts               # app lifecycle, creates windows
│   │   ├── windows.ts             # createMainWindow / openSettings / openModels
│   │   ├── ipc.ts                 # IPC handlers (process image, settings, models)
│   │   ├── engine/
│   │   │   ├── remover.ts         # transformers.js pipeline; load model, run, alpha matte
│   │   │   ├── models.ts          # MODEL_REGISTRY + download/cache/delete + sizes/status
│   │   │   └── encode.ts          # output to PNG/WebP/JPG, transparent/solid bg
│   │   └── store.ts               # electron-store schema (settings, model state)
│   ├── preload/
│   │   └── index.ts               # contextBridge: window.api.{removeBg, settings, models}
│   └── renderer/
│       ├── shared/
│       │   ├── Providers.tsx      # HeroUI provider + data-theme="dark"
│       │   └── global.css         # @heroui/styles import + custom theme + Inter font
│       ├── main/                  # MAIN one-page window
│       │   ├── index.html
│       │   ├── main.tsx
│       │   └── App.tsx            # dropzone, queue, results, download bar
│       ├── settings/              # SETTINGS popup window
│       │   ├── index.html
│       │   ├── main.tsx
│       │   └── SettingsApp.tsx
│       └── models/                # MODELS popup window
│           ├── index.html
│           ├── main.tsx
│           └── ModelsApp.tsx
```

## Implementation steps

### 1. Scaffold + dependencies
- `npm create` an empty project; add deps:
  - runtime: `electron`, `@huggingface/transformers`, `onnxruntime-node`, `electron-store`,
    `react`, `react-dom`, HeroUI packages (`@heroui/react` + `@heroui/styles` per the
    [getting-started](https://heroui.com/docs/react/getting-started) install steps), `framer-motion`
  - dev: `electron-vite`, `electron-builder`, `vite`, `@vitejs/plugin-react`, `typescript`, `@types/*`
- **HeroUI (new gen) + theming.** Follow the live getting-started install steps (the site
  blocks automated fetches here, so confirm exact package names/imports at scaffold time).
  `global.css` does, in order: (1) `@import` `@heroui/styles`; (2) the **custom theme block
  below verbatim**; (3) load **Inter** (`@fontsource/inter` or a `<link>`), bound via
  `--font-inter`. The theme defines light + dark via `:root`/`[data-theme]` CSS variables
  with a **violet accent** (`oklch(67.45% 0.1104 282.28)`), `--radius: 0.5rem`,
  `--field-radius: 0.75rem`.
- Wrap **each** renderer root in the HeroUI provider with `data-theme="dark"` on the root
  element so all three windows share the violet dark theme. Import `global.css` once per
  renderer entry.

  ```css
  /* src/renderer/shared/global.css — paste the user-provided theme verbatim */
  /* :root/.light/[data-theme="light"] { --accent: oklch(67.45% 0.1104 282.28); ... } */
  /* .dark/[data-theme="dark"] { color-scheme: dark; --background: oklch(12% ...); ... } */
  /* (full block stored in the plan thread; includes --surface, --field-*, --danger,      */
  /*  --success, --warning, --radius, --field-radius, --font-sans: var(--font-inter))      */
  ```

### 2. Electron shell + windows (`src/main`)
- `index.ts`: standard electron-vite main; on `ready` create the main window
  (1200×820, min 720×520, dark bg `#0f0f12` — matching the original).
- `windows.ts`:
  - `createMainWindow()` → loads `renderer/main/index.html`.
  - `openSettingsWindow()` → child `BrowserWindow` (~520×640, resizable:false, `parent`,
    `modal:false`), loads `renderer/settings/index.html`. Single-instance (focus if open).
  - `openModelsWindow()` → child `BrowserWindow` (~760×620), loads `renderer/models/index.html`.
- `electron.vite.config.ts`: declare the **three HTML inputs** under
  `build.rollupOptions.input` for the renderer so each window bundles independently.
- Security: `contextIsolation:true`, `nodeIntegration:false`, preload exposes a typed API.

### 3. Inference engine (`src/main/engine`)
- `models.ts` — `MODEL_REGISTRY`: array mirroring the original lineup, each entry
  `{ id, label, hfRepo, approxSizeMB, speedNote, default }`. Suggested mapping to ONNX
  models on Hugging Face (validate exact repo ids during impl):
  - **ISNet (default, fast/quality)** → `briaai/RMBG-1.4` (ISNet arch)
  - **BiRefNet (premium 2024)** → `briaai/RMBG-2.0` / `onnx-community` BiRefNet export
  - **U2Net (classic)** → U2Net ONNX export
  - **Human seg** → U2Net human-seg ONNX
  - **Portrait** → MODNet / u2net portrait ONNX
  - **Lite** → `silueta` / `u2netp`
  - Functions: `listModels()` (registry + cached?/sizeOnDisk/status), `downloadModel(id)`
    (stream with progress events → renderer), `deleteModel(id)`. Use transformers.js cache
    dir under `app.getPath('userData')` set via env (`HF_HOME`/`TRANSFORMERS_CACHE`).
- `remover.ts` — lazy-load the selected model via transformers.js
  (`AutoModel`/`pipeline("background-removal"|"image-segmentation")`), run on an input
  buffer, produce an RGBA mask. Implement **alpha-matting threshold controls** (port the
  original's advanced option) as a post-process on the alpha channel.
- `encode.ts` — compose foreground over transparent or a solid color; encode **PNG / WebP /
  JPG** (use `sharp` if a fast native encoder is wanted, else canvas in renderer). Mirrors
  the original's download options.

### 4. IPC + preload
- `ipc.ts` handlers: `engine:remove` (buffer + opts → result buffer), `models:list`,
  `models:download` (emits `models:progress`), `models:delete`, `settings:get/set`,
  `window:openSettings`, `window:openModels`.
- `preload/index.ts`: `contextBridge.exposeInMainWorld('api', {...})` with typed wrappers
  and event subscriptions (progress, settings-changed broadcast so all windows stay synced).

### 5. Renderer UIs (HeroUI only)
- **Main window (`App.tsx`)** — single page:
  - Header: app title + HeroUI `Button`s to open Settings / Models windows.
  - Drag-drop zone (HeroUI `Card` + drop handlers) with clipboard-paste support.
  - Queue: HeroUI `Table`/`Listbox` of items with `Progress`/`Spinner` + `Chip` status.
  - Result preview with bg-contrast toggle (HeroUI `Tabs`/`Switch`), and a download bar
    (`ButtonGroup` + `Select` for PNG/WebP/JPG and bg color via HeroUI color picker/`Select`).
- **Settings window (`SettingsApp.tsx`)** — HeroUI `Form` controls: default model
  (`Select`), output format/quality, alpha-matting toggle + thresholds (`Slider`),
  execution provider (CPU/CoreML) (`Select`), max upload size (`Input`), theme (`Switch`).
  Persists via `window.api.settings.set`.
- **Models window (`ModelsApp.tsx`)** — HeroUI `Table` of `MODEL_REGISTRY`: label, size,
  status `Chip` (Not downloaded / Downloading / Ready), `Progress` bar during download,
  Download / Delete `Button`s, "Set as default" action. First-run experience: if no model
  cached, main window nudges the user here (mirrors original's first-run setup screen).
- All three share `Providers.tsx` and Tailwind/HeroUI theme.

### 6. App icons + packaging
- **Icons (use the provided brand files):**
  - macOS: compile `assets/icon-removesimply.icon/` (Apple Icon Composer bundle) to
    `build/icon.icns`. Path A — open in Icon Composer.app and export `.icns`; Path B — CLI
    convert the bundle's rendered PNG via `iconutil`/`sips` into an `.iconset` → `.icns`.
  - Windows: convert `assets/windowsicon-removesimply.png` (high-res) to a multi-size
    `build/icon.ico` (16–256px) via `sharp`/ImageMagick/`png-to-ico`.
  - Linux: export a 512–1024px `build/icon.png`.
  - Also set the runtime window icon (`BrowserWindow({ icon })`) for win/linux, and use the
    violet glyph as the in-app logo where the UI shows branding.
- `electron-builder.yml`: point `mac.icon`/`win.icon`/`linux.icon` at the `build/` files;
  ensure `onnxruntime-node` native binaries + the transformers.js model cache are
  `asarUnpack`ed.
- Scripts: `dev` (electron-vite dev), `build`, `dist` (electron-builder).

## Files to create (representative)
- `package.json`, `electron.vite.config.ts`, `tailwind.config.js`, `postcss.config.js`,
  `electron-builder.yml`
- `src/main/{index,windows,ipc,store}.ts`, `src/main/engine/{remover,models,encode}.ts`
- `src/preload/index.ts`
- `src/renderer/shared/{Providers.tsx,global.css}`
- `src/renderer/{main,settings,models}/{index.html,main.tsx,*App.tsx}`
- `build/{icon.icns,icon.ico,icon.png}` (generated from `assets/` brand files)

## Verification
1. `npm run dev` → main window opens, HeroUI styled with the **violet dark theme** and Inter
   font (confirms `@heroui/styles` + custom CSS-variable theme wired across all entries).
2. Open Settings and Models from the header buttons → two separate native windows appear,
   both HeroUI-styled, settings changes persist across restart (`electron-store`).
3. In Models, download the default ISNet model → progress bar advances, status → Ready,
   size shown; delete works.
4. Drop a JPG/PNG on the main page → item queues, processes via IPC, transparent-bg result
   previews; toggle bg-contrast; download as PNG (transparent) and JPG (solid color).
5. Switch default model to BiRefNet in Settings → next removal uses it (slower, higher
   quality), confirming model switching end-to-end.
6. `npm run dist` produces an installer that launches without any Python present (validates
   the "no external runtime" goal), and the built app shows the **Remove.Simply violet
   layers icon** (macOS `.icns`, Windows `.ico`).

## Open items to confirm during implementation
- Exact ONNX repo ids for each model (some `rembg` variants need a verified ONNX export;
  fall back to nearest equivalent and label honestly in the registry).
- Exact new-gen HeroUI install commands / import paths (`@heroui/react` + `@heroui/styles`,
  provider component name) — read the live getting-started page at scaffold time since the
  site blocks automated fetches here. The **custom theme CSS is fixed** (used verbatim).
- macOS icon: easiest reliable path to a notarizable `.icns` from the `.icon` bundle
  (Icon Composer export vs CLI `iconutil`) — pick whichever is available on this machine.

## Appendix — `global.css` theme block (paste verbatim)

```css
/*
 * HeroUI Theme Customization
 * Add this to your global.css after importing @heroui/styles
 * @see https://heroui.com/docs/react/getting-started/theming
 */

:root,
.light,
.default,
[data-theme="light"],
[data-theme="default"] {
  --accent: oklch(67.45% 0.1104 282.28);
  --accent-foreground: oklch(15% 0.0221 282.28);
  --background: oklch(97.02% 0.0015 282.28);
  --border: oklch(90.00% 0.0015 282.28);
  --danger: oklch(65.32% 0.2335 29.15);
  --danger-foreground: oklch(99.11% 0 0);
  --default: oklch(94.00% 0.0015 282.28);
  --default-foreground: oklch(21.03% 0.0059 282.28);
  --field-background: oklch(100.00% 0.0008 282.28);
  --field-border: transparent;
  --field-foreground: oklch(21.03% 0.0015 282.28);
  --field-placeholder: oklch(55.17% 0.0030 282.28);
  --focus: oklch(67.45% 0.1104 282.28);
  --foreground: oklch(21.03% 0.0015 282.28);
  --muted: oklch(55.17% 0.0030 282.28);
  --overlay: oklch(100.00% 0.0004 282.28);
  --overlay-foreground: oklch(21.03% 0.0015 282.28);
  --scrollbar: oklch(87.10% 0.0015 282.28);
  --segment: oklch(100.00% 0.0015 282.28);
  --segment-foreground: oklch(21.03% 0.0015 282.28);
  --separator: oklch(92.00% 0.0015 282.28);
  --success: oklch(73.29% 0.1941 154.22);
  --success-foreground: oklch(21.03% 0.0059 154.22);
  --surface: oklch(100.00% 0.0008 282.28);
  --surface-foreground: oklch(21.03% 0.0015 282.28);
  --surface-secondary: oklch(95.24% 0.0012 282.28);
  --surface-secondary-foreground: oklch(21.03% 0.0015 282.28);
  --surface-tertiary: oklch(93.73% 0.0012 282.28);
  --surface-tertiary-foreground: oklch(21.03% 0.0015 282.28);
  --warning: oklch(78.19% 0.1590 75.74);
  --warning-foreground: oklch(21.03% 0.0059 75.74);

  --radius: 0.5rem;
  --field-radius: 0.75rem;

  /* Make sure to load Inter font in your app */
  --font-sans: var(--font-inter);
}

.dark,
[data-theme="dark"] {
  color-scheme: dark;
  --accent: oklch(67.45% 0.1104 282.28);
  --accent-foreground: oklch(15% 0.0221 282.28);
  --background: oklch(12.00% 0.0015 282.28);
  --border: oklch(28.00% 0.0015 282.28);
  --danger: oklch(59.40% 0.1973 28.04);
  --danger-foreground: oklch(99.11% 0 0);
  --default: oklch(27.40% 0.0015 282.28);
  --default-foreground: oklch(99.11% 0 0);
  --field-background: oklch(21.03% 0.0030 282.28);
  --field-border: transparent;
  --field-foreground: oklch(99.11% 0.0015 282.28);
  --field-placeholder: oklch(70.50% 0.0030 282.28);
  --focus: oklch(67.45% 0.1104 282.28);
  --foreground: oklch(99.11% 0.0015 282.28);
  --muted: oklch(70.50% 0.0030 282.28);
  --overlay: oklch(21.03% 0.0030 282.28);
  --overlay-foreground: oklch(99.11% 0.0015 282.28);
  --scrollbar: oklch(70.50% 0.0015 282.28);
  --segment: oklch(39.64% 0.0015 282.28);
  --segment-foreground: oklch(99.11% 0.0015 282.28);
  --separator: oklch(25.00% 0.0015 282.28);
  --success: oklch(73.29% 0.1941 154.22);
  --success-foreground: oklch(21.03% 0.0059 154.22);
  --surface: oklch(21.03% 0.0030 282.28);
  --surface-foreground: oklch(99.11% 0.0015 282.28);
  --surface-secondary: oklch(25.70% 0.0023 282.28);
  --surface-secondary-foreground: oklch(99.11% 0.0015 282.28);
  --surface-tertiary: oklch(27.21% 0.0023 282.28);
  --surface-tertiary-foreground: oklch(99.11% 0.0015 282.28);
  --warning: oklch(82.03% 0.1392 79.75);
  --warning-foreground: oklch(21.03% 0.0059 79.75);
}
```
