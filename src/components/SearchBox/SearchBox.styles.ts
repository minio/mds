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

import { css, Theme } from "@emotion/react";

export const searchBoxContainerStyles = (theme: Theme) =>
  css({
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
      color: theme.colors["Color/Neutral/Text/colorTextPlaceholder"],
    },
  });

export const searchBoxBaseStyles = (theme: Theme) => {
  const borderColor = theme.colors["Color/Neutral/Border/colorBorderSubtle"];

  const borderHover = theme.colors["Color/Brand/Primary/colorPrimaryBorder"];

  return css({
    position: "relative",
    width: "100%",
    height: 28,
    boxSizing: "border-box",
    borderRadius: 4,
    paddingTop: 0,
    paddingLeft: 30,
    paddingBottom: 0,
    color: theme.colors["Color/Neutral/Text/colorTextPlaceholder"],

    fontSize: 14,
    fontWeight: 400,
    border: `${borderColor} 1px solid`,
    outline: "none",
    transitionDuration: "0.1s",
    backgroundColor: "transparent",
    letterSpacing: "0.16px",
    "&:placeholder": {
      color: theme.colors["Color/Neutral/Text/colorTextPlaceholder"],
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
      border: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
      backgroundColor: theme.colors["Color/Neutral/Bg/colorBgDisabled"],

      color: theme.colors["Color/Neutral/Text/colorTextPlaceholder"],

      "&:placeholder": {
        color: theme.colors["Color/Neutral/Text/colorTextPlaceholder"],
      },
    },
  });
};
