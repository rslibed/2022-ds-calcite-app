import { defineConfig } from "vite";
import copy from "rollup-plugin-copy";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "./",
  build: {
    outDir: "build"
  },
  plugins: [
    tsconfigPaths(),
    copy({
      // copy over the calcite-components assets
      targets: [
        {
          src: "node_modules/@esri/calcite-components/dist/calcite/assets/",
          dest: "public/"
        }
      ]
    })
  ]
});
