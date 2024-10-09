// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

import {
  NotificationBadgeTypes,
  NotificationCountElements,
  NotificationCountHorizontal,
  NotificationCountShape,
  NotificationCountVariants,
  NotificationCountVertical,
} from "./NotificationCount.types";
import { Theme } from "@emotion/react";

const variants = (
  theme: Theme,
  varType: NotificationBadgeTypes,
): NotificationCountElements => {
  const variant: NotificationCountVariants = {
    none: {
      backgroundColor: theme.colors["Color/Brand/Neutral/colorPrimaryBg"],
      textColor: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
    },
    info: {
      backgroundColor: theme.colors["Color/Brand/Primary/colorPrimaryBg"],
      textColor: theme.colors["Color/Brand/Primary/colorPrimaryText"],
    },
    success: {
      backgroundColor: theme.colors["Color/Brand/Success/colorPrimaryBg"],
      textColor: theme.colors["Color/Brand/Success/colorPrimaryText"],
    },
    warning: {
      backgroundColor: theme.colors["Color/Brand/Warning/colorPrimaryBg"],
      textColor: theme.colors["Color/Brand/Warning/colorPrimaryText"],
    },
    danger: {
      backgroundColor: theme.colors["Color/Brand/Error/colorPrimaryBg"],
      textColor: theme.colors["Color/Brand/Error/colorPrimaryText"],
    },
  };
  return variant[varType];
};

export const notificationCountParentStyles = (
  theme: Theme,
  verticalPosition: NotificationCountVertical,
  horizontalPosition: NotificationCountHorizontal,
  color: NotificationBadgeTypes,
  shape: NotificationCountShape,
  dotOnly: boolean,
) => {
  const circularRadius = dotOnly ? "100%" : 10;
  const varStyles = variants(theme, color);

  return {
    position: "relative",
    display: "inline-flex",
    "& .counterContent": {
      boxSizing: "border-box",
      fontSize: 12,
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      padding: dotOnly ? 0 : "0 2px",
      borderRadius: shape === "circular" ? circularRadius : 3,
      right: horizontalPosition === "right" ? 0 : "initial",
      top: verticalPosition === "top" ? 0 : "initial",
      left: horizontalPosition === "left" ? 0 : "initial",
      bottom: verticalPosition === "bottom" ? 0 : "initial",
      minWidth: !dotOnly ? 16 : 10,
      width: dotOnly ? 10 : "initial",
      height: !dotOnly ? 16 : 10,
      backgroundColor: varStyles.backgroundColor,
      color: varStyles.textColor,
      fontWeight: "600",
      textAlign: "center",
      zIndex: 1,
      transform: `scale(1) translate(${
        horizontalPosition === "right" ? "" : "-"
      }50%, ${verticalPosition === "bottom" ? "" : "-"}50%)`,
    },
  };
};
