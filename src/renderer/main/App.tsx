import {
  Button,
  Card,
  CardBody,
  Chip,
  Navbar,
  NavbarContent,
  NavbarItem,
  Progress,
  Select,
  SelectItem,
  Switch,
  Tooltip,
  addToast
} from "@heroui/react";
import {
  Download,
  Eraser,
  FolderCog,
  ImagePlus,
  RefreshCcw,
  Settings as SettingsIcon,
  X
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { AppSettings, ModelInfo, RemoveOptions } from "../../types";
import { ChromaSwatch } from "./ChromaSwatch";

type QueueStatus = "queued" | "processing" | "done" | "error";

interface QueueItem {
  id: string;
  file: File;
  status: QueueStatus;
  progress: number;
  resultUrl?: string;
  mimeType?: string;
  error?: string;
}

const formats = ["png", "webp", "jpg"] as const;

const presetColors = ["#ffffff", "#000000", "#808080", "#3b82f6", "#ef4444"];

function BackgroundColorSwatches({
  value,
  disabled,
  onChange
}: {
  value: string;
  disabled: boolean;
  onChange: (color: string) => void;
}) {
  const current = value.toLowerCase();
  const isPreset = presetColors.includes(current);
  return (
    <div
      className={`flex items-center gap-1.5 transition-opacity ${
        disabled ? "opacity-40" : ""
      }`}
      aria-label="Background color"
    >
      {presetColors.map((color) => {
        const active = current === color;
        return (
          <button
            key={color}
            type="button"
            disabled={disabled}
            onClick={() => onChange(color)}
            title={color.toUpperCase()}
            aria-label={`Background ${color}`}
            className={`h-6 w-6 rounded-full border-2 transition disabled:cursor-not-allowed ${
              active
                ? "border-primary"
                : "border-default-200 hover:border-default-300"
            }`}
            style={{ backgroundColor: color }}
          />
        );
      })}
      <ChromaSwatch
        value={value}
        disabled={disabled}
        active={!isPreset}
        showGradient={isPreset}
        onChange={onChange}
      />
    </div>
  );
}

const statusColor = (status: QueueStatus) =>
  status === "done"
    ? "success"
    : status === "error"
    ? "danger"
    : status === "processing"
    ? "primary"
    : "default";

const CHECKER_BG =
  "linear-gradient(45deg, hsl(var(--heroui-default-100)) 25%, transparent 25%), " +
  "linear-gradient(-45deg, hsl(var(--heroui-default-100)) 25%, transparent 25%), " +
  "linear-gradient(45deg, transparent 75%, hsl(var(--heroui-default-100)) 75%), " +
  "linear-gradient(-45deg, transparent 75%, hsl(var(--heroui-default-100)) 75%)";

export function App() {
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [models, setModels] = useState<ModelInfo[]>([]);
  const [items, setItems] = useState<QueueItem[]>([]);
  const [dragging, setDragging] = useState(false);
  const [windowDragging, setWindowDragging] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const dragCounter = useRef(0);

  useEffect(() => {
    void window.api.settings.get().then(setSettings);
    void window.api.models.list().then(setModels);
    const offSettings = window.api.settings.onChanged(setSettings);
    const offProgress = window.api.models.onProgress(() => {
      void window.api.models.list().then(setModels);
    });
    return () => {
      offSettings();
      offProgress();
    };
  }, []);

  const readyModels = useMemo(() => models.filter((m) => m.cached), [models]);
  const selectedItem =
    items.find((item) => item.status === "done" && item.resultUrl) ?? items[0];

  const processFile = useCallback(
    async (file: File) => {
      if (!settings) return;
      if (!file.type.startsWith("image/")) {
        addToast({
          title: "Unsupported file",
          description: `${file.name} is not an image.`,
          color: "danger"
        });
        return;
      }
      if (file.size > settings.maxUploadSizeMB * 1024 * 1024) {
        addToast({
          title: "File too large",
          description: `${file.name} is above ${settings.maxUploadSizeMB} MB.`,
          color: "warning"
        });
        return;
      }

      const id = crypto.randomUUID();
      const item: QueueItem = { id, file, status: "queued", progress: 0 };
      setItems((current) => [item, ...current]);

      const options: RemoveOptions = {
        modelId: settings.defaultModel,
        format: settings.outputFormat,
        quality: settings.outputQuality,
        transparentBackground: settings.transparentBackground,
        backgroundColor: settings.backgroundColor,
        alphaMatting: settings.alphaMatting
      };

      try {
        setItems((current) =>
          current.map((entry) =>
            entry.id === id
              ? { ...entry, status: "processing", progress: 35 }
              : entry
          )
        );
        const result = await window.api.removeBg(await file.arrayBuffer(), options);
        const blob = new Blob([result.buffer], { type: result.mimeType });
        const resultUrl = URL.createObjectURL(blob);
        setItems((current) =>
          current.map((entry) =>
            entry.id === id
              ? {
                  ...entry,
                  status: "done",
                  progress: 100,
                  resultUrl,
                  mimeType: result.mimeType
                }
              : entry
          )
        );
      } catch (error) {
        setItems((current) =>
          current.map((entry) =>
            entry.id === id
              ? {
                  ...entry,
                  status: "error",
                  progress: 0,
                  error:
                    error instanceof Error ? error.message : "Processing failed"
                }
              : entry
          )
        );
      }
    },
    [settings]
  );

  const addFiles = useCallback(
    (files: FileList | File[]) => {
      Array.from(files).forEach((file) => void processFile(file));
    },
    [processFile]
  );

  const removeItem = useCallback((id: string) => {
    setItems((current) => {
      const target = current.find((entry) => entry.id === id);
      if (target?.resultUrl) URL.revokeObjectURL(target.resultUrl);
      return current.filter((entry) => entry.id !== id);
    });
  }, []);

  const rerunSelected = useCallback(() => {
    if (!selectedItem) return;
    const file = selectedItem.file;
    removeItem(selectedItem.id);
    void processFile(file);
  }, [selectedItem, removeItem, processFile]);

  useEffect(() => {
    const onPaste = (event: ClipboardEvent) => {
      const files = Array.from(event.clipboardData?.files ?? []);
      if (files.length) addFiles(files);
    };
    window.addEventListener("paste", onPaste);
    return () => window.removeEventListener("paste", onPaste);
  }, [addFiles]);

  useEffect(() => {
    const onDragEnter = (event: DragEvent) => {
      event.preventDefault();
      dragCounter.current++;
      if (event.dataTransfer?.types.includes("Files")) setWindowDragging(true);
    };
    const onDragOver = (event: DragEvent) => {
      event.preventDefault();
    };
    const onDragLeave = (event: DragEvent) => {
      event.preventDefault();
      dragCounter.current--;
      if (dragCounter.current <= 0) {
        dragCounter.current = 0;
        setWindowDragging(false);
      }
    };
    const onDrop = (event: DragEvent) => {
      event.preventDefault();
      dragCounter.current = 0;
      setWindowDragging(false);
      if (event.dataTransfer?.files.length) addFiles(event.dataTransfer.files);
    };
    window.addEventListener("dragenter", onDragEnter);
    window.addEventListener("dragover", onDragOver);
    window.addEventListener("dragleave", onDragLeave);
    window.addEventListener("drop", onDrop);
    return () => {
      window.removeEventListener("dragenter", onDragEnter);
      window.removeEventListener("dragover", onDragOver);
      window.removeEventListener("dragleave", onDragLeave);
      window.removeEventListener("drop", onDrop);
    };
  }, [addFiles]);

  const saveSelected = () => {
    if (!selectedItem?.resultUrl || !settings) return;
    const extension = settings.outputFormat === "jpg" ? "jpg" : settings.outputFormat;
    const link = document.createElement("a");
    link.href = selectedItem.resultUrl;
    link.download =
      selectedItem.file.name.replace(/\.[^.]+$/, "") + `-removed.${extension}`;
    link.click();
  };

  const updateSettings = (patch: Partial<AppSettings>) => {
    void window.api.settings.set(patch).then(setSettings);
  };

  const hasResult = Boolean(selectedItem?.resultUrl);

  return (
    <div className="relative flex h-screen select-none flex-col bg-background text-foreground">
      <Navbar
        maxWidth="full"
        height="3rem"
        classNames={{ base: "app-drag", wrapper: "pl-20 pr-4" }}
      >
        <NavbarContent justify="end">
          <NavbarItem>
            <Button
              size="sm"
              variant="flat"
              startContent={<FolderCog size={15} />}
              onPress={() => void window.api.windows.openModels()}
            >
              Models
            </Button>
          </NavbarItem>
          <NavbarItem>
            <Button
              size="sm"
              variant="flat"
              startContent={<SettingsIcon size={15} />}
              onPress={() => void window.api.windows.openSettings()}
            >
              Settings
            </Button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      <main className="flex-1 overflow-auto">
        <div className="mx-auto flex max-w-4xl flex-col gap-4 p-6">
          <Card
            shadow="none"
            isPressable
            onPress={() => inputRef.current?.click()}
            onDragOver={(event) => {
              event.preventDefault();
              setDragging(true);
            }}
            onDragLeave={() => setDragging(false)}
            onDrop={(event) => {
              event.preventDefault();
              setDragging(false);
              addFiles(event.dataTransfer.files);
            }}
            className={`border-2 border-dashed transition-colors ${
              dragging
                ? "border-primary bg-primary/5"
                : "border-default-200 hover:border-default-300"
            }`}
          >
            <CardBody className="items-center justify-center gap-2 py-10 text-center">
              <ImagePlus size={28} className="text-default-400" />
              <h2 className="text-medium font-medium">Drop images here</h2>
              <p className="max-w-xs text-small text-default-500">
                PNG, JPG, or WebP, or paste from the clipboard.
              </p>
              {!readyModels.length && (
                <Chip size="sm" color="warning" variant="flat" className="mt-1">
                  Open Models to download one
                </Chip>
              )}
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                multiple
                hidden
                onChange={(e) => e.target.files && addFiles(e.target.files)}
              />
            </CardBody>
          </Card>

          <Card shadow="sm">
            <CardBody className="gap-4 p-4">
              <div
                className="grid min-h-[320px] place-items-center overflow-hidden rounded-medium"
                style={
                  hasResult && settings?.transparentBackground
                    ? {
                        backgroundImage: CHECKER_BG,
                        backgroundSize: "20px 20px",
                        backgroundPosition: "0 0, 0 10px, 10px -10px, -10px 0"
                      }
                    : hasResult && settings
                    ? { background: settings.backgroundColor }
                    : { background: "hsl(var(--heroui-default-50))" }
                }
              >
                {hasResult ? (
                  <img
                    className="max-h-[55vh] max-w-full object-contain"
                    src={selectedItem!.resultUrl}
                    alt="Processed result"
                  />
                ) : (
                  <div className="flex flex-col items-center gap-2 text-center">
                    <Eraser size={28} className="text-default-400" />
                    <h3 className="text-medium font-medium">
                      Ready for a clean cutout
                    </h3>
                    <p className="text-small text-default-500">
                      Your latest result previews here.
                    </p>
                  </div>
                )}
              </div>

              {settings && (
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <Tooltip
                    content="Re-process with current settings"
                    placement="top"
                    delay={200}
                    size="sm"
                  >
                    <Button
                      isIconOnly
                      size="sm"
                      variant="flat"
                      isDisabled={!hasResult}
                      onPress={rerunSelected}
                      aria-label="Re-run with current settings"
                    >
                      <RefreshCcw size={14} />
                    </Button>
                  </Tooltip>
                  <div className="flex flex-wrap items-center gap-3">
                  <Select
                    aria-label="Output format"
                    size="sm"
                    variant="flat"
                    className="w-32"
                    selectedKeys={[settings.outputFormat]}
                    onChange={(event) =>
                      updateSettings({
                        outputFormat: event.target.value as AppSettings["outputFormat"]
                      })
                    }
                  >
                    {formats.map((format) => (
                      <SelectItem key={format}>{format.toUpperCase()}</SelectItem>
                    ))}
                  </Select>
                  <BackgroundColorSwatches
                    value={settings.backgroundColor}
                    disabled={settings.transparentBackground}
                    onChange={(backgroundColor) =>
                      updateSettings({ backgroundColor })
                    }
                  />
                  <Switch
                    size="sm"
                    isSelected={settings.transparentBackground}
                    onValueChange={(transparentBackground) =>
                      updateSettings({ transparentBackground })
                    }
                  >
                    <span className="text-small">Transparent</span>
                  </Switch>
                  <Button
                    size="sm"
                    color="primary"
                    startContent={<Download size={15} />}
                    isDisabled={!hasResult}
                    onPress={saveSelected}
                  >
                    Download
                  </Button>
                  </div>
                </div>
              )}
            </CardBody>
          </Card>

          {items.length > 0 && (
            <section className="flex flex-col gap-2">
              <div className="flex items-center gap-2 px-1">
                <h3 className="text-small font-medium text-default-600">Queue</h3>
                <Chip size="sm" variant="flat">
                  {items.length}
                </Chip>
              </div>
              <div className="flex flex-col gap-1.5">
                {items.map((item) => (
                  <div
                    key={item.id}
                    className="group relative flex items-center gap-3 overflow-hidden rounded-medium border border-default-100 bg-content1 px-3 py-2"
                  >
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      aria-label={
                        item.status === "processing" ? "Cancel" : "Remove"
                      }
                      className="absolute left-3 top-1/2 grid h-5 w-5 -translate-y-1/2 -translate-x-2 place-items-center rounded-full bg-default-200 text-default-600 opacity-0 transition-all duration-200 hover:bg-danger hover:text-danger-foreground group-hover:translate-x-0 group-hover:opacity-100"
                    >
                      <X size={12} />
                    </button>
                    <span
                      className="min-w-0 flex-1 truncate text-small transition-[margin] duration-200 group-hover:ml-7"
                      title={item.file.name}
                    >
                      {item.file.name}
                    </span>
                    {item.status === "processing" && (
                      <Progress
                        aria-label="processing"
                        value={item.progress}
                        size="sm"
                        className="w-32"
                      />
                    )}
                    <Chip
                      size="sm"
                      color={statusColor(item.status)}
                      variant="flat"
                    >
                      {item.status}
                    </Chip>
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </main>

      {windowDragging && (
        <div className="pointer-events-none absolute inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
          <div className="flex flex-col items-center gap-3 rounded-2xl border-2 border-dashed border-primary p-10">
            <ImagePlus size={40} className="text-primary" />
            <p className="text-lg font-medium text-primary">Drop images to process</p>
          </div>
        </div>
      )}
    </div>
  );
}
