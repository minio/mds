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

export const toggleIndicatorStyles = (theme: Theme) =>
  css({
    fontSize: 12,
    color: theme.colors["Color/Neutral/Text/colorTextHeading"],
    margin: "0 8px 0 10px",
    fontWeight: "normal",
  });

export const toggleItemStyles = (theme: Theme) =>
  css({
    width: 28,
    height: 16,
    position: "relative",
    boxSizing: "border-box",
    marginTop: 2,
    "& .ToggleRail": {
      boxSizing: "border-box",
      position: "relative",
      display: "block",
      width: 28,
      height: 16,
      borderRadius: 20,
      padding: 2,
    },

    "& input": {
      display: "none",
      "& ~.ToggleRail": {
        backgroundColor: theme.colors["Color/Base/Shark/0"],
        border: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
        "&:hover": {
          borderColor: theme.colors["Color/Neutral/Border/colorBorderBold"],
        },
        "&:before": {
          content: "' '",
          position: "absolute",
          display: "block",
          width: 10,
          height: 10,
          top: 2,
          left: 2,
          borderRadius: "100%",
          backgroundColor:
            theme.colors["Color/Neutral/Text/colorTextLightSolid"],
          boxShadow: theme.shadows["toggleShadow"],
          transitionDuration: "0.1s",
        },
      },
      "&:checked ~.ToggleRail": {
        backgroundColor: theme.colors["Color/Brand/Primary/colorPrimary"],
        borderColor: theme.colors["Color/Brand/Primary/colorPrimary"],
        "&:hover": {
          borderColor: theme.colors["Color/Brand/Primary/colorPrimaryHover"],
          backgroundColor:
            theme.colors["Color/Brand/Primary/colorPrimaryHover"],
        },
        "&:before": {
          left: "calc(100% - 12px)",
        },
      },
      "&:disabled:checked ~.ToggleRail": {
        borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
        backgroundColor: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
      },
      "&:disabled ~.ToggleRail": {
        cursor: "not-allowed",
        borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
        backgroundColor: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        "&:before": {
          boxShadow: theme.shadows["toggleShadow-Disabled"],
        },
      },
    },
  });

export const toggleContainerStyles = css({
  display: "flex",
  alignItems: "center",
});

export const toggleMainContainerStyles = css({
  "& .inputBase": {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexBasis: "initial",
    flexWrap: "nowrap",
    gap: 16,
  },
  "& .actionDescription": {
    marginTop: 4,
  },
});

export const toggleInverseStyles = css({
  "& .inputBase": {
    flexFlow: "row-reverse",
    justifyContent: "space-between",
  },
});
