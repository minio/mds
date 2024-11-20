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

import { FC, Fragment, HTMLAttributes, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import CircleAlertIcon from "../../icons/CircleAlertIcon";
import CircleCheckIcon from "../../icons/CircleCheckIcon";
import CircleSlashIcon from "../../icons/CircleSlashIcon";
import CircleXIcon from "../../icons/CircleXIcon";
import InfoIcon from "../../icons/InfoIcon";
import XIcon from "../../icons/XIcon";
import { getNotificationAlertStyle } from "./NotificationAlert.styles";
import { NotificationAlertPrp } from "./NotificationAlert.types";

const Index: FC<NotificationAlertPrp & HTMLAttributes<HTMLDivElement>> = ({
  title = "",
  children,
  action,
  onClose,
  emphasisMode = "subtle",
  variant = "information",
  shadow = false,
  wrapText = false,
  isLoading,
  id,
  sx,
  ...restProps
}) => {
  const theme = useTheme();

  const designMode = title.trim() !== "" ? "card" : "banner";

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

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

  const notificationStyle = getNotificationAlertStyle(theme, variant);

  const bannerStyle = css({
    alignItems: "center",
    padding: `${theme.paddingSizes.sizeXS}px ${theme.paddingSizes.size}px`,
    "& .dismissAlert": {
      alignSelf: "center",
    },
    "& .notificationTitle": {
      "& .fillTitleContent": {
        alignItems: "center",
      },
    },
  });

  const cardStyle = css({
    alignItems: "flex-start",
    padding: theme.paddingSizes.size,
    "& .dismissAlert": {
      alignSelf: "flex-start",
    },
    "& .notificationTitle": {
      "& .fillTitleContent": {
        alignItems: "flex-start",
      },
    },
  });

  const wrapTextStyles = css({
    "& .alertInitLine": {
      "& .notificationTitle": {
        "& .cardTitle": {
          display: "-webkit-box",
          WebkitLineClamp: 1,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
        },
      },
      "& .content": {
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
        textOverflow: "ellipsis",
      },
    },
  });

  const baseStyle = css({
    display: "flex",
    width: "100%",
    backgroundColor:
      emphasisMode === "subtle"
        ? notificationStyle.highContrastBG
        : notificationStyle.minimalContrastBG,
    border: `1px solid ${
      emphasisMode === "subtle"
        ? notificationStyle.highContrastBorder
        : notificationStyle.minimalContrastBorder
    }`,
    borderRadius: 8,
    gap: 8,
    boxShadow: shadow ? theme.shadows["boxShadow-03"] : "none",
    color: notificationStyle.contentColor,
    "& .mainInfoContainer": {
      flexGrow: 1,
      width: "100%",
      minWidth: 0,
    },
    "& .actionCardMode": {
      marginTop: 8,
    },
    "& > svg": {
      color: notificationStyle.iconColor,
      width: 16,
      height: 16,
      minWidth: 16,
      minHeight: 16,
      flexShrink: 0,
    },
    "& .dismissAlert": {
      color: notificationStyle.contentColor,
      backgroundColor: "transparent",
      border: 0,
      padding: 0,
      width: 16,
      height: 16,
      cursor: "pointer",
      "& svg": {
        width: 16,
        height: 16,
      },
    },
    "& .alertInitLine": {
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "flex-start",
      minWidth: 0,

      "& .notificationTitle": {
        width: "100%",
        minWidth: 0,
        "& .fillTitleContent": {
          display: "flex",
          flex: 1,
          width: "100%",
          gap: 8,
          minWidth: 0,
        },
        "& .cardTitle": {
          fontSize: 14,
          fontStyle: "normal",
          fontWeight: 600,
          letterSpacing: "0.16px",
          lineHeight: 1,
          color: notificationStyle.titleColor,
        },
      },
      "& .content": {
        fontSize: 14,
        fontStyle: "normal",
        fontWeight: 400,
        lineHeight: "20px",
        letterSpacing: "0.16px",
        wordBreak: "break-word",
        overflowWrap: "break-word",
        whiteSpace: "normal",
        minWidth: 0,
      },
    },
    "& .cardContent": {
      width: "100%",
      minWidth: 0,
      "& .content": {
        marginTop: 3,
        wordBreak: "break-word",
        overflowWrap: "break-word",
        whiteSpace: "normal",
        minWidth: 0,
      },
      "& .actionCardMode": {
        lineHeight: 1,
      },
    },
  });

  if (isLoading) {
    return <div></div>;
  }

  return (
    <div
      css={[
        baseStyle,
        designMode === "banner" ? bannerStyle : cardStyle,
        ...(wrapText ? [wrapTextStyles] : []),
        overrideThemes,
      ]}
      className={"notification-alert"}
      id={id}
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
          {designMode === "card" && (
            <div className={"cardContent"}>
              <div className={"content"}>{children}</div>
              {action && <div className={"actionCardMode"}>{action}</div>}
            </div>
          )}
        </div>
      </div>
      {onClose && (
        <button type={"button"} className={"dismissAlert"} onClick={onClose}>
          <XIcon />
        </button>
      )}
    </div>
  );
};

export default Index;
