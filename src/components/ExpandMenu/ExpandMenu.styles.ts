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
