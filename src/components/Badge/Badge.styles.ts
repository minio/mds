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
import {
  BadgeColors,
  BadgeElementThemeProps,
  BadgeIcons,
  BadgeSizes,
  BadgeStyles,
  BadgeThemeProps,
} from "./Badge.types";

export const badgeVariant = (
  theme: Theme,
  variant: BadgeColors,
): BadgeElementThemeProps => {
  const themeVariants: BadgeThemeProps = {
    none: {
      minimalColor: theme.colors["Color/Base/Shark/6"],
      subtleBG: theme.colors["Color/Base/Shark/1"],
      subtleLabel: theme.colors["Color/Base/Shark/6"],
      boldBG: theme.colors["Color/Base/Shark/6"],
      boldLabel: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
    },
    info: {
      minimalColor: theme.colors["Color/Base/Royal/6"],
      subtleBG: theme.colors["Color/Base/Royal/1"],
      subtleLabel: theme.colors["Color/Base/Royal/6"],
      boldBG: theme.colors["Color/Base/Royal/6"],
      boldLabel: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
    },
    success: {
      minimalColor: theme.colors["Color/Base/Java/6"],
      subtleBG: theme.colors["Color/Base/Java/1"],
      subtleLabel: theme.colors["Color/Base/Java/6"],
      boldBG: theme.colors["Color/Base/Java/6"],
      boldLabel: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
    },
    warning: {
      minimalColor: theme.colors["Color/Base/Orange/6"],
      subtleBG: theme.colors["Color/Base/Orange/1"],
      subtleLabel: theme.colors["Color/Base/Orange/6"],
      boldBG: theme.colors["Color/Base/Orange/6"],
      boldLabel: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
    },
    danger: {
      minimalColor: theme.colors["Color/Base/Sunset/6"],
      subtleBG: theme.colors["Color/Base/Sunset/1"],
      subtleLabel: theme.colors["Color/Base/Sunset/6"],
      boldBG: theme.colors["Color/Base/Sunset/6"],
      boldLabel: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
    },
    purple: {
      minimalColor: theme.colors["Color/Base/Purple/6"],
      subtleBG: theme.colors["Color/Base/Purple/1"],
      subtleLabel: theme.colors["Color/Base/Purple/6"],
      boldBG: theme.colors["Color/Base/Purple/6"],
      boldLabel: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
    },
    rose: {
      minimalColor: theme.colors["Color/Base/Rose/6"],
      subtleBG: theme.colors["Color/Base/Rose/1"],
      subtleLabel: theme.colors["Color/Base/Rose/6"],
      boldBG: theme.colors["Color/Base/Rose/6"],
      boldLabel: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
    },
    scooter: {
      minimalColor: theme.colors["Color/Base/Scooter/6"],
      subtleBG: theme.colors["Color/Base/Scooter/1"],
      subtleLabel: theme.colors["Color/Base/Scooter/6"],
      boldBG: theme.colors["Color/Base/Scooter/6"],
      boldLabel: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
    },
    disabled: {
      minimalColor: theme.colors["Color/Neutral/Text/colorTextDisabled"],
      subtleBG: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
      subtleLabel: theme.colors["Color/Neutral/Text/colorTextDisabled"],
      boldBG: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
      boldLabel: theme.colors["Color/Neutral/Text/colorTextDisabled"],
    },
  };

  return themeVariants[variant];
};

export const badgeCSS = (
  theme: Theme,
  color: BadgeColors,
  badgeStyle: BadgeStyles,
  size: BadgeSizes,
  icon: BadgeIcons,
  isNumber?: boolean,
) => {
  const themeVariant = badgeVariant(theme, color);

  let textColor =
    badgeStyle === "bold" ? themeVariant.boldLabel : themeVariant.subtleLabel;
  let bgColor =
    badgeStyle === "bold" ? themeVariant.boldBG : themeVariant.subtleBG;
  let borderColor =
    badgeStyle === "bold" ? themeVariant.boldBG : themeVariant.subtleBG;

  if (icon === "dot" || badgeStyle === "minimal") {
    bgColor = "transparent";
    textColor = themeVariant.minimalColor;
    borderColor = icon === "dot" ? "transparent" : themeVariant.minimalColor;
  }

  let padding =
    size === "small"
      ? `0 6px`
      : `${theme.paddingSizes.sizeXXS}px ${theme.paddingSizes.sizeXS}px`;

  if (size === "small" && isNumber) {
    padding = "0";
  }

  return css({
    boxSizing: "border-box",
    position: "relative",
    margin: 0,
    userSelect: "none",
    appearance: "none",
    maxWidth: "100%",
    fontSize: 12,
    fontWeight: 600,
    lineHeight: "16px",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: size === "small" ? 16 : 24,
    color: textColor,
    backgroundColor: bgColor,
    borderRadius: 16,
    whiteSpace: "nowrap",
    cursor: "default",
    outline: 0,
    textDecoration: "none",
    border: `${borderColor} 1px solid`,
    padding,
    verticalAlign: "middle",
    gap: paddingSizeVariants.sizeXXS,
    minWidth: size === "small" ? 16 : 20,
    "& svg": {
      width: icon === "dot" ? 8 : 15,
      height: icon === "dot" ? 8 : 15,
      color: textColor,
      fill: textColor,
    },
    "& span.dot": {
      display: "inline-block",
      width: 8,
      height: 8,
      backgroundColor: textColor,
      borderRadius: "100%",
    },
  });
};
