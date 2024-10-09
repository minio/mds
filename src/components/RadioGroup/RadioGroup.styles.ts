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

export const radioButtonStyles = (theme: Theme) =>
  css({
    "& input": {
      appearance: "none" as const,
      backgroundColor: "transparent",
      margin: 0,
      display: "none",
      "& ~ .radio": {
        position: "relative",
        display: "block",
        boxSizing: "border-box" as const,
        width: 16,
        height: 16,
        borderRadius: "100%",
        border: `2px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
        backgroundColor: theme.colors["Color/Neutral/Bg/colorBgFields"],
        "&:hover": {
          borderColor: theme.colors["Color/Neutral/Border/colorBorderBold"],
          cursor: "pointer",
        },
        "&.checked": {
          borderColor: theme.colors["Color/Brand/Primary/colorPrimary"],
          backgroundColor: theme.colors["Color/Brand/Primary/colorPrimary"],
          "&::before": {
            content: "' '",
            position: "absolute",
            display: "block",
            width: 8,
            height: 8,
            backgroundColor:
              theme.colors["Color/Neutral/Text/colorTextLightSolid"],
            borderRadius: "100%",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
          },
          "&:hover": {
            backgroundColor:
              theme.colors["Color/Brand/Primary/colorPrimaryHover"],
            borderColor: theme.colors["Color/Brand/Primary/colorPrimaryHover"],
          },
        },
      },
      "&:disabled": {
        "& ~ .radio": {
          border: `2px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
          cursor: "not-allowed",
          boxShadow: "inset 0px 1px 3px rgba(240,240,240,0.1)" as const,
          backgroundColor: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
          "&:hover": {
            borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
            backgroundColor:
              theme.colors["Color/Neutral/Border/colorBorderSubtle"],
            cursor: "not-allowed",
          },
          "&.checked": {
            backgroundColor:
              theme.colors["Color/Neutral/Border/colorBorderSubtle"],
          },
        },
        "&:checked ~ .radio": {
          "&:before": {
            backgroundColor:
              theme.colors["Color/Neutral/Text/colorTextLightSolid"],
          },
        },
      },
    },
  });

export const optionsContainerStyles = (theme: Theme, inColumn: boolean) =>
  css({
    flexGrow: 1,
    width: "100%",
    display: "flex",
    flexDirection: inColumn ? "column" : "row",
    justifyContent: "flex-end",
    gap: 15,
    "& .optionLabel": {
      userSelect: "none",
      lineHeight: "20px",
      color: theme.colors["Color/Neutral/Text/colorTextHeading"],
      "& .subLabel": {
        color: theme.colors["Color/Neutral/Text/colorTextLabel"],
      },
      "&:hover": {
        cursor: "pointer",
      },
      "&.disabled": {
        color: theme.colors["Color/Neutral/Text/colorTextHeading"],
        cursor: "not-allowed",
      },
    },
  });

export const radioContainerStyles = css({
  display: "flex",
  alignItems: "center",
  gap: 16,
});

export const radioMainStyles = css({
  "& .descriptionLabel": {
    display: "block",
    marginLeft: 32,
    marginTop: 4,
  },
});
