// @lovable.dev/vite-tanstack-config keeps the project compatible with Lovable.
// For the GitHub Pages build we use a Node-compatible Nitro target so TanStack
// Start can prerender the SPA shell during CI, then publish only static output.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    base: "/roamgenius-scribe/",
  },
  nitro: {
    preset: "node-server",
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
