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
import get from "lodash/get";

import { breakPoints } from "../../global/utils";

export const formLayoutContainerStyles = (
  theme: Theme,
  containerPadding: boolean,
  helpBox: boolean,
  withBorders: boolean,
) => {
  let extraBorders = {};

  if (withBorders) {
    extraBorders = {
      border: `${theme.colors["Color/Neutral/Border/colorBorderSubtle"]} 1px solid`,
      borderRadius: 16,
      boxShadow: get(theme, "box.shadow", "none"),
      backgroundColor: theme.colors["Color/Neutral/Bg/colorBgContainer"],
    };
  }

  return css({
    ...extraBorders,
    display: "grid",
    padding: containerPadding ? 25 : 0,
    gap: 25,
    gridTemplateColumns: "1fr",
    "& .inputItem:not(:last-of-type)": {
      marginBottom: 20,
    },
    [`@media (min-width: ${breakPoints.md}px)`]: {
      gridTemplateColumns: helpBox ? "2fr 1.2fr" : "1fr",
    },
  });
};
