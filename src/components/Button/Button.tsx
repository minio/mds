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

import React, { FC, Fragment } from "react";
import get from "lodash/get";
import styled from "styled-components";
import { ButtonProps, ConstructProps } from "./Button.types";
import { breakPoints, overridePropsParse } from "../../global/utils";

const CustomButton = styled.button<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & ConstructProps
>(
  ({
    theme,
    fullWidth,
    variant = "neutral",
    iconLocation,
    icon,
    label,
    collapseOnSmall,
    parentChildren,
    compact,
    inButtonGroup,
    sx,
  }) => {
    const buttonLabelSx =
      ((!label || label === "") && !parentChildren) || !icon
        ? {
            marginRight: 0,
            marginLeft: 0,
          }
        : {
            marginRight: label !== "" && iconLocation === "end" ? "4px" : "0",
            marginLeft: label !== "" && iconLocation === "start" ? "4px" : "0",
          };

    let smallScreenStyles = {};

    if (
      collapseOnSmall &&
      icon &&
      ((label && label.trim() !== "") || parentChildren)
    ) {
      smallScreenStyles = {
        [`@media (max-width: ${get(breakPoints, "md", 0)}px)`]: {
          padding: "0 14px",
          "& .button-label": {
            display: "none",
          },
        },
      };
    }

    return {
      borderRadius: 6,
      cursor: "pointer",
      height: compact ? 28 : 36,
      fontFamily: "'Geist', sans-serif",
      fontWeight: compact ? "normal" : "600",
      fontSize: 14,
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      padding:
        !label || label === ""
          ? compact
            ? "6px"
            : "10px 8px"
          : compact
            ? "4px 12px"
            : "8px 16px",
      transition: "all 0.2s linear",
      background: get(theme, `buttons.${variant}.enabled.background`, "#fff"),
      borderColor: get(theme, `buttons.${variant}.enabled.border`, "#000"),
      borderWidth: 1,
      borderStyle: "solid",
      color: get(theme, `buttons.${variant}.enabled.text`, "#000"),
      boxShadow: get(theme, `buttons.${variant}.enabled.shadow`, "none"),
      "& .button-label": {
        whiteSpace: fullWidth ? "normal" : "nowrap",
        ...buttonLabelSx,
      },
      "& .buttonIcon": {
        display: "block",
        height: 16,
        width: 16,

        "& > svg": {
          fill: get(theme, `buttons.${variant}.enabled.text`, "#000"),
          color: get(theme, `buttons.${variant}.enabled.text`, "#000"),
          width: 14,
          height: 14,
        },
      },
      "&:disabled": {
        cursor: "not-allowed",
        background: get(
          theme,
          `buttons.${variant}.disabled.background`,
          "#fff",
        ),
        borderColor: get(theme, `buttons.${variant}.disabled.border`, "#000"),
        borderWeight: 1,
        borderStyle: "solid",
        color: get(theme, `buttons.${variant}.disabled.text`, "#000"),
        boxShadow: get(theme, `buttons.${variant}.disabled.shadow`, "none"),
        "& .buttonIcon > svg": {
          fill: get(theme, `buttons.${variant}.disabled.text`, "#000"),
          color: get(theme, `buttons.${variant}.disabled.text`, "#000"),
        },
      },
      "&:hover:not(:disabled),&.hover:not(:disabled)": {
        background: get(theme, `buttons.${variant}.hover.background`, "#fff"),
        borderColor: get(theme, `buttons.${variant}.hover.border`, "#000"),
        color: get(theme, `buttons.${variant}.hover.text`, "#000"),
        boxShadow: get(theme, `buttons.${variant}.hover.shadow`, "none"),
        "& .buttonIcon > svg": {
          fill: get(theme, `buttons.${variant}.hover.text`, "#000"),
          color: get(theme, `buttons.${variant}.hover.text`, "#000"),
        },
      },
      "&:active:not(:disabled),&.active:not(:disabled)": {
        background: get(theme, `buttons.${variant}.pressed.background`, "#fff"),
        borderColor: get(theme, `buttons.${variant}.pressed.border`, "#000"),
        color: get(theme, `buttons.${variant}.pressed.text`, "#000"),
        boxShadow: get(theme, `buttons.${variant}.pressed.shadow`, "none"),
        "& .buttonIcon > svg": {
          fill: get(theme, `buttons.${variant}.pressed.text`, "#000"),
          color: get(theme, `buttons.${variant}.pressed.text`, "#000"),
        },
      },
      ...smallScreenStyles,
      ...overridePropsParse(sx, theme),
    };
  },
);
const Button: FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  label,
  variant = "neutral",
  icon,
  iconLocation = "start",
  secondaryIcon,
  onClick,
  disabled,
  fullWidth,
  collapseOnSmall = true,
  children,
  compact = false,
  className,
  inButtonGroup = false,
  sx,
  ...props
}) => {
  let iconToPlace: React.ReactNode = null;
  let secondaryIconToPlace: React.ReactNode = null;

  if (icon) {
    iconToPlace = <span className={"buttonIcon"}>{icon}</span>;
  }

  if (secondaryIcon) {
    secondaryIconToPlace = (
      <span className={"buttonIcon"}>{secondaryIcon}</span>
    );
  }

  return (
    <CustomButton
      onClick={onClick}
      disabled={disabled || false}
      variant={variant || "neutral"}
      iconLocation={iconLocation || "end"}
      label={label}
      fullWidth={fullWidth || false}
      collapseOnSmall={collapseOnSmall}
      icon={iconToPlace}
      parentChildren={children || null}
      className={`${className || ""} button button-${variant}`}
      compact={compact}
      inButtonGroup={inButtonGroup}
      sx={sx}
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
    </CustomButton>
  );
};

export default Button;
