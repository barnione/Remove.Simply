import { useEffect, useId, useRef } from "react";
import "chromapicker/dist/chromapicker.css";

interface ChromaSwatchProps {
  value: string;
  disabled?: boolean;
  active?: boolean;
  showGradient?: boolean;
  onChange: (color: string) => void;
}

export function ChromaSwatch({
  value,
  disabled,
  active,
  showGradient,
  onChange
}: ChromaSwatchProps) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const onChangeRef = useRef(onChange);
  const reactId = useId();
  const inputId = "chroma-" + reactId.replace(/[^a-z0-9]/gi, "");

  useEffect(() => {
    onChangeRef.current = onChange;
  });

  useEffect(() => {
    const input = inputRef.current;
    const wrap = wrapRef.current;
    if (!input || !wrap) return;
    input.id = inputId;
    input.value = value;

    let cancelled = false;
    void import("chromapicker/dist/chroma.es.js").then(({ default: Chroma }) => {
      if (cancelled) return;
      try {
        new Chroma(`#${inputId}`, { initialColor: value });
      } catch {
        /* swallow; library logs internally */
      }
    });

    const handle = (event: Event) => {
      const next = (event.target as HTMLInputElement).value;
      if (/^#[0-9A-Fa-f]{6}$/.test(next)) onChangeRef.current(next);
    };
    input.addEventListener("input", handle);

    return () => {
      cancelled = true;
      input.removeEventListener("input", handle);
      wrap.querySelector('label[_chroma="input"]')?.remove();
      document.getElementById(`${inputId}-helper`)?.remove();
    };
  }, [inputId]);

  useEffect(() => {
    const input = inputRef.current;
    if (!input || input.value === value) return;
    input.value = value;
    input.dispatchEvent(new Event("input", { bubbles: true }));
  }, [value]);

  const classes = [
    "chroma-swatch",
    showGradient && "chroma-swatch--gradient",
    active && "chroma-swatch--active",
    disabled && "pointer-events-none opacity-40"
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div ref={wrapRef} className={classes}>
      <input
        ref={inputRef}
        type="text"
        defaultValue={value}
        aria-label="Custom background color"
        title={`Custom: ${value.toUpperCase()}`}
      />
    </div>
  );
}
