import "../shared/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "../shared/Providers";
import { SettingsApp } from "./SettingsApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <SettingsApp />
    </Providers>
  </StrictMode>
);
