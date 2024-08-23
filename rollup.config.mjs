import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-import-css";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import copy from "rollup-plugin-copy";
import image from "@rollup/plugin-image";
import url from "@rollup/plugin-url";

export default [
  {
    input: "src/index.ts",
    output: [
      {
        esModule: true,
        file: "dist/esm/index.js",
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      css({ alwaysOutput: true, minify: true }),
      copy({
        targets: [{ src: "src/components/assets", dest: "dist" }],
      }),
      image(),
      url({
        // tell rollup which files to include
        include: ["**/*.woff", "**/*.woff2", "**/*.mp4"],
        // setting infinite limit will ensure that the files
        // are always bundled with the code, not copied to /dist
        limit: Infinity,
      }),
    ],
    external: ["react", "react-dom", "styled-components"],
  },
  {
    input: "dist/esm/types/src/index.d.ts",
    output: [{ file: "dist/mds.d.ts", format: "es", interop: "default" }],
    plugins: [dts({ interop: "default" })],
  },
];
