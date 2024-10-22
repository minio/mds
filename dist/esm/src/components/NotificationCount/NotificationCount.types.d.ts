import { OverrideTheme } from "../../global/global.types";
export type NotificationBadgeTypes =
  | "none"
  | "info"
  | "success"
  | "warning"
  | "danger";
export type NotificationCountHorizontal = "left" | "right";
export type NotificationCountVertical = "bottom" | "top";
export type NotificationCountShape = "circular" | "rectangular";
export interface NotificationCountMain {
  invisible?: boolean;
  max?: number;
  showZero?: boolean;
  count?: number;
}
export interface NotificationCountConstruct {
  horizontalPosition?: NotificationCountHorizontal;
  verticalPosition?: NotificationCountVertical;
  sx?: OverrideTheme;
  color?: NotificationBadgeTypes;
  shape?: NotificationCountShape;
  dotOnly?: boolean;
}
export interface NotificationCountElements {
  backgroundColor: string;
  textColor: string;
}
export type NotificationCountVariants = Record<
  NotificationBadgeTypes,
  NotificationCountElements
>;
export type NotificationCountProps = NotificationCountMain &
  NotificationCountConstruct;
