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
import get from "lodash/get";
import styled from "styled-components";

import { themeColors } from "../../global/themeColors";
import { ButtonProps, ConstructProps } from "../Button/Button.types";
import ExpandMenu from "../ExpandMenu/ExpandMenu";
import ExpandMenuOption from "../ExpandMenu/ExpandMenuOption";
import { BreadcrumbsOption, BreadcrumbsOptionProps } from "./Breadcrumbs.types";

const CustomBreadcrumb = styled.button<
  ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement> & ConstructProps
>(({ theme }) => ({
  cursor: "pointer",
  display: "inline-flex" as const,
  boxSizing: "border-box",
  border: 0,
  backgroundColor: "transparent",
  padding: "2px 4px",
  color: get(
    theme,
    "breadcrumbs.elementsColor",
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
  gap: 4,
  "& .button-icon svg": {
    width: 16,
    height: 16,
    minWidth: 16,
    minHeight: 16,
    color: get(
      theme,
      "breadcrumbs.elementsColor",
      themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
    ),
  },
  "&.current": {
    cursor: "default",
    color: get(
      theme,
      "breadcrumbs.selectedColor",
      themeColors["Color/Neutral/Text/colorTextDescription"].lightMode,
    ),
    "& .button-icon svg": {
      color: get(
        theme,
        "breadcrumbs.selectedColor",
        themeColors["Color/Neutral/Text/colorTextDescription"].lightMode,
      ),
    },
  },
  "&:not(.current):hover": {
    backgroundColor: get(
      theme,
      "breadcrumbs.hoverBG",
      themeColors["Color/Brand/Control/colorBgHover"].lightMode,
    ),
    color: get(
      theme,
      "breadcrumbs.hoverColor",
      themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
    ),
    textDecoration: "underline",
    "& .button-icon svg": {
      color: get(
        theme,
        "breadcrumbs.hoverColor",
        themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
      ),
    },
  },
}));

const BreadcrumbButton: FC<
  BreadcrumbsOptionProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  label,
  icon,
  iconLocation = "start",
  onClick,
  onClickOption,
  disabled,
  children,
  className,
  current,
  subOptions,
  ...props
}) => {
  const clickFunction = (option: BreadcrumbsOption) => {
    if (onClickOption) {
      onClickOption(option.to);
    }

    if (option.onClick) {
      option.onClick(option.to);
    }
  };

  let iconToPlace: React.ReactNode = null;
  let expandMenu = null;

  if (icon) {
    iconToPlace = <span className={"buttonIcon"}>{icon}</span>;
  }

  if (subOptions) {
    expandMenu = (
      <ExpandMenu
        id={`expand-breadcrumb-${label}`}
        className={"breadcrumbElement"}
        variant={"secondary-ghost"}
        dropMenuPosition={"middle"}
        sx={(theme) => ({
          display: "flex",
          alignItems: "center",
          height: 20,
          width: 20,
          padding: "2px 4px",
          borderRadius: 2,
          fontSize: 12,
          gap: 4,
          transitionDuration: "0s",
          "& .button-label": {
            display: "none",
            marginLeft: 0,
          },
          color: get(
            theme,
            "breadcrumbs.elementsColor",
            themeColors["Color/Neutral/Text/colorTextDescription"].lightMode,
          ),
          "&:hover": {
            backgroundColor: get(
              theme,
              "breadcrumbs.hoverBG",
              themeColors["Color/Brand/Control/colorBgHover"].lightMode,
            ),
            color: get(
              theme,
              "breadcrumbs.hoverColor",
              themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
            ),
            textDecoration: "underline",
            "& .button-icon svg": {
              color: get(
                theme,
                "breadcrumbs.hoverColor",
                themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
              ),
            },
          },
          "& .buttonIcon > svg": {
            color: get(
              theme,
              "breadcrumbs.elementsColor",
              themeColors["Color/Neutral/Text/colorTextDescription"].lightMode,
            ),
            width: 16,
            height: 16,
          },
        })}
        compact
      >
        {subOptions.map((option, index) => (
          <ExpandMenuOption
            key={`expand-opt-${option.label}-${index}`}
            id={`expandOption-${option.label}`}
            onClick={() => clickFunction(option)}
            icon={option.icon}
            disabled={option.disabled}
          >
            {option.label}
          </ExpandMenuOption>
        ))}
      </ExpandMenu>
    );
  }

  return (
    <Fragment>
      <CustomBreadcrumb
        onClick={onClick}
        disabled={disabled || false}
        iconLocation={iconLocation || "end"}
        label={label || ""}
        icon={iconToPlace}
        parentChildren={children || null}
        className={`breadcrumbElement ${className || ""} ${current && !subOptions ? "current" : ""}`}
        {...props}
      >
        <Fragment>
          {icon && (
            <span className={"button-icon"}>
              {icon && iconLocation === "start" && iconToPlace}
            </span>
          )}
          {children ||
            (label && (
              <span className={"button-label"}>
                {children}
                {children && label ? " " : ""}
                {label}
              </span>
            ))}
          {icon && iconLocation === "end" && iconToPlace}
        </Fragment>
      </CustomBreadcrumb>
      {expandMenu}
    </Fragment>
  );
};

export default BreadcrumbButton;
