import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

// GitHub Pages has no SPA rewrite rules — it serves 404.html for unknown
// paths. Shipping a copy of index.html as 404.html makes client-side routes
// like /posts/<slug> work when opened directly or refreshed.
function githubPagesSpaFallback(): Plugin {
  return {
    name: "github-pages-spa-fallback",
    closeBundle() {
      copyFileSync(
        resolve(process.cwd(), "dist/index.html"),
        resolve(process.cwd(), "dist/404.html"),
      );
    },
  };
}

export default defineConfig({
  // "/" locally and in the Lovable preview; the GitHub Actions workflow sets
  // VITE_BASE to "/<repo>/" for GitHub Pages project sites.
  base: process.env.VITE_BASE ?? "/",
  plugins: [react(), tailwindcss(), tsconfigPaths(), githubPagesSpaFallback()],
  server: {
    port: 8080,
    host: true,
    strictPort: true,
    allowedHosts: true,
  },
});
