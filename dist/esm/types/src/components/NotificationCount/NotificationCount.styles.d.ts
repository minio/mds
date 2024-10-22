import {
  NotificationBadgeTypes,
  NotificationCountHorizontal,
  NotificationCountShape,
  NotificationCountVertical,
} from "./NotificationCount.types";
import { Theme } from "@emotion/react";
export declare const notificationCountParentStyles: (
  theme: Theme,
  verticalPosition: NotificationCountVertical,
  horizontalPosition: NotificationCountHorizontal,
  color: NotificationBadgeTypes,
  shape: NotificationCountShape,
  dotOnly: boolean,
) => {
  position: string;
  display: string;
  "& .counterContent": {
    boxSizing: string;
    fontSize: number;
    userSelect: string;
    display: string;
    alignItems: string;
    justifyContent: string;
    position: string;
    padding: string | number;
    borderRadius: string | number;
    right: string | number;
    top: string | number;
    left: string | number;
    bottom: string | number;
    minWidth: number;
    width: string | number;
    height: number;
    backgroundColor: string;
    color: string;
    fontWeight: string;
    textAlign: string;
    zIndex: number;
    transform: string;
  };
};
