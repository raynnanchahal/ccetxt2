// Restore correct route after GitHub Pages redirect
(() => {
  const url = new URL(window.location.href);
  const p = url.searchParams.get("p");

  if (p) {
    // Remove ?p=
    url.searchParams.delete("p");

    // On root domain, we do NOT prefix anything.
    // The p value already contains the full correct path.
    window.history.replaceState({}, "", p);
  }
})();

// -----------------------
// REQUIRED CSS IMPORT
// -----------------------
import "./index.css";

// -----------------------
// REQUIRED REACT ENTRY
// -----------------------
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
