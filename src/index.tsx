import { StrictMode } from "react";
import {createRoot} from "react-dom/client";
import App from "./App";

const container = document.getElementById("root");

//@ts-ignore
const root = createRoot(container);

// Initial render
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
