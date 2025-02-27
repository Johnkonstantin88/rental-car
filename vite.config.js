import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

const DEFAULT_OPTIONS = {
  test: /\.(jpe?g|png|gif|tiff|webp|svg|avif)$/i,
  exclude: undefined,
  include: undefined,
  includePublic: true,
  logStats: true,
  ansiColors: true,
  svg: {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupNumericValues: false,
            removeViewBox: false,
          },
          cleanupIDs: {
            minify: false,
            remove: false,
          },
          convertPathData: false,
        },
      },
      "sortAttrs",
      {
        name: "addAttributesToSVGElement",
        params: {
          attributes: [{ xmlns: "http://www.w3.org/2000/svg" }],
        },
      },
    ],
  },
  png: {
    quality: 75,
  },
  jpeg: {
    quality: 75,
  },
  jpg: {
    quality: 75,
  },
  tiff: {
    quality: 75,
  },
  gif: {},
  webp: {
    lossless: true,
  },
  avif: {
    lossless: true,
  },
  cache: false,
  cacheLocation: undefined,
};

export default defineConfig({
  plugins: [react(), svgr(), ViteImageOptimizer({ DEFAULT_OPTIONS })],
  build: {
    sourcemap: true,
  },
  server: {
    open: true,
  },
});
