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

import React, { FC, Fragment, HTMLAttributes, useMemo } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { themeColors, themeShadows } from "../../global/themeColors";
import { overridePropsParse, paddingSizeVariants } from "../../global/utils";
import CircleAlertIcon from "../Icons/NewDesignIcons/CircleAlertIcon";
import CircleCheckIcon from "../Icons/NewDesignIcons/CircleCheckIcon";
import CircleSlashIcon from "../Icons/NewDesignIcons/CircleSlashIcon";
import CircleXIcon from "../Icons/NewDesignIcons/CircleXIcon";
import InfoIcon from "../Icons/NewDesignIcons/InfoIcon";
import XIcon from "../Icons/NewDesignIcons/XIcon";
import Loader from "../Loader/Loader";
import {
  NotificationAlertConstruct,
  NotificationAlertPrp,
} from "./NotificationAlert.types";

const NotificationContainer = styled.div.attrs(() => ({
  className: "notification-alert",
}))<NotificationAlertConstruct>(
  ({ theme, emphasisMode, shadow, variant, designMode, sx }) => {
    const backgroundColor =
      emphasisMode === "subtle"
        ? get(
            theme,
            `notificationAlert.${variant}.highContrastBG`,
            themeColors["Color/Brand/Error/colorPrimaryBg"].lightMode,
          )
        : get(
            theme,
            `notificationAlert.${variant}.minimalContrastBG`,
            themeColors["Color/Neutral/Bg/colorBgElevated"].lightMode,
          );
    const borderColor =
      emphasisMode === "subtle"
        ? get(
            theme,
            `notificationAlert.${variant}.highContrastBorder`,
            themeColors["Color/Brand/Error/colorPrimaryBg"].lightMode,
          )
        : get(
            theme,
            `notificationAlert.${variant}.minimalContrastBorder`,
            themeColors["Color/Brand/Error/colorPrimaryBorder"].lightMode,
          );

    return {
      display: "flex",
      width: "100%",
      backgroundColor: backgroundColor,
      border: `1px solid ${borderColor}`,
      borderRadius: 8,
      gap: 8,
      alignItems: designMode === "banner" ? "center" : "flex-start",
      boxShadow: shadow ? themeShadows["boxShadow-03"] : "none",
      padding:
        designMode === "banner"
          ? `${paddingSizeVariants.sizeXS}px ${paddingSizeVariants.size}px`
          : paddingSizeVariants.size,
      "& .mainInfoContainer": {
        flexGrow: 1,
        width: "100%",
      },
      "& .actionCardMode": {
        marginTop: 8,
      },
      "& > svg": {
        color: get(
          theme,
          `notificationAlert.${variant}.iconColor`,
          themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
        ),
        width: 16,
        height: 16,
        minWidth: 16,
        minHeight: 16,
      },
      "& .dismissAlert": {
        color: get(
          theme,
          "notificationAlert.contentColor",
          themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
        ),
        backgroundColor: "transparent",
        border: 0,
        padding: 0,
        width: 16,
        height: 16,
        cursor: "pointer",
        alignSelf: designMode === "card" ? "flex-start" : "center",
        "& svg": {
          width: 16,
          height: 16,
        },
      },
      "& .alertInitLine": {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",

        "& .content": {
          fontSize: 14,
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "20px",
          letterSpacing: "0.16px",
        },

        "& .notificationTitle": {
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          "& .fillTitleContent": {
            display: "flex",
            flex: 1,
            width: "100%",
            gap: 8,
            alignItems: designMode === "card" ? "flex-start" : "center",
          },
          "& .cardTitle": {
            fontSize: 14,
            fontStyle: "normal",
            fontWeight: 600,
            letterSpacing: "0.16px",
            lineHeight: 1,
            color: get(
              theme,
              "notificationAlert.titleColor",
              themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
            ),
          },
        },
      },
      "& .cardContent": {
        "& .content": {
          marginTop: 3,
        },
        "& .actionCardMode": {
          lineHeight: 1,
        },
      },
      ...overridePropsParse(sx, theme),
    };
  },
);

const NotificationAlert: FC<
  NotificationAlertPrp & HTMLAttributes<HTMLDivElement>
> = ({
  title = "",
  children,
  action,
  onClose,
  emphasisMode = "subtle",
  variant = "information",
  shadow = false,
  isLoading,
  id,
  sx,
  ...restProps
}) => {
  const designMode = title.trim() !== "" ? "card" : "banner";

  const icon = useMemo(() => {
    switch (variant) {
      case "information":
        return <InfoIcon />;
      case "success":
        return <CircleCheckIcon />;
      case "warning":
        return <CircleAlertIcon />;
      case "danger":
        return <CircleXIcon />;
      default:
        return <CircleSlashIcon />;
    }
  }, [variant]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <NotificationContainer
      emphasisMode={emphasisMode}
      shadow={shadow}
      variant={variant}
      designMode={designMode}
      id={id}
      sx={sx}
      {...restProps}
    >
      {icon}
      <div className={"mainInfoContainer"}>
        <div className={"alertInitLine"}>
          <div className={"notificationTitle"}>
            <div className={"fillTitleContent"}>
              {designMode === "banner" ? (
                <Fragment>
                  <div className={"content"}>{children}</div>
                  {action && <div>{action}</div>}
                </Fragment>
              ) : (
                <div className={"cardTitle"}>{title}</div>
              )}
            </div>
          </div>
        </div>
        {designMode === "card" && (
          <div className={"cardContent"}>
            <div className={"content"}>{children}</div>
            {action && <div className={"actionCardMode"}>{action}</div>}
          </div>
        )}
      </div>
      {onClose && (
        <button className={"dismissAlert"} onClick={onClose}>
          <XIcon />
        </button>
      )}
    </NotificationContainer>
  );
};

export default NotificationAlert;
