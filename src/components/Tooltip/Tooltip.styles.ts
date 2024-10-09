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

import { css, keyframes, Theme } from "@emotion/react";

import { TooltipPlacement } from "./Tooltip.types";

export const opacityAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const mainTooltipStyle = (theme: Theme) =>
  css({
    position: "fixed",
    borderRadius: 4,
    border: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
    color: theme.colors["Color/Neutral/Text/colorTextContrast"],
    background: theme.colors["Color/Neutral/Bg/colorBgContrast"],
    lineHeight: 1,
    zIndex: 10001,
    padding: 8,
    paddingTop: 4,
    paddingBottom: 4,
    fontSize: 12,
    boxShadow: theme.shadows["boxShadow-02"],
    maxWidth: 350,
    textAlign: "center",
    "& .title": {
      textAlign: "left",
      whiteSpace: "nowrap",
    },
    "& .content": {
      width: "auto",
      maxWidth: 350,
      overflowWrap: "break-word",
      textAlign: "left",
    },
  });

export const tooltipPlacement = (theme: Theme, position: TooltipPlacement) => {
  const tooltipArrowSize = 6;
  const background = theme.colors["Color/Neutral/Bg/colorBgContrast"];

  let placementPosition = {};
  const beforePosition = {
    content: "' '",
    left: "50%",
    border: "solid transparent",
    height: 0,
    width: 0,
    position: "absolute",
    pointerEvents: "none",
    borderWidth: tooltipArrowSize,
    marginLeft: tooltipArrowSize * -1,
  };

  switch (position) {
    case "top":
      placementPosition = {
        transform: "translateX(-50%) translateY(-50%)",
        "&::before": {
          ...beforePosition,
          top: "100%",
          borderTopColor: background,
        },
      };
      break;
    case "right":
      placementPosition = {
        transform: "translateX(0) translateY(-50%)",
        "&::before": {
          ...beforePosition,
          left: tooltipArrowSize * -1,
          top: "50%",
          transform: "translateX(0) translateY(-50%)",
          borderRightColor: background,
        },
      };
      break;
    case "left":
      placementPosition = {
        transform: "translateX(-100%) translateY(-50%)",
        "&::before": {
          ...beforePosition,
          left: "auto",
          right: tooltipArrowSize * -2,
          top: "50%",
          transform: "translateX(0) translateY(-50%)",
          borderLeftColor: background,
        },
      };
      break;
    default:
      placementPosition = {
        transform: "translateX(-50%)",
        "&::before": {
          ...beforePosition,
          bottom: "100%",
          borderBottomColor: background,
        },
      };
  }

  return css(placementPosition);
};
