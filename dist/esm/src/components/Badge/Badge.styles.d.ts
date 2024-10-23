import { Theme } from "@emotion/react";
import {
  BadgeColors,
  BadgeElementThemeProps,
  BadgeIcons,
  BadgeSizes,
  BadgeStyles,
} from "./Badge.types";
export declare const badgeVariant: (
  theme: Theme,
  variant: BadgeColors,
) => BadgeElementThemeProps;
export declare const badgeCSS: (
  theme: Theme,
  color: BadgeColors,
  badgeStyle: BadgeStyles,
  size: BadgeSizes,
  icon: BadgeIcons,
  isNumber?: boolean,
) => import("@emotion/react").SerializedStyles;
