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

export const buttonGroupStyles = (theme: Theme) => ({
  display: "inline-flex",
  flexDirection: "row" as const,
  border: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
  backgroundColor: theme.colors["Color/Neutral/Bg/colorBgContainer"],
  borderRadius: 4,
  overflow: "hidden",
  width: "initial",
  height: 28,
  boxSizing: "border-box" as const,
  "& > *:not(:last-child)": {
    borderRight: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
  },
  "& button": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "none",
    border: 0,
    borderRadius: 0,
    fontSize: 14,
    lineHeight: "20px",
    fontStyle: "normal",
    fontWeight: 400,
    letterSpacing: "0.16px",
    fontFamily: "'Geist', sans-serif",
    boxSizing: "border-box",
    color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
    height: 26,
    background: "transparent",
    "& .buttonIcon": {
      height: 16,
      "& > svg": {
        width: 16,
        height: 16,
        minWidth: 16,
        minHeight: 16,
        color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
      },
    },
    "&.button-secondary": {
      color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
      "& .buttonIcon > svg": {
        color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
      },
    },
    "& .button-label, & .menu-option": {
      whiteSpace: "nowrap",
    },
    "&:disabled": {
      cursor: "not-allowed",
      color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
      backgroundColor: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
      "& .buttonIcon > svg": {
        color: theme.colors["Color/Neutral/Text/colorTextDisabled"],
      },
    },
    "&:hover:not(:disabled)": {
      background: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
      color: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
      borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
      boxShadow: "none",
      "& .buttonIcon > svg": {
        color: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
      },
      "&.button-secondary": {
        color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        "& .buttonIcon > svg": {
          color: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        },
      },
    },
    "&:active": {
      backgroundColor: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
      color: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
      borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
      boxShadow: "none",
      "& .buttonIcon > svg": {
        color: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
      },
    },
    "&.selected:not(:disabled)": {
      backgroundColor: theme.colors["Color/Brand/Primary/colorPrimaryBg"],
      color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      "& .buttonIcon > svg": {
        color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      },
      "&:hover": {
        backgroundColor: theme.colors["Color/Brand/Primary/colorPrimaryBg"],
        color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
        "& .buttonIcon > svg": {
          color: theme.colors["Color/Brand/Primary/colorPrimaryText"],
        },
      },
    },
  },
});
