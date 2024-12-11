import { Theme } from "@emotion/react";
import { TooltipPlacement } from "./Tooltip.types";
export declare const opacityAnimation: {
  name: string;
  styles: string;
  anim: 1;
  toString: () => string;
} & string;
export declare const mainTooltipStyle: (
  theme: Theme,
) => import("@emotion/react").SerializedStyles;
export declare const tooltipPlacement: (
  theme: Theme,
  position: TooltipPlacement,
) => import("@emotion/react").SerializedStyles;
