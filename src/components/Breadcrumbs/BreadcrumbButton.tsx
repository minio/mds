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
import { useTheme } from "@emotion/react";

import ExpandMenu from "../ExpandMenu";
import ExpandMenuOption from "../ExpandMenu/ExpandMenuOption";
import { breadcrumbsButtonTheme } from "./Breadcrumbs.styles";
import { BreadcrumbsOption, BreadcrumbsOptionProps } from "./Breadcrumbs.types";

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
  const theme = useTheme();

  const breadcrumbButtonTheme = breadcrumbsButtonTheme(theme);

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
          color: theme.colors["Color/Neutral/Text/colorTextDescription"],
          "&:hover": {
            backgroundColor: theme.colors["Color/Brand/Neutral/colorPrimaryBg"],
            color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
            textDecoration: "underline",
            "& .button-icon svg": {
              color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
            },
          },
          "& .buttonIcon > svg": {
            color: theme.colors["Color/Neutral/Text/colorTextDescription"],
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
      <button
        type={"button"}
        css={[breadcrumbButtonTheme]}
        onClick={onClick}
        disabled={disabled || false}
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
      </button>
      {expandMenu}
    </Fragment>
  );
};

export default BreadcrumbButton;
