import React from "react";
import { NotificationAlertPrp } from "../NotificationAlert/NotificationAlert.types";
import { OverrideTheme } from "../../global/global.types";
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
