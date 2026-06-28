import {
  Button,
  ColorArea,
  ColorField,
  ColorPicker,
  ColorSlider,
  ColorSwatch,
  ColorSwatchPicker,
  InputGroup,
  InputGroupInput,
  InputGroupSuffix,
  Label,
  ListBox,
  Select,
  Slider,
  Switch,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  parseColor
} from "@heroui/react";
import { ExternalLink, HelpCircle, Shuffle } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { BrandGlyph } from "../shared/BrandGlyph";
import type { AppSettings, ModelInfo } from "../../types";

const colorPresets = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#f43f5e"
];

function SolidBackgroundColorPicker({
  value,
  onChange
}: {
  value: string;
  onChange: (color: string) => void;
}) {
  const [color, setColor] = useState(() => parseColor(value));

  useEffect(() => {
    setColor(parseColor(value));
  }, [value]);

  const handleChange = (next: typeof color) => {
    setColor(next);
    onChange(next.toString("hex"));
  };

  const shuffleColor = () => {
    const randomHue = Math.floor(Math.random() * 360);
    const randomSaturation = 50 + Math.floor(Math.random() * 50);
    const randomLightness = 40 + Math.floor(Math.random() * 30);
    handleChange(
      parseColor(`hsl(${randomHue}, ${randomSaturation}%, ${randomLightness}%)`)
    );
  };

  return (
    <ColorPicker value={color} onChange={handleChange}>
      <ColorPicker.Trigger>
        <ColorSwatch size="sm" />
        <Label className="sr-only">Solid background color</Label>
      </ColorPicker.Trigger>
      <ColorPicker.Popover className="gap-2">
        <ColorSwatchPicker className="justify-center pt-2" size="xs">
          {colorPresets.map((preset) => (
            <ColorSwatchPicker.Item key={preset} color={preset}>
              <ColorSwatchPicker.Swatch />
            </ColorSwatchPicker.Item>
          ))}
        </ColorSwatchPicker>
        <ColorArea
          aria-label="Color area"
          className="max-w-full"
          colorSpace="hsb"
          xChannel="saturation"
          yChannel="brightness"
        >
          <ColorArea.Thumb />
        </ColorArea>
        <div className="flex items-center gap-2 px-1">
          <ColorSlider
            aria-label="Hue slider"
            channel="hue"
            className="flex-1"
            colorSpace="hsb"
          >
            <ColorSlider.Track>
              <ColorSlider.Thumb />
            </ColorSlider.Track>
          </ColorSlider>
          <Button
            isIconOnly
            aria-label="Shuffle color"
            size="sm"
            variant="tertiary"
            onPress={shuffleColor}
          >
            <Shuffle size={16} />
          </Button>
        </div>
        <ColorField aria-label="Color field">
          <ColorField.Group variant="secondary">
            <ColorField.Prefix>
              <ColorSwatch size="xs" />
            </ColorField.Prefix>
            <ColorField.Input />
          </ColorField.Group>
        </ColorField>
      </ColorPicker.Popover>
    </ColorPicker>
  );
}

function SectionHeading({ title, hint }: { title: string; hint?: string }) {
  return (
    <div className="flex flex-col gap-0.5">
      <h2 className="text-small font-semibold uppercase tracking-wide text-muted">
        {title}
      </h2>
      {hint && <p className="text-tiny text-muted">{hint}</p>}
    </div>
  );
}

