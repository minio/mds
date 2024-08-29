import React from "react";
import { OverrideTheme } from "../../global/global.types";
import { NotificationAlertPrp } from "../NotificationAlert/NotificationAlert.types";
export interface NotificationStackProps {
  id: number;
  hovered: boolean;
  duration: number;
  timeoutId: NodeJS.Timeout | string | number | undefined;
  notificationInfo: NotificationAlertPrp;
}
export interface NotificationStackConstructProps {
  sx?: OverrideTheme;
}
export interface NotificationStackContainerProps {
  children: React.ReactNode[];
}
