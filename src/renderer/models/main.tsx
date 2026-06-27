import "../shared/global.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Providers } from "../shared/Providers";
import { ModelsApp } from "./ModelsApp";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers>
      <ModelsApp />
    </Providers>
  </StrictMode>
);