function HelpHint({ children }: { children: ReactNode }) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <button
          type="button"
          aria-label="More info"
          className="inline-flex cursor-help items-center text-muted transition hover:text-foreground focus:outline-none focus-visible:text-foreground"
        >
          <HelpCircle size={13} />
        </button>
      </TooltipTrigger>
      <TooltipContent className="max-w-[260px] text-tiny leading-relaxed">
        {children}
      </TooltipContent>
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
      <header className="app-drag flex h-10 shrink-0 items-center border-b border-default-200 pl-20 pr-4">
        <h1 className="text-small font-semibold">Settings</h1>
      </header>
      <main className="flex-1 overflow-y-auto">
        <div className="mx-auto flex max-w-md flex-col gap-6 p-6">
          <p className="text-small text-muted">
            Defaults applied to the next image you process.
          </p>

          <section className="flex flex-col gap-3">
            <SectionHeading title="Output" />
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-small">Format</label>
                <Select
                  selectedKey={settings.outputFormat}
                  onSelectionChange={(key) =>
                    save({ outputFormat: key as AppSettings["outputFormat"] })
                  }
                >
                  <Select.Trigger>
                    <Select.Value />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="png">PNG</ListBox.Item>
                      <ListBox.Item id="webp">WebP</ListBox.Item>
                      <ListBox.Item id="jpg">JPG</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-small inline-flex items-center gap-1.5">
                  <FieldLabel
                    text="Quality"
                    hint="Compression quality for WebP and JPG. PNG is lossless and ignores this value."
                  />
                </label>
                <InputGroup variant="secondary">
                  <InputGroupInput
                    type="number"
                    min={1}
                    max={100}
                    value={String(settings.outputQuality)}
                    onChange={(event) =>
                      save({ outputQuality: Number(event.target.value) })
                    }
                  />
                </InputGroup>
              </div>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-medium border border-default-200 bg-content1 px-3 py-2.5">
              <div className="flex flex-col">
                <span className="inline-flex items-center gap-1.5 text-small">
                  Transparent output
                  <HelpHint>
                    When on, removed pixels stay fully transparent. Only honored
                    by formats that support alpha (PNG, WebP). JPG always falls
                    back to the solid background color.
                  </HelpHint>
                </span>
                <span className="text-tiny text-muted">
                  Used when the format supports alpha.
                </span>
              </div>
              <Switch
                isSelected={settings.transparentBackground}
                onChange={(transparentBackground) =>
                  save({ transparentBackground })
                }
                aria-label="Transparent output"
              >
                <Switch.Content>
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                </Switch.Content>
              </Switch>
            </div>

            <div className="flex items-center justify-between gap-3 rounded-medium border border-default-200 bg-content1 px-3 py-2.5">
              <div className="flex flex-col">
                <span className="text-small">Solid background</span>
                <span className="text-tiny font-mono uppercase text-muted">
                  {settings.backgroundColor}
                </span>
              </div>
              <SolidBackgroundColorPicker
                value={settings.backgroundColor}
                onChange={(backgroundColor) => save({ backgroundColor })}
              />
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <SectionHeading title="Engine" />
            <div className="flex flex-col gap-1">
              <label className="text-small inline-flex items-center gap-1.5">
                <FieldLabel
                  text="Default model"
                  hint="The AI segmentation model. ISNet General is a great all-rounder; BiRefNet models offer higher quality but are larger."
                />
              </label>
              <Select
                selectedKey={settings.defaultModel}
                onSelectionChange={(key) => save({ defaultModel: String(key) })}
              >
                <Select.Trigger>
                  <Select.Value />
                </Select.Trigger>
                <Select.Popover>
                  <ListBox>
                    {models.map((model) => (
                      <ListBox.Item key={model.id} id={model.id}>
                        {model.label}
                      </ListBox.Item>
                    ))}
                  </ListBox>
                </Select.Popover>
              </Select>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-small inline-flex items-center gap-1.5">
                  <FieldLabel
                    text="Execution"
                    hint="CPU works everywhere. CoreML uses Apple Silicon's GPU for faster inference on supported Macs."
                  />
                </label>
                <Select
                  selectedKey={settings.executionProvider}
                  onSelectionChange={(key) =>
                    save({
                      executionProvider: key as AppSettings["executionProvider"]
                    })
                  }
                >
                  <Select.Trigger>
                    <Select.Value />
                  </Select.Trigger>
                  <Select.Popover>
                    <ListBox>
                      <ListBox.Item id="cpu">CPU</ListBox.Item>
                      <ListBox.Item id="coreml">CoreML</ListBox.Item>
                    </ListBox>
                  </Select.Popover>
                </Select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-small inline-flex items-center gap-1.5">
                  <FieldLabel
                    text="Max upload"
                    hint="Files larger than this are rejected before processing. Helps avoid out-of-memory crashes on huge images."
                  />
                </label>
                <InputGroup variant="secondary">
                  <InputGroupInput
                    type="number"
                    min={1}
                    value={String(settings.maxUploadSizeMB)}
                    onChange={(event) =>
                      save({ maxUploadSizeMB: Number(event.target.value) })
                    }
                  />
                  <InputGroupSuffix>
                    <span className="text-tiny text-muted">MB</span>
                  </InputGroupSuffix>
                </InputGroup>
              </div>
            </div>
          </section>

          <section className="flex flex-col gap-3">
            <SectionHeading
              title="Advanced"
              hint="Alpha matting refines hair and translucent edges."
            />
            <div className="flex items-center justify-between gap-3 rounded-medium border border-default-200 bg-content1 px-3 py-2.5">
              <span className="inline-flex items-center gap-1.5 text-small">
                Alpha matting
                <HelpHint>
                  Post-processes the mask edge for soft details (hair, fur,
                  semi-transparent objects). Slower, but produces much cleaner
                  cutouts on tricky subjects.
                </HelpHint>
              </span>
              <Switch
                isSelected={matting.enabled}
                onChange={(enabled) =>
                  save({ alphaMatting: { ...matting, enabled } })
                }
                aria-label="Toggle alpha matting"
              >
                <Switch.Content>
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                </Switch.Content>
              </Switch>
            </div>
            {matting.enabled && (
              <div className="flex flex-col gap-4 rounded-medium border border-default-200 bg-content1 p-4">
                <div className="flex flex-col gap-1">
                  <label className="text-small inline-flex items-center gap-1.5">
                    <FieldLabel
                      text="Foreground threshold"
                      hint="Pixels whose mask value is at or above this are treated as definite subject. Raise it to be stricter about what counts as foreground."
                    />
                  </label>
                  <Slider
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
                  >
                    <Slider.Track>
                      <Slider.Fill />
                      <Slider.Thumb />
                    </Slider.Track>
                  </Slider>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-small inline-flex items-center gap-1.5">
                    <FieldLabel
                      text="Background threshold"
                      hint="Pixels whose mask value is at or below this are treated as definite background. Lower it to remove more, raise it if too much subject gets cut."
                    />
                  </label>
                  <Slider
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
                  >
                    <Slider.Track>
                      <Slider.Fill />
                      <Slider.Thumb />
                    </Slider.Track>
                  </Slider>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="text-small inline-flex items-center gap-1.5">
                    <FieldLabel
                      text="Erode size"
                      hint="Shrinks the foreground mask by this many pixels before matting runs. Helps remove background-colored fringes around the subject."
                    />
                  </label>
                  <Slider
                    minValue={0}
                    maxValue={8}
                    value={matting.erodeSize}
                    onChange={(value) =>
                      save({
                        alphaMatting: { ...matting, erodeSize: Number(value) }
                      })
                    }
                  >
                    <Slider.Track>
                      <Slider.Fill />
                      <Slider.Thumb />
                    </Slider.Track>
                  </Slider>
                </div>
              </div>
            )}
          </section>

          <section className="flex flex-col gap-3">
            <SectionHeading title="App" hint="Application updates and behavior." />
            <div className="flex items-center justify-between gap-3 rounded-medium border border-default-200 bg-content1 px-3 py-2.5">
              <div className="flex flex-col">
                <span className="text-small">Automatic updates</span>
                <span className="text-tiny text-muted">
                  Download and install updates from GitHub releases on startup.
                </span>
              </div>
              <Switch
                isSelected={settings.autoUpdatesEnabled}
                onChange={(autoUpdatesEnabled) => save({ autoUpdatesEnabled })}
                aria-label="Automatic updates"
              >
                <Switch.Content>
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                </Switch.Content>
              </Switch>
            </div>
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
      className="group mt-2 flex w-full flex-col rounded-medium border border-default-200 bg-content1 p-4 text-left transition hover:border-default-300 hover:bg-content2 focus:outline-none focus-visible:border-primary"
      aria-label="About Remove.Simply"
    >
      <div className="flex items-center gap-2 text-foreground">
        <span className="text-primary">
          <BrandGlyph size={18} />
        </span>
        <span className="text-small font-semibold">Remove.Simply</span>
        <ExternalLink
          size={12}
          className="ml-auto text-muted transition group-hover:text-foreground"
        />
      </div>
      <p className="mt-1 text-tiny font-mono text-muted">
        v{APP_VERSION} · build {BUILD_ID}
      </p>
      <p className="mt-2 text-tiny text-muted">
        Created by Barni from Manuel Bruña's project.
      </p>
    </button>
  );
}
