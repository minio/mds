import { NotificationVariant } from "../NotificationAlert/NotificationAlert.types";
import { Notification, NotificationOptions } from "./Notifications.types";
type NotificationCallback = (notifications: Notification[]) => void;
declare class NotificationManager {
  private static instance;
  private notifications;
  private subscribers;
  private maxNotifications;
  private defaultDuration;
  private constructor();
  static getInstance(): NotificationManager;
  setMaxNotifications(max: number): void;
  subscribe(callback: NotificationCallback): void;
  unsubscribe(callback: NotificationCallback): void;
  private notifySubscribers;
  addNotification(
    variant: NotificationVariant,
    message: string,
    options?: NotificationOptions,
  ): void;
  removeNotification(id: string): void;
  clearNotifications(): void;
}
declare const _default: NotificationManager;
export default _default;
