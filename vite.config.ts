import { UserConfig } from "vite";

export const entrypoint = "/main.js";
export const base = "/assets";

export default {
  root: `.${base}`,
  base,
  server: {
    port: 5173,
    force: true,
  },
  build: {
    manifest: true,
    outDir: "../public",
    rollupOptions: {
      manualChunks: undefined,
      input: `.${base}${entrypoint}`,
      output: {
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`,
      },
    },
  },
} as UserConfig;
