import { Input, Select, SelectItem, Slider, Switch, Tooltip } from "@heroui/react";
import { ExternalLink, HelpCircle } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { BrandGlyph } from "../shared/BrandGlyph";
import type { AppSettings, ModelInfo } from "../../types";

function SectionHeading({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h2 className="text-small font-semibold uppercase tracking-wide text-default-500">
        {title}
      </h2>
      {hint && <p className="text-tiny text-default-400">{hint}</p>}
    </div>
  );
}

function HelpHint({ children }: { children: ReactNode }) {
  return (
    <Tooltip
      content={children}
      placement="top"
      delay={150}
      closeDelay={50}
      size="sm"
      classNames={{ content: "max-w-[260px] text-tiny leading-relaxed" }}
    >
      <button
        type="button"
        aria-label="More info"
        className="inline-flex cursor-help items-center text-default-400 transition hover:text-default-600 focus:outline-none focus-visible:text-default-600"
      >
        <HelpCircle size={13} />
      </button>
    </Tooltip>
  );
}

function FieldLabel({ text, hint }: { text: string; hint: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      {text}
      <HelpHint>{hint}</HelpHint>
    </span>
  );
}

export function SettingsApp() {
  const [settings, setSettings] = useState<AppSettings | null>(null);
  const [models, setModels] = useState<ModelInfo[]>([]);

  useEffect(() => {
    void window.api.settings.get().then(setSettings);
    void window.api.models.list().then(setModels);
    return window.api.settings.onChanged(setSettings);
  }, []);

  const save = (patch: Partial<AppSettings>) => {
    void window.api.settings.set(patch).then(setSettings);
  };

  if (!settings) return null;

  const matting = settings.alphaMatting;

  return (
    <div className="flex h-screen flex-col bg-background text-foreground">
      <header className="app-drag flex h-10 shrink-0 items-center border-b border-default-100 pl-20 pr-4">
        <h1 className="text-small font-semibold">Settings</h1>
      </header>
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-md flex-col gap-6 p-6">
          <p className="text-small text-default-500">
            Defaults applied to the next image you process.
          </p>

          <section className="flex flex-col gap-3">
          <SectionHeading title="Output" />
          <div className="grid grid-cols-2 gap-3">
            <Select
              aria-label="Output format"
              label="Format"
              size="sm"
              variant="flat"
              selectedKeys={[settings.outputFormat]}
              onChange={(event) =>
                save({ outputFormat: event.target.value as AppSettings["outputFormat"] })
              }
            >
              <SelectItem key="png">PNG</SelectItem>
              <SelectItem key="webp">WebP</SelectItem>
              <SelectItem key="jpg">JPG</SelectItem>
            </Select>
            <Input
              aria-label="Quality"
              label={
                <FieldLabel
                  text="Quality"
                  hint="Compression quality for WebP and JPG. PNG is lossless and ignores this value."
                />
              }
              size="sm"
              variant="flat"
              type="number"
              min={1}
              max={100}
              value={String(settings.outputQuality)}
              onChange={(event) =>
                save({ outputQuality: Number(event.target.value) })
              }
            />
          </div>

          <div className="flex items-center justify-between gap-3 rounded-medium border border-default-100 bg-content1 px-3 py-2.5">
            <div className="flex flex-col">
              <span className="inline-flex items-center gap-1.5 text-small">
                Transparent output
                <HelpHint>
                  When on, removed pixels stay fully transparent. Only honored
                  by formats that support alpha (PNG, WebP). JPG always falls
                  back to the solid background color.
                </HelpHint>
              </span>
              <span className="text-tiny text-default-500">
                Used when the format supports alpha.
              </span>
            </div>
            <Switch
              size="sm"
              isSelected={settings.transparentBackground}
              onValueChange={(transparentBackground) =>
                save({ transparentBackground })
              }
              aria-label="Transparent output"
            />
          </div>

          <div className="flex items-center justify-between gap-3 rounded-medium border border-default-100 bg-content1 px-3 py-2.5">
            <div className="flex flex-col">
              <span className="text-small">Solid background</span>
              <span className="text-tiny font-mono uppercase text-default-500">
                {settings.backgroundColor}
              </span>
            </div>
            <label className="relative h-9 w-12 cursor-pointer overflow-hidden rounded-medium border border-default-200">
              <input
                type="color"
                value={settings.backgroundColor}
                onChange={(event) =>
                  save({ backgroundColor: event.target.value })
                }
                className="absolute inset-[-2px] h-[calc(100%+4px)] w-[calc(100%+4px)] cursor-pointer border-0 bg-transparent p-0"
                aria-label="Solid background color"
              />
            </label>
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <SectionHeading title="Engine" />
          <Select
            aria-label="Default model"
            label={
              <FieldLabel
                text="Default model"
                hint="The AI segmentation model used to detect the subject. RMBG 1.4 is a great all-rounder; MODNet is optimized for portraits."
              />
            }
            size="sm"
            variant="flat"
            selectedKeys={[settings.defaultModel]}
            onChange={(event) => save({ defaultModel: event.target.value })}
          >
            {models.map((model) => (
              <SelectItem key={model.id}>{model.label}</SelectItem>
            ))}
          </Select>
          <div className="grid grid-cols-2 gap-3">
            <Select
              aria-label="Execution provider"
              label={
                <FieldLabel
                  text="Execution"
                  hint="CPU works everywhere. CoreML uses Apple Silicon's GPU for faster inference on supported Macs."
                />
              }
              size="sm"
              variant="flat"
              selectedKeys={[settings.executionProvider]}
              onChange={(event) =>
                save({
                  executionProvider: event.target
                    .value as AppSettings["executionProvider"]
                })
              }
            >
              <SelectItem key="cpu">CPU</SelectItem>
              <SelectItem key="coreml">CoreML</SelectItem>
            </Select>
            <Input
              aria-label="Max upload size"
              label={
                <FieldLabel
                  text="Max upload"
                  hint="Files larger than this are rejected before processing. Helps avoid out-of-memory crashes on huge images."
                />
              }
              size="sm"
              variant="flat"
              type="number"
              min={1}
              endContent={<span className="text-tiny text-default-400">MB</span>}
              value={String(settings.maxUploadSizeMB)}
              onChange={(event) =>
                save({ maxUploadSizeMB: Number(event.target.value) })
              }
            />
          </div>
        </section>

        <section className="flex flex-col gap-3">
          <SectionHeading
            title="Advanced"
            hint="Alpha matting refines hair and translucent edges."
          />
          <div className="flex items-center justify-between gap-3 rounded-medium border border-default-100 bg-content1 px-3 py-2.5">
            <span className="inline-flex items-center gap-1.5 text-small">
              Alpha matting
              <HelpHint>
                Post-processes the mask edge for soft details (hair, fur,
                semi-transparent objects). Slower, but produces much cleaner
                cutouts on tricky subjects.
              </HelpHint>
            </span>
            <Switch
              size="sm"
              isSelected={matting.enabled}
              onValueChange={(enabled) =>
                save({ alphaMatting: { ...matting, enabled } })
              }
              aria-label="Toggle alpha matting"
            />
          </div>
          {matting.enabled && (
            <div className="flex flex-col gap-4 rounded-medium border border-default-100 bg-content1 p-4">
              <Slider
                size="sm"
                label={
                  <FieldLabel
                    text="Foreground threshold"
                    hint="Pixels whose mask value is at or above this are treated as definite subject. Raise it to be stricter about what counts as foreground."
                  />
                }
                minValue={1}
                maxValue={255}
                value={matting.foregroundThreshold}
                onChange={(value) =>
                  save({
                    alphaMatting: {
                      ...matting,
                      foregroundThreshold: Number(value)
                    }
                  })
                }
              />
              <Slider
                size="sm"
                label={
                  <FieldLabel
                    text="Background threshold"
                    hint="Pixels whose mask value is at or below this are treated as definite background. Lower it to remove more, raise it if too much subject gets cut."
                  />
                }
                minValue={0}
                maxValue={254}
                value={matting.backgroundThreshold}
                onChange={(value) =>
                  save({
                    alphaMatting: {
                      ...matting,
                      backgroundThreshold: Number(value)
                    }
                  })
                }
              />
              <Slider
                size="sm"
                label={
                  <FieldLabel
                    text="Erode size"
                    hint="Shrinks the foreground mask by this many pixels before matting runs. Helps remove background-colored fringes around the subject."
                  />
                }
                minValue={0}
                maxValue={8}
                value={matting.erodeSize}
                onChange={(value) =>
                  save({
                    alphaMatting: { ...matting, erodeSize: Number(value) }
                  })
                }
              />
            </div>
          )}
          </section>

          <AboutCard />
        </div>
      </main>
    </div>
  );
}

const APP_VERSION =
  typeof __APP_VERSION__ === "undefined" ? "dev" : __APP_VERSION__;
const BUILD_ID =
  typeof __BUILD_ID__ === "undefined" ? "local" : __BUILD_ID__;

function AboutCard() {
  return (
    <button
      type="button"
      onClick={() => void window.api.windows.openAbout()}
      className="group mt-2 flex w-full flex-col rounded-medium border border-default-100 bg-content1 p-4 text-left transition hover:border-default-200 hover:bg-content2 focus:outline-none focus-visible:border-primary"
      aria-label="About Remove.Simply"
    >
      <div className="flex items-center gap-2 text-foreground">
        <span className="text-primary">
          <BrandGlyph size={18} />
        </span>
        <span className="text-small font-semibold">Remove.Simply</span>
        <ExternalLink
          size={12}
          className="ml-auto text-default-400 transition group-hover:text-default-500"
        />
      </div>
      <p className="mt-1 text-tiny font-mono text-default-500">
        v{APP_VERSION} · build {BUILD_ID}
      </p>
      <p className="mt-2 text-tiny text-default-500">
        Created by Barni from Manuel Bruña's project.
      </p>
    </button>
  );
}
