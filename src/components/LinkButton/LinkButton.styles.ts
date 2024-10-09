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

import {
  LinkButtonStyle,
  LinkButtonThemeVariant,
  LinkButtonVariant,
} from "./LinkButton.types";

const linkButtonStyles = (
  theme: Theme,
  variant: LinkButtonVariant,
): LinkButtonStyle => {
  const variants: LinkButtonThemeVariant = {
    primary: {
      default: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      hover: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      active: theme.colors["Color/Brand/Primary/colorPrimaryText"],
      disabled: theme.colors["Color/Neutral/Text/colorTextDisabled"],
    },
    neutral: {
      default: theme.colors["Color/Brand/Neutral/colorPrimaryText"],
      hover: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
      active: theme.colors["Color/Brand/Neutral/colorPrimaryTextHover"],
      disabled: theme.colors["Color/Neutral/Text/colorTextDisabled"],
    },
    destructive: {
      default: theme.colors["Color/Brand/Error/colorPrimaryText"],
      hover: theme.colors["Color/Brand/Error/colorPrimaryTextHover"],
      active: theme.colors["Color/Brand/Error/colorPrimaryTextHover"],
      disabled: theme.colors["Color/Neutral/Text/colorTextDisabled"],
    },
  };

  return variants[variant];
};

export const linkButtonBase = (theme: Theme, variant: LinkButtonVariant) => {
  const buttonVariant = linkButtonStyles(theme, variant);

  return {
    cursor: "pointer",
    display: "inline-flex",
    backgroundColor: "transparent",
    border: 0,
    padding: 0,
    color: buttonVariant.default,
    textDecoration: "none",
    fontSize: "inherit",
    "&:disabled": {
      cursor: "not-allowed",
      textDecoration: "none",
      color: buttonVariant.disabled,
    },
    "&:hover:not(:disabled)": {
      textDecoration: "underline",
      color: buttonVariant.hover,
    },
    "&:active:not(:disabled)": {
      textDecoration: "underline",
      color: buttonVariant.active,
    },
  };
};
