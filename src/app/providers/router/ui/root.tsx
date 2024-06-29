import { createRouter } from "@tanstack/react-router";

// config
import { routeTree } from "./route-tree";

export const router = createRouter({
  routeTree,
});