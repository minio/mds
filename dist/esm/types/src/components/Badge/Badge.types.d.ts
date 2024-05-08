import { OverrideTheme } from "../../global/global.types";
export interface BadgeMain {
  invisible?: boolean;
  max?: number;
  showZero?: boolean;
  badgeContent?: number;
}
export interface BadgeConstruct {
  horizontalPosition?: "left" | "right";
  verticalPosition?: "bottom" | "top";
  sx?: OverrideTheme;
  color?: "default" | "secondary" | "warn" | "alert" | "ok" | "grey";
  shape?: "circular" | "rectangular";
  dotOnly?: boolean;
}
export type BadgeProps = BadgeMain & BadgeConstruct;
