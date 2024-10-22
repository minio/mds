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

import { Theme } from "@emotion/react";

import {
  NotificationAlertProps,
  NotificationAlertThemeProps,
  NotificationVariant,
} from "./NotificationAlert.types";

export const getNotificationAlertStyle = (
  theme: Theme,
  variant: NotificationVariant,
): NotificationAlertThemeProps => {
  const notificationVariants: NotificationAlertProps = {
    danger: {
      highContrastBG: theme.colors["Color/Brand/Error/colorPrimaryBg"],
      highContrastBorder: theme.colors["Color/Brand/Error/colorPrimaryBg"],
      minimalContrastBG: theme.colors["Color/Neutral/Bg/colorBgElevated"],
      minimalContrastBorder:
        theme.colors["Color/Brand/Error/colorPrimaryBorder"],
      actionColor: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      iconColor: theme.colors["Color/Brand/Error/colorPrimaryText"],
      contentColor: theme.colors["Color/Neutral/Text/colorTextLabel"],
      titleColor: theme.colors["Color/Neutral/Text/colorTextHeading"],
    },
    success: {
      highContrastBG: theme.colors["Color/Brand/Success/colorPrimaryBg"],
      highContrastBorder: theme.colors["Color/Brand/Success/colorPrimaryBg"],
      minimalContrastBG: theme.colors["Color/Neutral/Bg/colorBgElevated"],
      minimalContrastBorder:
        theme.colors["Color/Brand/Success/colorPrimaryBorder"],
      actionColor: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      iconColor: theme.colors["Color/Brand/Success/colorPrimaryBorder"],
      contentColor: theme.colors["Color/Neutral/Text/colorTextLabel"],
      titleColor: theme.colors["Color/Neutral/Text/colorTextHeading"],
    },
    warning: {
      highContrastBG: theme.colors["Color/Brand/Warning/colorPrimaryBg"],
      highContrastBorder: theme.colors["Color/Brand/Warning/colorPrimaryBg"],
      minimalContrastBG: theme.colors["Color/Neutral/Bg/colorBgElevated"],
      minimalContrastBorder:
        theme.colors["Color/Brand/Warning/colorPrimaryBorder"],
      actionColor: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      iconColor: theme.colors["Color/Brand/Warning/colorPrimaryBorder"],
      contentColor: theme.colors["Color/Neutral/Text/colorTextLabel"],
      titleColor: theme.colors["Color/Neutral/Text/colorTextHeading"],
    },
    information: {
      highContrastBG: theme.colors["Color/Brand/Info/colorPrimaryBg"],
      highContrastBorder: theme.colors["Color/Brand/Info/colorPrimaryBg"],
      minimalContrastBG: theme.colors["Color/Neutral/Bg/colorBgElevated"],
      minimalContrastBorder:
        theme.colors["Color/Brand/Primary/colorPrimaryText"],
      actionColor: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      iconColor: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      contentColor: theme.colors["Color/Neutral/Text/colorTextLabel"],
      titleColor: theme.colors["Color/Neutral/Text/colorTextHeading"],
    },
    neutral: {
      highContrastBG: theme.colors["Color/Brand/Neutral/colorPrimaryBg"],
      highContrastBorder: theme.colors["Color/Brand/Neutral/colorPrimaryBg"],
      minimalContrastBG: theme.colors["Color/Neutral/Bg/colorBgElevated"],
      minimalContrastBorder:
        theme.colors["Color/Brand/Neutral/colorPrimaryBorder"],
      actionColor: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      iconColor: theme.colors["Color/Brand/Neutral/colorPrimaryBorder"],
      contentColor: theme.colors["Color/Neutral/Text/colorTextLabel"],
      titleColor: theme.colors["Color/Neutral/Text/colorTextHeading"],
    },
  };

  return notificationVariants[variant];
};
