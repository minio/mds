import { NotificationStackProps } from "./NotificationStack.types";
export declare const useNotifications: () => {
  notifications: NotificationStackProps[];
  addNotification: (message: React.ReactNode, duration: number) => void;
  removeNotification: (id: number) => void;
};
