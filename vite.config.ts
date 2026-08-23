// @lovable.dev/vite-tanstack-config provides the TanStack Start Vite setup.
// We keep it so Lovable remains fully compatible with the project while the
// production build runs in SPA mode for static GitHub Pages hosting.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/roamgenius-scribe/",
  },
  tanstackStart: {
    // Keep the existing server entry for Lovable/TanStack Start compatibility.
    server: { entry: "server" },
    // GitHub Pages serves static files only, so the app ships as an SPA shell.
    spa: {
      enabled: true,
    },
  },
});
