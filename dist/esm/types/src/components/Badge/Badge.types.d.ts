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
export interface BadgeMainProps {
  label: string;
  id: string;
}
export interface BadgeConstructProps {
  color?: BadgeColors;
  badgeStyle?: BadgeStyles;
  icon?: BadgeIcons;
  size?: "normal" | "small";
  isNumber?: boolean;
  sx?: OverrideTheme;
}
export type BadgeProps = BadgeMainProps & BadgeConstructProps;
