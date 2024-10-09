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

import { NotificationCountProps } from "./NotificationCount.types";
import { css, useTheme } from "@emotion/react";
import { notificationCountParentStyles } from "./NotificationCount.styles";
import { overridePropsParse } from "../../global/utils";

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
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const baseStyle = notificationCountParentStyles(
    theme,
    verticalPosition,
    horizontalPosition,
    color,
    shape,
    dotOnly,
  );

  return (
    <span css={[baseStyle, overrideThemes]} {...props}>
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
    </span>
  );
};
export default NotificationCount;
