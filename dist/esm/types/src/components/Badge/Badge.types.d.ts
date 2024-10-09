import { ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
export type BadgeColors =
  | "none"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "purple"
  | "rose"
  | "scooter"
  | "disabled";
export type BadgeStyles = "minimal" | "subtle" | "bold";
export type BadgeIcons = boolean | "dot" | ReactNode;
export type BadgeSizes = "normal" | "small";
export interface BadgeMainProps {
  label: string;
  id: string;
}
export interface BadgeConstructProps {
  color?: BadgeColors;
  badgeStyle?: BadgeStyles;
  icon?: BadgeIcons;
  size?: BadgeSizes;
  isNumber?: boolean;
  sx?: OverrideTheme;
}
export interface BadgeElementThemeProps {
  minimalColor: string;
  subtleBG: string;
  subtleLabel: string;
  boldBG: string;
  boldLabel: string;
}
export type BadgeThemeProps = Record<BadgeColors, BadgeElementThemeProps>;
export type BadgeProps = BadgeMainProps & BadgeConstructProps;
