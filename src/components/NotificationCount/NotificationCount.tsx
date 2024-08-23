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

import React, { FC, Fragment, HTMLAttributes } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { themeColors } from "../../global/themeColors";
import { overridePropsParse } from "../../global/utils";
import {
  NotificationCountConstruct,
  NotificationCountProps,
} from "./NotificationCount.types";

const NotificationCountParent = styled.span<
  HTMLAttributes<HTMLDivElement> & NotificationCountConstruct
>(
  ({
    theme,
    sx,
    verticalPosition,
    horizontalPosition,
    color,
    shape,
    dotOnly,
  }) => {
    const circularRadius = dotOnly ? "100%" : 10;

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
        backgroundColor: get(
          theme,
          `notificationCount.${color}.backgroundColor`,
          themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
        ),
        color: get(
          theme,
          `notificationCount.${color}.textColor`,
          themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
        ),
        fontWeight: "600",
        textAlign: "center",
        zIndex: 1,
        transform: `scale(1) translate(${
          horizontalPosition === "right" ? "" : "-"
        }50%, ${verticalPosition === "bottom" ? "" : "-"}50%)`,
      },
      ...overridePropsParse(sx, theme),
    };
  },
);

const NotificationCount: FC<
  HTMLAttributes<HTMLSpanElement> & NotificationCountProps
> = ({
  sx,
  children,
  horizontalPosition = "right" as "right" | "left",
  verticalPosition = "bottom" as "top" | "bottom",
  color = "none",
  shape = "circular",
  dotOnly = false,
  invisible = false,
  max = 99,
  showZero = false,
  count = 0,
  ...props
}) => {
  return (
    <NotificationCountParent
      horizontalPosition={horizontalPosition}
      verticalPosition={verticalPosition}
      color={color}
      shape={shape}
      dotOnly={dotOnly}
      sx={sx}
      {...props}
    >
      {children}
      {!invisible && (count >= 0 || (showZero && count === 0)) && (
        <div className={"counterContent"}>
          {!dotOnly ? (
            <Fragment>{count > max ? `${max}+` : count}</Fragment>
          ) : (
            ""
          )}
        </div>
      )}
    </NotificationCountParent>
  );
};
export default NotificationCount;
