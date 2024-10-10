import {
  NotificationAlertPrp,
  NotificationVariant,
} from "../NotificationAlert/NotificationAlert.types";
export declare const positions: readonly [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "top-center",
  "bottom-center",
];
export type NotificationPosition = (typeof positions)[number];
export declare const durations: readonly [0, 3000, 5000, 10000];
export type NotificationDuration = (typeof durations)[number];
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
