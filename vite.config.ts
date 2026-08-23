// @lovable.dev/vite-tanstack-config keeps the project compatible with Lovable.
// For GitHub Pages CI we override the bundled Nitro target with the Node server
// preset. TanStack Start's SPA shell prerenderer needs a Node-compatible local
// preview server during the build.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  vite: {
    base: "/roamgenius-scribe/",
    plugins: [
      nitro({
        preset: "node-server",
      }),
    ],
  },
  tanstackStart: {
    server: { entry: "server" },
    spa: {
      enabled: true,
    },
  },
});
