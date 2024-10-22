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

import React, { FC, Fragment, useCallback, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import CircleAlertIcon from "../../icons/CircleAlertIcon";
import CircleCheckIcon from "../../icons/CircleCheckIcon";
import CircleSlashIcon from "../../icons/CircleSlashIcon";
import CircleXIcon from "../../icons/CircleXIcon";
import InfoIcon from "../../icons/InfoIcon";
import { badgeCSS } from "./Badge.styles";
import { BadgeProps } from "./Badge.types";

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
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const badgeStyling = badgeCSS(theme, color, badgeStyle, size, icon, isNumber);

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
    <div
      id={id}
      className={"badge"}
      css={[badgeStyling, overrideThemes]}
      {...props}
    >
      {icon && <Fragment>{iconPhase()}</Fragment>}
      <span>
        {label}
        {children}
      </span>
    </div>
  );
};
export default Badge;
