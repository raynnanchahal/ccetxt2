// Restore correct route after GitHub Pages redirect
(() => {
  const url = new URL(window.location.href);
  const p = url.searchParams.get("p");

  if (p) {
    url.searchParams.delete("p");

    const corrected =
      p.startsWith("/ccetxt2/")
        ? p
        : "/ccetxt2" + (p.startsWith("/") ? p : "/" + p);

    window.history.replaceState({}, "", corrected);
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
