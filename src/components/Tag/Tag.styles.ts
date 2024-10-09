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

import { Theme } from "@emotion/react";

import { TagColors, TagThemeVariants } from "./Tag.types";

const getTagColors = (theme: Theme, color: TagColors) => {
  const tagVariants: TagThemeVariants = {
    primary: {
      background: theme.colors["Color/Brand/Primary/colorPrimaryBg"],
      label: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      deleteColor: theme.colors["Color/Brand/Primary/colorPrimaryText"],
    },
    secondary: {
      background: theme.colors["Color/Brand/Neutral/colorPrimaryBg"],
      label: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
      deleteColor: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
    },
    destructive: {
      background: theme.colors["Color/Brand/Error/colorPrimaryBg"],
      label: theme.colors["Color/Brand/Error/colorPrimaryText"],
      deleteColor: theme.colors["Color/Brand/Error/colorPrimaryText"],
    },
  };

  return tagVariants[color];
};

export const tagStylesSmall = (theme: Theme) => ({
  height: 16,
  borderRadius: theme.borderRadius.borderRadiusXS,
  padding: `0 ${theme.paddingSizes.sizeXXS}px`,
  "& .deleteTagButton": {
    "& svg": {
      width: 14,
      height: 14,
      minWidth: 14,
      minHeight: 14,
    },
  },
});

export const tagBaseStyles = (theme: Theme, color: TagColors) => {
  const colorVars = getTagColors(theme, color);

  return {
    boxSizing: "border-box",
    position: "relative",
    margin: 0,
    userSelect: "none",
    appearance: "none",
    maxWidth: "100%",
    fontFamily: "'Geist', sans-serif",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "16px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 24,
    color: colorVars.label,
    background: colorVars.background,
    boxShadow: "0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset",
    borderRadius: theme.borderRadius.borderRadiusSM,
    whiteSpace: "nowrap",
    cursor: "default",
    outline: 0,
    textDecoration: "none",
    padding: `${theme.paddingSizes.sizeXXS}px ${theme.paddingSizes.sizeXS}px`,
    verticalAlign: "middle",
    gap: theme.paddingSizes.sizeXXS,
    "& svg": {
      width: 12,
      height: 12,
      fill: colorVars.label,
    },
    "& .deleteTagButton": {
      backgroundColor: "transparent",
      border: 0,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: 0,
      cursor: "pointer",
      opacity: 0.6,
      "&:hover": {
        opacity: 1,
      },
      "& svg": {
        color: colorVars.deleteColor,
        fill: colorVars.deleteColor,
        width: 16,
        height: 16,
        minWidth: 16,
        minHeight: 16,
      },
    },
  };
};
