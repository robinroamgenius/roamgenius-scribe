// @lovable.dev/vite-tanstack-config keeps the project compatible with Lovable
// while the production build runs in TanStack Start SPA mode for GitHub Pages.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/roamgenius-scribe/",
  },
  tanstackStart: {
    server: { entry: "server" },
    spa: {
      enabled: true,
      prerender: {
        outputPath: "/index.html",
      },
    },
  },
});
