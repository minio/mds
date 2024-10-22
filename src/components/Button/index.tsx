// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

import React, { FC, Fragment, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { breakPoints, overridePropsParse } from "../../global/utils";
import { buttonCSS } from "./Button.styles";
import { ButtonProps } from "./Button.types";

const Button: FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  type = "button",
  label,
  variant = "secondary",
  icon,
  iconLocation = "start",
  secondaryIcon,
  onClick,
  fullWidth,
  collapseOnSmall = true,
  children,
  compact = false,
  className,
  inButtonGroup = false,
  isLoading = false,
  sx,
  ...props
}) => {
  const theme = useTheme();

  const hasLabelTag = label && label.trim() !== "";
  const hasLabel = hasLabelTag || !!children;
  let iconToPlace: React.ReactNode = null;
  let secondaryIconToPlace: React.ReactNode = null;

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  if (icon) {
    iconToPlace = <span className={"buttonIcon"}>{icon}</span>;
  }

  if (secondaryIcon) {
    secondaryIconToPlace = (
      <span className={"buttonIcon"}>{secondaryIcon}</span>
    );
  }

  const iconOnly = !hasLabel && !!icon;

  const mainStyles = buttonCSS(theme, variant, iconOnly);

  const paddingValue = useMemo(() => {
    const notLabel = compact ? "6px" : "10px 8px";

    const withLabel = compact ? "4px 12px" : "8px 16px";

    let paddingValue = !hasLabel ? notLabel : withLabel;

    if (variant.endsWith("-ghost") && !icon) {
      paddingValue = compact ? "4px 0" : "8px 0";
    }

    if (inButtonGroup) {
      paddingValue = !hasLabel ? "6px" : "4px 12px";
    }

    return paddingValue;
  }, [hasLabel, compact, icon, inButtonGroup, variant]);

  const extraStyles = css({
    height: compact ? 28 : 36,
    padding: paddingValue,
    "& .button-label": {
      whiteSpace: fullWidth ? "normal" : "nowrap",
      marginRight:
        !hasLabel || !icon
          ? 0
          : label !== "" && iconLocation === "end"
            ? "4px"
            : 0,
      marginLeft:
        !hasLabel || !icon
          ? 0
          : label !== "" && iconLocation === "start"
            ? "4px"
            : 0,
    },
  });

  const smallScreenStyles = css({
    [`@media (max-width: ${breakPoints.md}px)`]: {
      padding: "0 14px",
      "& .button-label": {
        display: "none",
      },
    },
  });

  if (isLoading) {
    return <Fragment />;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      css={[
        mainStyles,
        extraStyles,
        collapseOnSmall && icon && (hasLabelTag || children)
          ? smallScreenStyles
          : "",
        overrideThemes,
      ]}
      className={`${className || ""} button button-${variant}`}
      {...props}
    >
      <Fragment>
        {icon && iconLocation === "start" && iconToPlace}
        {(children || label?.trim() !== "") && (
          <span className={"button-label"}>
            {children}
            {children && label ? " " : ""}
            {label}
          </span>
        )}
        {icon && iconLocation === "end" && iconToPlace}
        {secondaryIcon && secondaryIconToPlace}
      </Fragment>
    </button>
  );
};

export default Button;
