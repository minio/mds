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

import React from "react";
import get from "lodash/get";
import { DefaultTheme } from "styled-components";

import { lightV2 } from "../global/themes";

export const expandMenuOptionStyles = (
  theme: DefaultTheme,
  inButtonGroup?: boolean,
  icon?: React.ReactNode,
  children?: React.ReactNode,
) => {
  let paddingValue = "4px 10px";

  if (inButtonGroup) {
    paddingValue = icon && !children ? "6px" : "4px 12px";
  }

  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
    border: 0,
    borderRadius: 4,
    cursor: "pointer",
    width: "100%",
    color: get(theme, "dropdownOptions.optionLabel", lightV2.colorTextLabel),
    backgroundColor: get(theme, "dropdownOptions.optionBG", "transparent"),
    padding: paddingValue,
    fontWeight: 400,
    height: 28,
    boxShadow: "none",
    textDecoration: "none",
    "&:hover:not(:disabled)": {
      backgroundColor: get(
        theme,
        "dropdownOptions.hoverOptionBG",
        lightV2.colorBgHover,
      ),
      color: get(theme, "dropdownOptions.optionLabel", lightV2.colorTextLabel),
    },
    "&:active:not(:disabled)": {
      backgroundColor: get(
        theme,
        "dropdownOptions.activeOptionBG",
        lightV2.colorBgHover,
      ),
    },
    "&:disabled": {
      color: get(
        theme,
        "dropdownOptions.disabledLabel",
        lightV2.disabledGreyText,
      ),
      cursor: "not-allowed",
    },
    "&.danger": {
      color: get(
        theme,
        "dropdownOptions.dangerLabel",
        lightV2.errorColorPrimaryText,
      ),
      "&:hover:not(:disabled)": {
        color: get(
          theme,
          "dropdownOptions.dangerLabel",
          lightV2.errorColorPrimaryText,
        ),
      },
    },
    "& svg": {
      width: 16,
      height: 16,
    },
    "& .menu-icon": {
      display: "inline-flex",
      width: 16,
      height: 16,
    },
    "& .menu-option": {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.16px",
      whiteSpace: "nowrap" as const,
    },
    "& .button-label": {
      marginLeft: 0,
    },
  };
};
