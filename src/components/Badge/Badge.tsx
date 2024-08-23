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

import React, { FC, Fragment, useCallback } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { themeColors } from "../../global/themeColors";
import { paddingSizeVariants } from "../../global/utils";
import CircleAlertIcon from "../Icons/NewDesignIcons/CircleAlertIcon";
import CircleCheckIcon from "../Icons/NewDesignIcons/CircleCheckIcon";
import CircleSlashIcon from "../Icons/NewDesignIcons/CircleSlashIcon";
import CircleXIcon from "../Icons/NewDesignIcons/CircleXIcon";
import InfoIcon from "../Icons/NewDesignIcons/InfoIcon";
import { BadgeConstructProps, BadgeProps } from "./Badge.types";

const BadgeBase = styled.span<BadgeConstructProps>(
  ({ theme, color, size, badgeStyle, icon, isNumber, sx }) => {
    let textColor =
      badgeStyle === "bold"
        ? get(
            theme,
            `badge.${color}.subtleLabel`,
            themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
          )
        : get(
            theme,
            `badge.${color}.boldLabel`,
            themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
          );
    let bgColor =
      badgeStyle === "bold"
        ? get(
            theme,
            `badge.${color}.subtleBG`,
            themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
          )
        : get(
            theme,
            `badge.${color}.boldBG`,
            themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
          );
    let borderColor =
      badgeStyle === "bold"
        ? get(
            theme,
            `badge.${color}.subtleBG`,
            themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
          )
        : get(
            theme,
            `badge.${color}.boldBG`,
            themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
          );

    if (icon === "dot" || badgeStyle === "minimal") {
      bgColor = "transparent";
      textColor = get(theme, `badge.${color}.minimalColor`);
      borderColor =
        icon === "dot"
          ? "transparent"
          : get(theme, `badge.${color}.minimalColor`);
    }

    let padding =
      size === "small"
        ? `0 6px`
        : `${paddingSizeVariants.sizeXXS}px ${paddingSizeVariants.sizeXS}px`;

    if (size === "small" && isNumber) {
      padding = "0";
    }

    return {
      position: "relative",
      margin: 0,
      userSelect: "none",
      appearance: "none",
      maxWidth: "100%",
      fontFamily: "'Inter', sans-serif",
      fontSize: 12,
      fontWeight: 600,
      lineHeight: 16,
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      height: size === "small" ? 16 : 24,
      color: textColor,
      backgroundColor: bgColor,
      borderRadius: 16,
      whiteSpace: "nowrap",
      cursor: "default",
      outline: 0,
      textDecoration: "none",
      border: `${borderColor} 1px solid`,
      padding,
      verticalAlign: "middle",
      gap: paddingSizeVariants.sizeXXS,
      minWidth: size === "small" ? 16 : 28,
      "& svg": {
        width: icon === "dot" ? 8 : 15,
        height: icon === "dot" ? 8 : 15,
        color: textColor,
        fill: textColor,
      },
      "& span.dot": {
        display: "inline-block",
        width: 8,
        height: 8,
        backgroundColor: textColor,
        borderRadius: "100%",
      },
      ...sx,
    };
  },
);

const Badge: FC<BadgeProps & React.HTMLAttributes<HTMLSpanElement>> = ({
  children,
  color = "none",
  sx,
  id,
  label,
  size = "normal",
  badgeStyle = "subtle",
  icon,
  isNumber,
  ...props
}) => {
  const iconPhase = useCallback((): React.ReactNode => {
    let icnUse: React.ReactNode = null;

    if (icon) {
      if (typeof icon === "boolean") {
        // We use default icons for each category
        switch (color) {
          case "none":
            icnUse = <CircleSlashIcon />;
            break;
          case "info":
            icnUse = <InfoIcon />;
            break;
          case "success":
            icnUse = <CircleCheckIcon />;
            break;
          case "warning":
            icnUse = <CircleAlertIcon />;
            break;
          case "danger":
            icnUse = <CircleXIcon />;
            break;
          default:
            icnUse = null;
        }
      } else {
        // In case we want to use a custom icon, and it is not a predefined icon
        icnUse = icon === "dot" ? <span className={"dot"} /> : icon;
      }
    }

    return icnUse;
  }, [icon, color]);

  return (
    <BadgeBase
      id={id}
      color={color}
      icon={icon}
      size={size}
      badgeStyle={badgeStyle}
      isNumber={isNumber}
      sx={sx}
      {...props}
    >
      {icon && <Fragment>{iconPhase()}</Fragment>}
      <span>
        {label}
        {children}
      </span>
    </BadgeBase>
  );
};
export default Badge;
