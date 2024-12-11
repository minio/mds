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

import { CssProperties } from "../../../styled-system/types";

export const modalContainer = (
  theme: Theme,
  width: CssProperties["width"],
  padding: CssProperties["padding"],
) =>
  css({
    fontFamily: "'Geist', sans-serif",
    color: theme.colors["Color/Neutral/Text/colorTextLabel"],
    width: "100%",
    maxWidth: width,
    margin: 32,
    backgroundColor: theme.colors["Color/Neutral/Bg/colorBgElevated"],
    borderRadius: 12,
    boxShadow: theme.shadows["boxShadow-04"],
    boxSizing: "border-box",
    "& .dialogContent": {
      boxSizing: "border-box",
      padding: padding,
      maxHeight: "calc(100vh - 150px)",
      overflowY: "auto",
    },
  });

export const modalTitleBar = (theme: Theme) =>
  css({
    display: "flex",
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "flex-start",
    position: "relative" as const,
    padding: "26px 24px",
    backgroundColor: theme.colors["Color/Neutral/Bg/colorBgSections"],
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    "& .closeModalButton": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      border: "none",
      backgroundColor: "transparent",
      fontSize: 24,
      color: theme.colors["Color/Neutral/Icon/colorIcon"],
      padding: 0,
      borderRadius: "100%",
      width: 28,
      height: 28,
      opacity: 0.8,
      "& > svg": {
        width: 18,
        height: 18,
      },
      "&:hover": {
        color: theme.colors["Color/Neutral/Icon/colorIcon"],
        opacity: 1,
      },
    },
    "& .title": {
      fontFamily: "'Geist', sans-serif",
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      justifyContent: "flex-start",
      gap: 8,
      fontSize: 20,
      color: theme.colors["Color/Neutral/Text/colorTextHeading"],
      fontWeight: "600",
      lineHeight: "28px",
      width: "100%",
      "& > svg": {
        width: 24,
        height: 24,
        minWidth: 24,
        minHeight: 24,
        color: theme.colors["Color/Neutral/Icon/colorIcon"],
      },
    },
  });
