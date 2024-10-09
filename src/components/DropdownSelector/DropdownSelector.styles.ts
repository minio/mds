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

export const dropdownBlockStyles = (theme: Theme) =>
  css({
    position: "absolute",
    display: "grid",
    gridTemplateColumns: "100%",
    backgroundColor: theme.colors["Color/Neutral/Bg/colorBgContainer"],
    padding: 8,
    minWidth: 0,
    overflowX: "hidden",
    overflowY: "auto",
    borderRadius: theme.borderRadius.borderRadiusSM,
    border: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderMinimal"]}`,
    boxShadow: theme.shadows["boxShadow-03"],
    "& ul": {
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
  });

export const dropdownItemStyles = (
  theme: Theme,
  hasIcon: boolean,
  hasIndicator: boolean,
) => {
  const gridColumns = `${hasIcon ? "16px " : ""}1fr ${hasIndicator ? "16px" : ""}`;

  return css({
    cursor: "pointer",
    listStyle: "none",
    color: theme.colors["Color/Neutral/Text/colorTextLabel"],
    padding: "6px 10px",
    fontSize: 14,
    fontWeight: 400,
    lineHeight: "18px",
    letterSpacing: "0.16px",
    userSelect: "none",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    whiteSpace: "nowrap",
    borderRadius: theme.borderRadius.borderRadiusSM,
    display: "grid",
    gridTemplateColumns: gridColumns,
    "& svg": {
      width: 16,
      height: 16,
      minWidth: 16,
      minHeight: 16,
    },
    "& .truncate": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
    "&.selected": {
      backgroundColor: theme.colors["Color/Brand/Control/colorBgActive"],
      color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
    },
    "&.disabled": {
      cursor: "not-allowed",
      color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
      "&:hover": {
        backgroundColor: theme.colors["Color/Neutral/Bg/colorBgContainer"],
        color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
      },
    },
    "&.danger:not(.disabled)": {
      color: theme.colors["Color/Brand/Error/colorPrimaryText"],
      "&:hover": {
        backgroundColor: theme.colors["Color/Brand/Error/colorPrimaryBgHover"],
        color: theme.colors["Color/Brand/Error/colorPrimaryTextHover"],
      },
    },
    "&.hovered:not(.disabled)": {
      backgroundColor: theme.colors["Color/Brand/Control/colorBgHover"],
      color: theme.colors["Color/Neutral/Text/colorTextLabel"],
    },
  });
};
