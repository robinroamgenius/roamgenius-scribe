import { QueryClient } from "@tanstack/react-query";
import { createRouter } from "@tanstack/react-router";

import { rootRoute } from "./routes/__root";
import { indexRoute } from "./routes/index";
import { postRoute } from "./routes/posts.$slug";

const routeTree = rootRoute.addChildren([indexRoute, postRoute]);

// Vite's base ("/" locally, "/<repo>/" on GitHub Pages project sites) must
// match the router basepath so routes resolve on direct loads and refresh.
const rawBase = import.meta.env.BASE_URL;
const basepath = rawBase === "/" ? "/" : rawBase.replace(/\/+$/, "");

export const getRouter = () => {
  const queryClient = new QueryClient();

  const router = createRouter({
    routeTree,
    basepath,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
  });

  return router;
};

declare module "@tanstack/react-router" {
  interface Register {
    router: ReturnType<typeof getRouter>;
  }
}
