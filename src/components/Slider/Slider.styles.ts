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
import { CSSObject } from "@emotion/serialize";

export const inputBaseStyles = (theme: Theme) => {
  const thumb: CSSObject = {
    "-webkit-appearance": "none",
    appearance: "none",
    backgroundColor: theme.colors["Color/Brand/Primary/colorPrimary"],
    height: 15,
    width: 15,
    borderRadius: "100%",
  };

  return css({
    '&[type="range"]': {
      width: "100%",
      height: 6,
      zIndex: 100,
      margin: 0,
      "-webkit-appearance": "none",
      appearance: "none",
      background: "transparent",
      cursor: "pointer",
      "&:focus": {
        outline: "none",
      },
      "&::-webkit-slider-thumb": {
        ...thumb,
      },
      "&::-moz-range-thumb": {
        ...thumb,
        border: "none",
      },
    },
    '&[type="range"]:disabled': {
      cursor: "not-allowed",
      "&::-webkit-slider-thumb": {
        backgroundColor: theme.colors["Color/Neutral/Icon/colorIconDisabled"],
      },
      "&::-moz-range-thumb": {
        backgroundColor: theme.colors["Color/Neutral/Icon/colorIconDisabled"],
      },
    },
  });
};

export const sliderContainerStyles = css({
  display: "flex",
  alignItems: "center",
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
  "& .inputLabel": {
    marginBottom: 0,
  },
  "& .displayValue": {
    fontSize: 12,
    fontWeight: "bold",
  },
});

export const backBarStyles = (theme: Theme) =>
  css({
    position: "absolute",
    width: "100%",
    height: 6,
    top: "50%",
    transform: "translateY(-50%)",
    backgroundColor: theme.colors["Color/Brand/Neutral/colorPrimaryBg"],
    borderRadius: 15,
    display: "flex",
    alignItems: "center",
    zIndex: 90,
    "&.disabled": {
      backgroundColor: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
    },
  });
