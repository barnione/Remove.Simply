import { r as reactExports, j as jsxRuntimeExports, z as card_default, B as card_header_default, C as divider_default, A as card_body_default, D as clientExports, P as Providers } from "./Providers-WL0Y5vQ8.js";
import { c as createLucideIcon, a as chip_default, p as progress_default, b as button_default } from "./createLucideIcon-sK881ko4.js";
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$3 = [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]];
const Check = createLucideIcon("check", __iconNode$3);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$2 = [
  ["path", { d: "M12 13v8l-4-4", key: "1f5nwf" }],
  ["path", { d: "m12 21 4-4", key: "1lfcce" }],
  ["path", { d: "M4.393 15.269A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284", key: "ui1hmy" }]
];
const CloudDownload = createLucideIcon("cloud-download", __iconNode$2);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode$1 = [
  [
    "path",
    {
      d: "M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",
      key: "r04s7s"
    }
  ]
];
const Star = createLucideIcon("star", __iconNode$1);
/**
 * @license lucide-react v0.523.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const __iconNode = [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }]
];
const Trash2 = createLucideIcon("trash-2", __iconNode);
function ModelsApp() {
  const [models, setModels] = reactExports.useState([]);
  const [settings, setSettings] = reactExports.useState(null);
  const [progress, setProgress] = reactExports.useState({});
  const refresh = () => void window.api.models.list().then(setModels);
  reactExports.useEffect(() => {
    refresh();
    void window.api.settings.get().then(setSettings);
    const offSettings = window.api.settings.onChanged(setSettings);
    const offProgress = window.api.models.onProgress((event) => {
      setProgress((current) => ({ ...current, [event.modelId]: event }));
      refresh();
    });
    return () => {
      offSettings();
      offProgress();
    };
  }, []);
  const setDefault = (defaultModel) => {
    void window.api.settings.set({ defaultModel }).then(setSettings);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "h-full overflow-auto bg-background p-5 text-foreground", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(card_default, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(card_header_default, { className: "flex-col items-start gap-1", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-xl font-semibold", children: "Models" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-small text-default-500", children: "Download, delete, and choose the default segmentation model." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(divider_default, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(card_body_default, { className: "gap-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid gap-3", children: models.map((model) => {
      const modelProgress = progress[model.id];
      const isDownloading = model.status === "downloading" || modelProgress?.status === "downloading";
      const isDefault = settings?.defaultModel === model.id;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(card_default, { shadow: "none", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(card_body_default, { className: "gap-3", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-medium font-semibold", children: model.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-small text-default-500", children: [
              model.hfRepo,
              " · ~",
              model.approxSizeMB,
              " MB · ",
              model.speedNote
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(chip_default, { color: model.cached ? "success" : isDownloading ? "primary" : "default", variant: "flat", children: isDownloading ? "Downloading" : model.cached ? "Ready" : "Not downloaded" })
        ] }),
        isDownloading && /* @__PURE__ */ jsxRuntimeExports.jsx(
          progress_default,
          {
            "aria-label": `${model.label} download progress`,
            value: modelProgress?.progress ?? 10,
            size: "sm"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-small text-default-500", children: model.cached ? `${model.sizeOnDiskMB} MB on disk` : "Not cached locally" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap justify-end gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              button_default,
              {
                size: "sm",
                variant: isDefault ? "solid" : "flat",
                color: isDefault ? "primary" : "default",
                startContent: isDefault ? /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { size: 15 }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { size: 15 }),
                onPress: () => setDefault(model.id),
                children: isDefault ? "Default" : "Set default"
              }
            ),
            model.cached ? /* @__PURE__ */ jsxRuntimeExports.jsx(
              button_default,
              {
                size: "sm",
                color: "danger",
                variant: "flat",
                startContent: /* @__PURE__ */ jsxRuntimeExports.jsx(Trash2, { size: 15 }),
                onPress: () => void window.api.models.delete(model.id).then(setModels),
                children: "Delete"
              }
            ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
              button_default,
              {
                size: "sm",
                color: "primary",
                variant: "flat",
                startContent: /* @__PURE__ */ jsxRuntimeExports.jsx(CloudDownload, { size: 15 }),
                isLoading: isDownloading,
                onPress: () => void window.api.models.download(model.id).then(setModels),
                children: "Download"
              }
            )
          ] })
        ] })
      ] }) }, model.id);
    }) }) })
  ] }) });
}
clientExports.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsx(reactExports.StrictMode, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Providers, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(ModelsApp, {}) }) })
);
