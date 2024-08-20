import { ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
export type AlertDesignMode = "banner" | "card";
export type NotificationEmphasis = "subtle" | "minimal";
export type NotificationVariant =
  | "neutral"
  | "information"
  | "success"
  | "warning"
  | "danger";
export interface NotificationAlertBase {
  title?: string;
  children: ReactNode;
  action?: ReactNode;
  isLoading?: boolean;
  onClose?: () => void;
}
export interface NotificationAlertConstruct {
  emphasisMode?: NotificationEmphasis;
  variant?: NotificationVariant;
  shadow?: boolean;
  designMode?: AlertDesignMode;
  sx?: OverrideTheme;
}
export type NotificationAlertPrp = NotificationAlertBase &
  NotificationAlertConstruct;
