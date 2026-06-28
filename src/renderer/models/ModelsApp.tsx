import { Button, Chip, Input, Progress, Tooltip } from "@heroui/react";
import { Check, DownloadCloud, Search, Star, Trash2, X } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { AppSettings, DownloadProgress, ModelInfo } from "../../types";

export function ModelsApp() {
  const [models, setModels] = useState<ModelInfo[]>([]);
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [progress, setProgress] = useState<Record<string, DownloadProgress>>({});
  const [search, setSearch] = useState("");

  const refresh = () => void window.api.models.list().then(setModels);

  useEffect(() => {
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

  const setDefault = (defaultModel: string) => {
    void window.api.settings.set({ defaultModel }).then(setSettings);
  };

  const filtered = useMemo(() => {
    if (!search.trim()) return models;
    const q = search.toLowerCase();
    return models.filter(
      (m) =>
        m.label.toLowerCase().includes(q) ||
        m.family.toLowerCase().includes(q) ||
        m.id.toLowerCase().includes(q) ||
        m.speedNote.toLowerCase().includes(q)
    );
  }, [models, search]);

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <header className="app-drag flex h-10 shrink-0 items-center border-b border-default-100 pl-20 pr-4">
        <h1 className="text-small font-semibold">Models</h1>
      </header>
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-xl flex-col gap-5 p-6">
          <p className="text-small text-default-500">
            Download segmentation models and choose a default.
          </p>

          <Input
            size="sm"
            placeholder="Search models..."
            startContent={<Search size={14} className="text-default-400" />}
            value={search}
            onValueChange={setSearch}
            isClearable
            onClear={() => setSearch("")}
            classNames={{ inputWrapper: "no-drag" }}
          />

          <div className="flex flex-col gap-2">
          {filtered.map((model) => {
            const modelProgress = progress[model.id];
            const isDownloading =
              model.status === "downloading" ||
              modelProgress?.status === "downloading";
            const isDefault = settings?.defaultModel === model.id;
            return (
              <div
                key={model.id}
                className="flex flex-col gap-3 rounded-medium border border-default-100 bg-content1 p-4"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <h2 className="truncate text-medium font-medium">
                        {model.label}
                      </h2>
                      {isDefault && (
                        <Chip
                          size="sm"
                          color="primary"
                          variant="flat"
                          startContent={<Check size={12} />}
                        >
                          Default
                        </Chip>
                      )}
                    </div>
                    <p className="truncate text-tiny text-default-500">
                      {model.family} · ~{model.approxSizeMB} MB · {model.speedNote}
                    </p>
                  </div>
                  <Chip
                    size="sm"
                    variant="flat"
                    color={
                      model.cached
                        ? "success"
                        : isDownloading
                        ? "primary"
                        : "default"
                    }
                  >
                    {isDownloading
                      ? "Downloading"
                      : model.cached
                      ? "Ready"
                      : "Not downloaded"}
                  </Chip>
                </div>

                {isDownloading && (
                  <Progress
                    aria-label={`${model.label} download progress`}
                    value={modelProgress?.progress ?? 10}
                    size="sm"
                  />
                )}

                {modelProgress?.status === "error" && (
                  <p className="text-tiny text-danger">
                    {modelProgress.message ?? "Download failed"}
                  </p>
                )}

                <div className="flex items-center justify-between gap-3">
                  <span className="text-tiny text-default-500">
                    {model.cached
                      ? `${model.sizeOnDiskMB} MB on disk`
                      : "Not cached locally"}
                  </span>
                  <div className="flex items-center gap-1">
                    {model.cached && (
                      <Tooltip
                        content={isDefault ? "Already the default" : "Set as default"}
                        size="sm"
                      >
                        <Button
                          isIconOnly
                          size="sm"
                          variant="light"
                          color={isDefault ? "primary" : "default"}
                          isDisabled={isDefault}
                          onPress={() => setDefault(model.id)}
                          aria-label="Set as default model"
                        >
                          <Star
                            size={15}
                            fill={isDefault ? "currentColor" : "none"}
                          />
                        </Button>
                      </Tooltip>
                    )}
                    {isDownloading ? (
                      <Button
                        size="sm"
                        variant="flat"
                        color="warning"
                        startContent={<X size={14} />}
                        onPress={() =>
                          void window.api.models.cancel(model.id).then(setModels)
                        }
                      >
                        Cancel
                      </Button>
                    ) : model.cached ? (
                      <Button
                        size="sm"
                        variant="flat"
                        color="danger"
                        startContent={<Trash2 size={14} />}
                        onPress={() =>
                          void window.api.models.delete(model.id).then(setModels)
                        }
                      >
                        Delete
                      </Button>
                    ) : (
                      <Button
                        size="sm"
                        color="primary"
                        variant="flat"
                        startContent={<DownloadCloud size={14} />}
                        onPress={() =>
                          void window.api.models
                            .download(model.id)
                            .then(setModels)
                        }
                      >
                        Download
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
          </div>
        </div>
      </main>
    </div>
  );
}
