import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import RouterComponent from "./routes/Routes";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterComponent />
  </StrictMode>
);
