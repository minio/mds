import { NotificationAlertPrp } from "../NotificationAlert/NotificationAlert.types";
import { NotificationStackProps } from "./NotificationStack.types";
export declare const useNotifications: () => {
  notifications: NotificationStackProps[];
  addNotification: (
    message: NotificationAlertPrp,
    durationSeconds: 0 | 3 | 5 | 10,
  ) => () => void;
  removeNotification: (id: number) => void;
  setHovered: (id: number, hovered: boolean) => void;
};
