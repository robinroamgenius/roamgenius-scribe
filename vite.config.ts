// @lovable.dev/vite-tanstack-config keeps the project compatible with Lovable.
// GitHub Pages only needs the static SPA shell, so we deliberately disable
// TanStack's build-time preview/prerender step. That step currently expects
// the legacy dist/server/server.js layout, while Nitro outputs .output/server.
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
        enabled: false,
      },
    },
  },
});
