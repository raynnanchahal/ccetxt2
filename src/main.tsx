// Restore real route after GitHub Pages redirect
(() => {
  const url = new URL(window.location.href);
  const p = url.searchParams.get("p");
  if (p) {
    url.searchParams.delete("p");
    window.history.replaceState({}, "", p);
  }
})();


import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);
