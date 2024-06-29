import react from "@vitejs/plugin-react"
import path from "path"
import tsConfigPaths from "vite-tsconfig-paths"

import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(),tsConfigPaths()],
  resolve: {
    alias: {
      "@/*": path.resolve(__dirname, "./src/*"),
      "@/components/*": path.resolve(__dirname, "./src/shared/ui/*"),
      "@/helpers": path.resolve(__dirname, "./src/shared/lib/helpers/*"),
    },
  },
})
