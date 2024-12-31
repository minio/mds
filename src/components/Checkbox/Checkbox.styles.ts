// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

export const checkboxStyles = (theme: Theme) =>
  css({
    position: "relative",
    "& input": {
      display: "none",
    },
    "& .checkbox": {
      position: "relative",
      display: "block",
      width: 16,
      height: 16,
      borderRadius: 4,
      border: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
      backgroundColor: theme.colors["Color/Neutral/Bg/colorBgFields"],
      boxSizing: "border-box" as const,
      "&:hover:not(:disabled)": {
        borderColor: theme.colors["Color/Neutral/Border/colorBorderBold"],
      },
      "& .icon-overlay": {
        display: "none",
      },
    },
    "input:checked ~ .checkbox": {
      borderColor: theme.colors["Color/Brand/Primary/colorPrimary"],
      backgroundColor: theme.colors["Color/Brand/Primary/colorPrimary"],
      overflow: "hidden",
      "&:before": {
        content: "' '",
        position: "absolute",
        display: "block",
        width: 16,
        height: 16,
        borderRadius: 4,
        top: "50%",
        left: "50%",
        transform: "translateX(-50%) translateY(-50%)",
      },
      "& .icon-overlay": {
        display: "block",
      },
      "&:hover": {
        borderColor: theme.colors["Color/Brand/Primary/colorPrimaryHover"],
        backgroundColor: theme.colors["Color/Brand/Primary/colorPrimaryHover"],
      },
    },
    "input:disabled": {
      "&  ~ .checkbox": {
        border: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
        backgroundColor: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        cursor: "not-allowed",
        "&:hover": {
          borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
          backgroundColor: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        },
      },
    },
    "& .icon-overlay": {
      color: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
      position: "absolute",
      width: 14,
      height: 14,
      "&.disabled": {
        color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
      },
    },
  });

export const checkContainer = (theme: Theme) =>
  css({
    display: "flex",
    gap: theme.paddingSizes.size,
    alignItems: "center",
  });
