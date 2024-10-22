import { Theme } from "@emotion/react";
import { CssProperties } from "../../../styled-system/types";
import { ProgressState } from "./ProgressBar.types";
export declare const indeterminateStyles: (
  theme: Theme,
  barHeight: CssProperties["height"],
  state: ProgressState,
) => import("@emotion/react").SerializedStyles;
export declare const progressBasicStyles: (
  theme: Theme,
  transparentBG: boolean,
  barHeight: CssProperties["height"],
  state: ProgressState,
) => import("@emotion/react").SerializedStyles;
