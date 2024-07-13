import { OverrideTheme } from "../../global/global.types";
export type NotificationBadgeTypes =
  | "none"
  | "info"
  | "success"
  | "warning"
  | "danger";
export interface NotificationCountMain {
  invisible?: boolean;
  max?: number;
  showZero?: boolean;
  count?: number;
}
export interface NotificationCountConstruct {
  horizontalPosition?: "left" | "right";
  verticalPosition?: "bottom" | "top";
  sx?: OverrideTheme;
  color?: NotificationBadgeTypes;
  shape?: "circular" | "rectangular";
  dotOnly?: boolean;
}
export type NotificationCountProps = NotificationCountMain &
  NotificationCountConstruct;
