import {
  NotificationAlertPrp,
  NotificationVariant,
} from "../NotificationAlert/NotificationAlert.types";
export type NotificationPosition =
  | "top-left"
  | "top-right"
  | "bottom-left"
  | "bottom-right"
  | "top-center"
  | "bottom-center";
export type NotificationDuration = 0 | 3000 | 5000 | 10000;
export interface NotificationOptions
  extends Omit<
    NotificationAlertPrp,
    "children" | "title" | "variant" | "onClose"
  > {
  children?: React.ReactNode;
  position?: NotificationPosition;
  duration?: NotificationDuration;
}
export interface Notification {
  id: string;
  variant: NotificationVariant;
  message: string;
  options: NotificationOptions;
  isExiting: boolean;
}
