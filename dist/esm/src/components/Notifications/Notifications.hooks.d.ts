import { NotificationOptions } from "./Notifications.types";
export declare const useNotification: () => {
  success: (message: string, options?: NotificationOptions) => void;
  danger: (message: string, options?: NotificationOptions) => void;
  warning: (message: string, options?: NotificationOptions) => void;
  information: (message: string, options?: NotificationOptions) => void;
  neutral: (message: string, options?: NotificationOptions) => void;
  clear: () => void;
};
