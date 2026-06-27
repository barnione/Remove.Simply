import "../shared/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "../shared/Providers";
import { AboutApp } from "./AboutApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <AboutApp />
    </Providers>
  </StrictMode>
);
