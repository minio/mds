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

export const expandMenuOptionStyles = (theme: Theme) => {
  return {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 8,
    border: 0,
    borderRadius: 4,
    cursor: "pointer",
    width: "100%",
    color: theme.colors["Color/Neutral/Text/colorTextLabel"],
    backgroundColor: "transparent",
    padding: "4px 10px",
    fontWeight: 400,
    height: 28,
    boxShadow: "none",
    textDecoration: "none",
    "&:hover:not(:disabled)": {
      backgroundColor: theme.colors["Color/Brand/Control/colorBgHover"],
      color: theme.colors["Color/Neutral/Text/colorTextLabel"],
    },
    "&:active:not(:disabled)": {
      backgroundColor: theme.colors["Color/Brand/Control/colorBgHover"],
    },
    "&:disabled": {
      color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
      cursor: "not-allowed",
    },
    "&.danger": {
      color: theme.colors["Color/Brand/Error/colorPrimaryText"],
      "&:hover:not(:disabled)": {
        color: theme.colors["Color/Brand/Error/colorPrimaryText"],
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

export const dividerStyles = (theme: Theme) =>
  css({
    border: `${theme.colors["Color/Neutral/Border/colorBorderSubtle"]} 1px solid`,
    borderTop: 0,
    borderRight: 0,
    borderLeft: 0,
    width: "100%",
    margin: `7px 0`,
  });

export const expandMenuDescriptionStyles = (theme: Theme) =>
  css({
    width: 216,
    display: "flex",
    alignItems: "flex-start",
    gap: theme.paddingSizes["sizeXS"],
    padding: theme.paddingSizes["sizeXXS"],
    cursor: "default",
    userSelect: "none",
    "& .menu-description-information": {
      display: "flex",
      flexDirection: "column",
      gap: theme.paddingSizes["sizeXXXS"],
      "& .title": {
        color: theme.colors["Color/Neutral/Text/colorTextHeading"],
      },
      "& .subTitle": {
        color: theme.colors["Color/Neutral/Text/colorTextTertiary"],
      },
    },
  });
