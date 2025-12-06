(() => {
  const url = new URL(window.location.href);
  const p = url.searchParams.get("p");

  if (p) {
    // Remove the ?p= param
    url.searchParams.delete("p");

    // Ensure correct base for GitHub Pages repo hosting
    const corrected = p.startsWith("/ccetxt2/")
      ? p
      : "/ccetxt2" + (p.startsWith("/") ? p : "/" + p);

    window.history.replaceState({}, "", corrected);
  }
})();
