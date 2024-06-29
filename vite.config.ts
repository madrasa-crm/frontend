import react from "@vitejs/plugin-react";
import path from "path";
import tsConfigPaths from "vite-tsconfig-paths";

import { defineConfig } from "vite";

export default defineConfig(({ mode }) => ({
  plugins: [react(), tsConfigPaths()],
  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, "./src/*"),
      "@/components/*": path.resolve(__dirname, "./src/shared/ui/*"),
      "@/helpers/*": path.resolve(__dirname, "./src/shared/lib/helpers/*"),
    },
  },
  server: {
    proxy: {
      "/api": {
        // import.meta.env.VITE_API_STAGE_URL available here with: process.env.VITE_API_STAGE_URL
        target: process.env.VITE_API_STAGE_URL,
        changeOrigin: true,
        secure: false,
      },
    },
  },
}));
