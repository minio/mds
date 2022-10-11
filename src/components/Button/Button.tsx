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

const CustomButton = styled.button<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & ConstructProps
>(
  ({
    theme,
    fullWidth,
    variant,
    iconLocation,
    icon,
    label,
    collapseOnSmall,
    parentChildren,
  }) => {
    const neatVariant = variant || "regular";

    const buttonLabel =
      (!label && !parentChildren) || !icon
        ? {
            marginRight: 0,
            marginLeft: 0,
          }
        : {
            marginLeft: iconLocation === "end" ? "0" : "10px",
            marginRight: iconLocation === "start" ? "0" : "10px",
          };

    let smallScreenStyles = {};

    if (
      collapseOnSmall &&
      icon &&
      ((label && label.trim() !== "") || parentChildren)
    ) {
      smallScreenStyles = {
        "@media (max-width: 768px)": {
          padding: "0 14px",
          "& .button-label": {
            display: "none",
          },
        },
      };
    }

    return {
      borderRadius: "3px",
      cursor: "pointer",
      width: fullWidth ? "100%" : "initial",
      height: "39px",
      fontFamily: "'Lato', sans-serif",
      fontWeight: "bold",
      fontSize: "14px",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      margin: 0,
      padding:
        (!label || label.trim() === "") && !parentChildren
          ? "0 14px"
          : "0 25px",
      transition: "all 0.2s linear",
      backgroundColor: get(
        theme,
        `buttons.${neatVariant}.enabled.background`,
        "#fff"
      ),
      borderColor: get(theme, `buttons.${neatVariant}.enabled.border`, "#000"),
      borderWidth: "1px",
      borderStyle: "solid",
      color: get(theme, `buttons.${neatVariant}.enabled.text`, "#000"),
      "& .button-label": {
        whiteSpace: fullWidth ? "normal" : "nowrap",
        ...buttonLabel,
      },
      "& .buttonIcon": {
        display: "block",
        height: "14px",

        "& > svg": {
          fill: get(theme, `buttons.${neatVariant}.enabled.text`, "#000"),
          color: get(theme, `buttons.${neatVariant}.enabled.text`, "#000"),
          width: "14px",
          height: "14px",
        },
      },
      "&:disabled": {
        cursor: "not-allowed",
        backgroundColor: get(
          theme,
          `buttons.${neatVariant}.disabled.background`,
          "#fff"
        ),
        borderColor: get(
          theme,
          `buttons.${neatVariant}.disabled.border`,
          "#000"
        ),
        borderWeight: "1px",
        borderStyle: "solid",
        color: get(theme, `buttons.${neatVariant}.disabled.text`, "#000"),
        "& .buttonIcon > svg": {
          fill: get(theme, `buttons.${neatVariant}.disabled.text`, "#000"),
          color: get(theme, `buttons.${neatVariant}.disabled.text`, "#000"),
        },
      },
      "&:hover:not(:disabled)": {
        backgroundColor: get(
          theme,
          `buttons.${neatVariant}.hover.background`,
          "#fff"
        ),
        borderColor: get(theme, `buttons.${neatVariant}.hover.border`, "#000"),
        borderWeight: "1px",
        borderStyle: "solid",
        color: get(theme, `buttons.${neatVariant}.hover.text`, "#000"),
        "& .buttonIcon > svg": {
          fill: get(theme, `buttons.${neatVariant}.hover.text`, "#000"),
          color: get(theme, `buttons.${neatVariant}.hover.text`, "#000"),
        },
      },
      "&:active:not(:disabled)": {
        backgroundColor: get(
          theme,
          `buttons.${neatVariant}.pressed.background`,
          "#fff"
        ),
        border: get(theme, `buttons.${neatVariant}.pressed.border`, "#000"),
        borderWeight: "1px",
        borderStyle: "solid",
        color: get(theme, `buttons.${neatVariant}.pressed.text`, "#000"),
        "& .buttonIcon > svg": {
          fill: get(theme, `buttons.${neatVariant}.pressed.text`, "#000"),
          color: get(theme, `buttons.${neatVariant}.pressed.text`, "#000"),
        },
      },
      ...smallScreenStyles,
    };
  }
);
const Button: FC<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  label,
  variant = "regular",
  icon,
  iconLocation = "end",
  onClick,
  disabled,
  fullWidth,
  collapseOnSmall = true,
  children,
  ...props
}) => {
  let iconToPlace: React.ReactNode = null;

  if (icon) {
    iconToPlace = <span className={"buttonIcon"}>{icon}</span>;
  }

  return (
    <CustomButton
      onClick={onClick}
      disabled={disabled || false}
      variant={variant || "regular"}
      iconLocation={iconLocation || "end"}
      label={label || ""}
      fullWidth={fullWidth || false}
      collapseOnSmall={!!collapseOnSmall}
      icon={iconToPlace}
      parentChildren={children || null}
      {...props}
    >
      <Fragment>
        {icon && iconLocation === "start" && iconToPlace}
        <span className={"button-label"}>
          {children}
          {children && label ? " " : ""}
          {label}
        </span>
        {icon && iconLocation === "end" && iconToPlace}
      </Fragment>
    </CustomButton>
  );
};

export default Button;
