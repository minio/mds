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

import {
  ButtonStatesProps,
  ButtonThemeProps,
  ButtonVariant,
} from "./Button.types";

export const buttonVariant = (
  theme: Theme,
  variantName: ButtonVariant,
): ButtonStatesProps => {
  const buttonVariants: ButtonThemeProps = {
    primary: {
      enabled: {
        border: theme.colors["Color/Brand/Primary/colorPrimaryBorder"],
        text: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        background: `linear-gradient(180deg, ${theme.colors["Color/Base/Royal/5"]} 0%, ${theme.colors["Color/Base/Royal/6"]} 100%)`,
        iconColor: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        shadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset`,
      },
      disabled: {
        border: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        text: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        background: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        iconColor: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        shadow: "none",
      },
      hover: {
        border: theme.colors["Color/Brand/Primary/colorPrimaryBorder"],
        text: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        background: `linear-gradient(180deg, ${theme.colors["Color/Base/Royal/6"]} 0%, ${theme.colors["Color/Base/Royal/7"]} 100%)`,
        iconColor: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        shadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset`,
      },
      pressed: {
        border: theme.colors["Color/Brand/Primary/colorPrimaryBorder"],
        text: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        background: `linear-gradient(180deg, ${theme.colors["Color/Base/Royal/6"]} 0%, ${theme.colors["Color/Base/Royal/7"]} 100%)`,
        iconColor: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        shadow: "none",
      },
    },
    secondary: {
      enabled: {
        border: theme.colors["Color/Neutral/Border/colorBorderSubtle"],
        text: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        background: theme.colors["Color/Neutral/Bg/colorBgContainer"],
        iconColor: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        shadow: "none",
      },
      disabled: {
        border: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        text: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        background: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        iconColor: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        shadow: "none",
      },
      hover: {
        border: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        background: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        shadow: "none",
      },
      pressed: {
        border: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        background: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        shadow: "none",
      },
    },
    destructive: {
      enabled: {
        border: theme.colors["Color/Brand/Error/colorPrimaryBorder"],
        text: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        background: `linear-gradient(180deg, ${theme.colors["Color/Base/Sunset/5"]} 0%, ${theme.colors["Color/Base/Sunset/6"]} 100%)`,
        iconColor: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        shadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset`,
      },
      disabled: {
        border: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        text: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        background: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        iconColor: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        shadow: "none",
      },
      hover: {
        border: theme.colors["Color/Brand/Error/colorPrimaryBorder"],
        text: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        background: `linear-gradient(180deg, ${theme.colors["Color/Base/Sunset/6"]} 0%, ${theme.colors["Color/Base/Sunset/7"]} 100%)`,
        iconColor: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        shadow: `0px 1px 0px 0px rgba(255, 255, 255, 0.25) inset`,
      },
      pressed: {
        border: theme.colors["Color/Brand/Error/colorPrimaryBorder"],
        text: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        background: `linear-gradient(180deg, ${theme.colors["Color/Base/Sunset/6"]} 0%, ${theme.colors["Color/Base/Sunset/7"]} 100%)`,
        iconColor: theme.colors["Color/Neutral/Text/colorTextLightSolid"],
        shadow: "none",
      },
    },
    "primary-lighter": {
      enabled: {
        border: theme.colors["Color/Brand/Primary/colorPrimaryBg"],
        text: theme.colors["Color/Brand/Primary/colorPrimaryText"],
        background: theme.colors["Color/Brand/Primary/colorPrimaryBg"],
        iconColor: theme.colors["Color/Brand/Primary/colorPrimaryText"],
        shadow: "none",
      },
      disabled: {
        border: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        text: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        background: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        iconColor: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        shadow: "none",
      },
      hover: {
        border: theme.colors["Color/Brand/Primary/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Primary/colorPrimaryTextHover"],
        background: theme.colors["Color/Brand/Primary/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Primary/colorPrimaryTextHover"],
        shadow: "none",
      },
      pressed: {
        border: theme.colors["Color/Brand/Primary/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Primary/colorPrimaryTextHover"],
        background: theme.colors["Color/Brand/Primary/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Primary/colorPrimaryTextHover"],
        shadow: "none",
      },
    },
    "secondary-lighter": {
      enabled: {
        border: theme.colors["Color/Brand/Neutral/colorPrimaryBg"],
        text: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        background: theme.colors["Color/Brand/Neutral/colorPrimaryBg"],
        iconColor: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        shadow: "none",
      },
      disabled: {
        border: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        text: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        background: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        iconColor: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        shadow: "none",
      },
      hover: {
        border: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
        background: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
        shadow: "none",
      },
      pressed: {
        border: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
        background: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
        shadow: "none",
      },
    },
    "destructive-lighter": {
      enabled: {
        border: theme.colors["Color/Brand/Error/colorPrimaryBg"],
        text: theme.colors["Color/Brand/Error/colorPrimaryText"],
        background: theme.colors["Color/Brand/Error/colorPrimaryBg"],
        iconColor: theme.colors["Color/Brand/Error/colorPrimaryText"],
        shadow: "none",
      },
      disabled: {
        border: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        text: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        background: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        iconColor: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        shadow: "none",
      },
      hover: {
        border: theme.colors["Color/Brand/Error/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Error/colorPrimaryTextHover"],
        background: theme.colors["Color/Brand/Error/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Error/colorPrimaryTextHover"],
        shadow: "none",
      },
      pressed: {
        border: theme.colors["Color/Brand/Error/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Error/colorPrimaryTextHover"],
        background: theme.colors["Color/Brand/Error/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Error/colorPrimaryTextHover"],
        shadow: "none",
      },
    },
    "primary-ghost": {
      enabled: {
        border: "transparent",
        text: theme.colors["Color/Brand/Primary/colorPrimaryText"],
        background: "transparent",
        iconColor: theme.colors["Color/Brand/Primary/colorPrimaryText"],
        shadow: "none",
      },
      disabled: {
        border: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        text: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        background: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        iconColor: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        shadow: "none",
      },
      hover: {
        border: theme.colors["Color/Brand/Primary/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Primary/colorPrimaryTextHover"],
        background: theme.colors["Color/Brand/Primary/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Primary/colorPrimaryTextHover"],
        shadow: "none",
      },
      pressed: {
        border: theme.colors["Color/Brand/Primary/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Primary/colorPrimaryTextHover"],
        background: theme.colors["Color/Brand/Primary/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Primary/colorPrimaryTextHover"],
        shadow: "none",
      },
    },
    "secondary-ghost": {
      enabled: {
        border: "transparent",
        text: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        background: "transparent",
        iconColor: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
        shadow: "none",
      },
      disabled: {
        border: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        text: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        background: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        iconColor: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        shadow: "none",
      },
      hover: {
        border: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
        background: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
        shadow: "none",
      },
      pressed: {
        border: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
        background: theme.colors["Color/Brand/Neutral/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
        shadow: "none",
      },
    },
    "destructive-ghost": {
      enabled: {
        border: "transparent",
        text: theme.colors["Color/Brand/Error/colorPrimaryText"],
        background: "transparent",
        iconColor: theme.colors["Color/Brand/Error/colorPrimaryText"],
        shadow: "none",
      },
      disabled: {
        border: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        text: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        background: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
        iconColor: theme.colors["Color/Neutral/Text/colorTextDisabled"],
        shadow: "none",
      },
      hover: {
        border: theme.colors["Color/Brand/Error/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Error/colorPrimaryTextHover"],
        background: theme.colors["Color/Brand/Error/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Error/colorPrimaryTextHover"],
        shadow: "none",
      },
      pressed: {
        border: theme.colors["Color/Brand/Error/colorPrimaryBgHover"],
        text: theme.colors["Color/Brand/Error/colorPrimaryTextHover"],
        background: theme.colors["Color/Brand/Error/colorPrimaryBgHover"],
        iconColor: theme.colors["Color/Brand/Error/colorPrimaryTextHover"],
        shadow: "none",
      },
    },
  };

  return buttonVariants[variantName];
};

export const buttonCSS = (
  theme: Theme,
  variant: ButtonVariant,
  iconOnly?: boolean,
) => {
  const btnStyles = buttonVariant(theme, variant);

  return css({
    borderRadius: 4,
    cursor: "pointer",
    fontFamily: "'Geist', sans-serif",
    fontWeight: "normal",
    fontSize: 14,
    lineHeight: "20px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    margin: 0,
    transition: "all 0.2s linear",
    background: btnStyles.enabled.background,
    borderColor: btnStyles.enabled.border,
    borderWidth: 1,
    borderStyle: "solid",
    color: btnStyles.enabled.text,
    boxShadow: btnStyles.enabled.shadow,
    "& .buttonIcon": {
      display: "flex",
      height: 16,
      width: 16,
      minWidth: 16,
      minHeight: 16,
      justifyContent: "center",
      alignItems: "center",
      "& > svg": {
        fill: btnStyles.enabled.text,
        color: btnStyles.enabled.text,
        width: 16,
        height: 16,
      },
    },
    "&:disabled": {
      cursor: "not-allowed",
      background: btnStyles.disabled.background,
      borderColor: btnStyles.disabled.border,
      borderWeight: 1,
      borderStyle: "solid",
      color: btnStyles.disabled.text,
      boxShadow: btnStyles.disabled.shadow,
      "& .buttonIcon > svg": {
        fill: btnStyles.disabled.text,
        color: btnStyles.disabled.text,
      },
    },
    "&:hover:not(:disabled),&.hover:not(:disabled)": {
      background:
        variant.endsWith("-ghost") && !iconOnly
          ? "transparent"
          : btnStyles.hover.background,
      borderColor:
        variant.endsWith("-ghost") && !iconOnly
          ? "transparent"
          : btnStyles.hover.border,
      color: btnStyles.hover.text,
      boxShadow: btnStyles.hover.shadow,
      textDecoration: variant.endsWith("-ghost") ? "underline" : "none",
      "& .buttonIcon > svg": {
        fill: btnStyles.hover.text,
        color: btnStyles.hover.text,
      },
    },
    "&:active:not(:disabled),&.active:not(:disabled)": {
      background:
        variant.endsWith("-ghost") && !iconOnly
          ? "transparent"
          : btnStyles.pressed.background,
      borderColor:
        variant.endsWith("-ghost") && !iconOnly
          ? "transparent"
          : btnStyles.pressed.border,
      textDecoration: variant.endsWith("-ghost") ? "underline" : "none",
      color: btnStyles.pressed.text,
      boxShadow: btnStyles.pressed.shadow,
      "& .buttonIcon > svg": {
        fill: btnStyles.pressed.text,
        color: btnStyles.pressed.text,
      },
    },
  });
};
