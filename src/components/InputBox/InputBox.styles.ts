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

import { paddingSizeVariants } from "../../global/utils";

export const inputBaseStyles = (theme: Theme) =>
  css({
    lineHeight: "20px",
    height: 38,
    boxSizing: "border-box",
    width: "100%",
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 8,
    color: theme.colors["Color/Neutral/Text/colorTextHeading"],
    fontSize: 14,
    fontWeight: 400,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 4,
    borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
    outline: "none",
    transitionDuration: "0.1s",
    backgroundColor: theme.colors["Color/Neutral/Bg/colorBgFields"],
    letterSpacing: "0.16px",
    "&.filled": {
      borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
    },
    "&.errorState": {
      borderColor: theme.colors["Color/Brand/Error/colorPrimaryBorder"],
    },
    "&.warningState": {
      borderColor: theme.colors["Color/Brand/Warning/colorPrimaryBorder"],
    },
    "&.successState": {
      borderColor: theme.colors["Color/Brand/Success/colorPrimaryBorder"],
    },
    "&::placeholder": {
      color: theme.colors["Color/Neutral/Text/colorTextPlaceholder"],
      opacity: 1,
      fontWeight: 400,
      letterSpacing: "0.16px",
    },
    "&:hover": {
      borderColor: theme.colors["Color/Neutral/Border/colorBorderBold"],
    },
    "&:focus": {
      borderColor: theme.colors["Color/Brand/Primary/colorPrimaryBorder"],
      boxShadow: "0px 0px 0px 2px rgba(43, 100, 229, 0.30)",
    },
    "&:read-only": {
      color: theme.colors["Color/Neutral/Text/colorTextHeading"],
      borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
      backgroundColor: theme.colors["Color/Neutral/Bg/colorBgShell"],
      "&:placeholder": {
        color: theme.colors["Color/Base/Shark/2"],
      },
    },
    "&::-webkit-outer-spin-button, &::-webkit-inner-spin-button": {
      WebkitAppearance: "none",
      margin: 0,
    },
    "&[type=number]": {
      "-moz-appearance": "textfield",
    },
    "&:disabled": {
      cursor: "not-allowed",
      userSelect: "none",
      color: theme.colors["Color/Neutral/Text/colorTextPlaceholder"],
      borderColor: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
      backgroundColor: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
      "&:placeholder": {
        color: theme.colors["Color/Neutral/Text/colorTextPlaceholder"],
      },
    },
  });

export const inputBaseSizeSmall = css({
  height: 28,
  paddingTop: 4,
  paddingBottom: 4,
});

export const inputContainerStyles = (theme: Theme) =>
  css({
    display: "flex",
    flexGrow: 1,
    width: "100%",
    "& .textBoxContainer": {
      width: "100%",
      flexGrow: 1,
      position: "relative",
      minWidth: 160,
    },
    "& .tooltipContainer": {
      marginLeft: 5,
      display: "flex",
      alignItems: "center",
      "& .min-icon": {
        width: 13,
      },
    },
    "& .overlayAction": {
      position: "absolute",
      right: 1,
      top: 1,
      boxSizing: "border-box",
      "& button": {
        padding: 6,
        border: 0,
        borderRadius: 0,
        borderTopRightRadius: 3,
        borderBottomRightRadius: 3,
        borderLeft: `1px solid ${theme.colors["Color/Neutral/Border/colorBorderSubtle"]}`,
        boxShadow: "none",
        height: 36,
        boxSizing: "border-box",
        fontWeight: "400",
        "& .min-icon": {
          width: 16,
          height: 16,
          color: theme.colors["Color/Neutral/Text/colorText"],
          fill: theme.colors["Color/Neutral/Text/colorText"],
        },
      },
    },
    "& .startOverlayIcon": {
      position: "absolute",
      left: 8,
      top: 10,
      "& svg": {
        width: 16,
        height: 16,
        color: theme.colors["Color/Neutral/Text/colorText"],
      },
    },
    "& .accessoryIcon": {
      position: "absolute",
      right: 8,
      top: "50%",
      transform: "translateY(-50%)",
      width: 16,
      height: 16,
      "&.errorState": {
        color: theme.colors["Color/Brand/Error/colorPrimaryText"],
      },
      "&.warningState": {
        color: theme.colors["Color/Brand/Warning/colorPrimaryText"],
      },
      "&.successState": {
        color: theme.colors["Color/Brand/Success/colorPrimaryText"],
      },
    },
    "& .inputLabel.verticalMode": {
      fontSize: 14,
      fontStyle: "normal",
      fontWeight: 400,
      lineHeight: "20px",
      letterSpacing: "0.16px",
      color: theme.colors["Color/Neutral/Text/colorTextLabel"],
      marginBottom: paddingSizeVariants.sizeXXS,
    },
    "& .textdivContainer": {
      width: "100%",
    },
  });

export const containerSizeSmall = css({
  "& .overlayAction": {
    "& button": {
      height: 26,
    },
  },
  "& .startOverlayIcon": {
    top: 6,
  },
});

export const containerOverlayIcon = css({
  "& input": {
    paddingRight: 37,
  },
  "& .accessoryIcon": {
    right: 37,
  },
});
