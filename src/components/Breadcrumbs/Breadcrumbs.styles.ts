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

export const breadcrumbsTheme = (theme: Theme) => ({
  boxSizing: "border-box",
  flexBasis: "100%",
  width: "100%",
  fontSize: 12,
  fontWeight: "bold",
  height: 38,
  display: "flex",
  alignItems: "center",
  marginRight: 10,
  "& .breadcrumbsList": {
    display: "flex",
    flexWrap: "nowrap",
    flexGrow: 1,
    textAlign: "left" as const,
    marginLeft: 15,
    marginRight: 10,
    overflow: "hidden",
    userSelect: "none",
    "& .divider": {
      boxSizing: "content-box",
      display: "inline-flex",
      justifyContent: "center",
      width: 12,
      minWidth: 12,
      color: theme.colors["Color/Neutral/Text/colorTextDescription"],
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "16px",
      letterSpacing: "0.5px",
      padding: "2px 4px",
    },
    "& svg": {
      color: theme.colors["Color/Neutral/Text/colorTextDescription"],
      "&:hover": {
        color: theme.colors["Color/Neutral/Text/colorTextLabel"],
      },
    },
    "& .last": {
      pointerEvents: "none",
    },
  },
  "& .slashSpacingStyle": {
    margin: "0 5px",
  },
});

export const breadcrumbsButtonTheme = (theme: Theme) => ({
  cursor: "pointer",
  display: "inline-flex" as const,
  boxSizing: "border-box" as const,
  border: 0,
  backgroundColor: "transparent",
  padding: "2px 4px",
  color: theme.colors["Color/Neutral/Text/colorTextHeading"],
  fontSize: 12,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "16px",
  letterSpacing: "0.5px",
  textOverflow: "ellipsis" as const,
  overflow: "hidden" as const,
  whiteSpace: "nowrap" as const,
  borderRadius: theme.borderRadius.borderRadiusXS,
  height: 20,
  gap: 4,
  "& .button-icon svg": {
    width: 16,
    height: 16,
    minWidth: 16,
    minHeight: 16,
    color: theme.colors["Color/Neutral/Text/colorTextHeading"],
  },
  "&.current": {
    cursor: "default",
    color: theme.colors["Color/Neutral/Text/colorTextDescription"],
    "& .button-icon svg": {
      color: theme.colors["Color/Neutral/Text/colorTextDescription"],
    },
  },
  "&:not(.current):hover": {
    backgroundColor: theme.colors["Color/Brand/Control/colorBgHover"],
    color: theme.colors["Color/Neutral/Text/colorTextLabel"],
    textDecoration: "underline",
    "& .button-icon svg": {
      color: theme.colors["Color/Neutral/Text/colorTextLabel"],
    },
  },
});
