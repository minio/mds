import { terser } from "rollup-plugin-terser";
import dts from "rollup-plugin-dts";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import css from "rollup-plugin-import-css";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import rebase from "rollup-plugin-rebase";

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
    makeAbsoluteExternalsRelative: true,
    plugins: [
      peerDepsExternal(),
      resolve({
        browser: true,
      }),
      commonjs(),
      typescript({ tsconfig: "./tsconfig.json" }),
      terser(),
      css({ alwaysOutput: true, minify: true }),
      rebase({
        assetFolder: "assets",
        keepName: true,
      }),
    ],
    external: ["react", "react-dom", "emotion", "emotion/react"],
  },
  {
    input: "dist/esm/src/index.d.ts",
    output: [{ file: "dist/mds.d.ts", format: "es", interop: "default" }],
    plugins: [dts({ interop: "default" })],
  },
];
