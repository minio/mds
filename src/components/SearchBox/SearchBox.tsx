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

import React, { FC } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { themeColors } from "../../global/themeColors";
import { overridePropsParse } from "../../global/utils";
import SearchIcon from "../Icons/NewDesignIcons/SearchIcon";
import { SearchBoxProps } from "./SearchBox.types";

const SearchBoxContainer = styled.div(({ theme }) => ({
  position: "relative",
  boxSizing: "border-box" as const,
  height: 28,
  "& svg ": {
    position: "absolute",
    marginLeft: 8,
    top: "50%",
    transform: "translateY(-50%)",
    width: 16,
    height: 16,
    color: get(
      theme,
      "inputBox.placeholderColor",
      themeColors["Color/Neutral/Text/colorTextPlaceholder"].lightMode,
    ),
  },
}));

const SearchBoxBase = styled.input<SearchBoxProps>(({ sx, theme }) => {
  const borderColor = get(
    theme,
    "inputBox.border",
    themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
  );
  const borderHover = get(
    theme,
    "inputBox.hoverBorder",
    themeColors["Color/Brand/Primary/colorPrimaryBorder"].lightMode,
  );

  return {
    position: "relative",
    width: "100%",
    height: 28,
    boxSizing: "border-box",
    borderRadius: 4,
    paddingTop: 0,
    paddingLeft: 30,
    paddingBottom: 0,
    color: get(
      theme,
      "inputBox.color",
      themeColors["Color/Neutral/Text/colorTextPlaceholder"].lightMode,
    ),
    fontSize: 14,
    fontWeight: 400,
    border: `${borderColor} 1px solid`,
    outline: "none",
    transitionDuration: "0.1s",
    backgroundColor: "transparent",
    letterSpacing: "0.16px",
    "&:placeholder": {
      color: get(
        theme,
        "inputBox.placeholderColor",
        themeColors["Color/Neutral/Text/colorTextPlaceholder"].lightMode,
      ),
      opacity: 1,
      fontWeight: 400,
      letterSpacing: "0.16px",
    },
    "&:hover": {
      borderColor: borderHover,
    },
    "&:focus": {
      borderColor: borderHover,
      /* focusStyle-Light */
      boxShadow: "0px 0px 0px 2px rgba(43, 100, 229, 0.30)",
    },
    "&:disabled": {
      border: get(
        theme,
        "inputBox.disabledBorder",
        themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
      ),
      backgroundColor: get(
        theme,
        "inputBox.disabledBackground",
        themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
      ),
      color: get(
        theme,
        "inputBox.disabledText",
        themeColors["Color/Neutral/Text/colorTextPlaceholder"].lightMode,
      ),
      "&:placeholder": {
        color: get(
          theme,
          "inputBox.disabledPlaceholder",
          themeColors["Color/Neutral/Text/colorTextPlaceholder"].lightMode,
        ),
      },
    },
    ...overridePropsParse(sx, theme),
  };
});

const SearchBox: FC<
  SearchBoxProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ id, icon, sx, placeholder, ...restProps }) => {
  return (
    <SearchBoxContainer>
      {!icon ? <SearchIcon /> : icon}
      <SearchBoxBase id={id} sx={sx} placeholder={placeholder} {...restProps} />
    </SearchBoxContainer>
  );
};

export default SearchBox;
