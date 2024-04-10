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

import React, { FC, Fragment } from "react";
import { BreadcrumbsOptionProps } from "./Breadcrumbs.types";
import styled from "styled-components";
import { ButtonProps, ConstructProps } from "../Button/Button.types";
import get from "lodash/get";
import { themeColors } from "../../global/themeColors";

const CustomBreadcrumb = styled.button<
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
    compact,
    sx,
  }) => ({
    cursor: "pointer",
    display: "inline-block" as const,
    boxSizing: "border-box",
    border: 0,
    backgroundColor: "transparent",
    padding: "2px 4px",
    color: get(
      theme,
      "elementsColor",
      themeColors["Color/Neutral/Text/colorTextDescription"].lightMode,
    ),
    fontSize: 12,
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: "16px",
    letterSpacing: "0.5px",
    textOverflow: "ellipsis" as const,
    overflow: "hidden" as const,
    whiteSpace: "nowrap" as const,
    borderRadius: 2,
    height: 20,
    "&.current": {
      cursor: "default",
      color: get(
        theme,
        "selectedColor",
        themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
      ),
      fontWeight: 600,
    },
    "&:not(.current):hover": {
      backgroundColor: get(
        theme,
        "hoverBG",
        themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
      ),
      color: get(
        theme,
        "hoverColor",
        themeColors["Color/Brand/Neutral/colorPrimaryText"].lightMode,
      ),
      textDecoration: "underline",
    },
  }),
);

const BreadcrumbButton: FC<
  BreadcrumbsOptionProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  label,
  icon,
  iconLocation = "end",
  onClick,
  disabled,
  children,
  className,
  current,
  ...props
}) => {
  let iconToPlace: React.ReactNode = null;

  if (icon) {
    iconToPlace = <span className={"buttonIcon"}>{icon}</span>;
  }

  return (
    <CustomBreadcrumb
      onClick={onClick}
      disabled={disabled || false}
      iconLocation={iconLocation || "end"}
      label={label || ""}
      icon={iconToPlace}
      parentChildren={children || null}
      className={`breadcrumbElement ${className || ""} ${current ? "current" : ""}`}
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
    </CustomBreadcrumb>
  );
};

export default BreadcrumbButton;
