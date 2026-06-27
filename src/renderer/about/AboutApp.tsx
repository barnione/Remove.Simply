import { X } from "lucide-react";
import { BrandGlyph } from "../shared/BrandGlyph";

const APP_VERSION =
  typeof __APP_VERSION__ === "undefined" ? "dev" : __APP_VERSION__;
const BUILD_ID =
  typeof __BUILD_ID__ === "undefined" ? "local" : __BUILD_ID__;

export function AboutApp() {
  return (
    <div className="app-drag relative flex h-screen select-none flex-col items-center justify-center gap-2 bg-background p-6 text-center text-foreground">
      <button
        type="button"
        onClick={() => void window.api.windows.closeAbout()}
        aria-label="Close"
        className="absolute right-3 top-3 grid h-7 w-7 place-items-center rounded-full text-default-500 transition hover:bg-default-100 hover:text-foreground"
      >
        <X size={14} />
      </button>

      <span className="text-primary">
        <BrandGlyph size={36} />
      </span>
      <h1 className="text-large font-semibold">Remove.Simply</h1>
      <p className="text-tiny font-mono text-default-500">
        v{APP_VERSION} · build {BUILD_ID}
      </p>
      <p className="mt-1 max-w-[280px] text-tiny text-default-500">
        Created by{" "}
        <a
          href="https://barni.one"
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
        >
          Barni
        </a>{" "}
        from{" "}
        <a
          href="https://github.com/tecnomanu/remove-background-local"
          target="_blank"
          rel="noreferrer"
          className="text-primary hover:underline"
        >
          Manuel Bruña
        </a>
        's project.
      </p>
    </div>
  );
}
