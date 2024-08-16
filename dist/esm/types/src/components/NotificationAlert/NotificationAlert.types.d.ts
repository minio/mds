import { ReactNode } from "react";
export type AlertDesignMode = "banner" | "card";
export type NotificationEmphasis = "subtle" | "minimal";
export type NotificationVariant =
  | "neutral"
  | "information"
  | "success"
  | "warning"
  | "danger";
export interface NotificationAlertBase {
  title: string;
  children: ReactNode;
  action?: ReactNode;
  onClose?: () => void;
}
export interface NotificationAlertConstruct {
  designMode?: AlertDesignMode;
  emphasisMode?: NotificationEmphasis;
  variant?: NotificationVariant;
  shadow?: boolean;
}
export type NotificationAlertPrp = NotificationAlertBase &
  NotificationAlertConstruct;
