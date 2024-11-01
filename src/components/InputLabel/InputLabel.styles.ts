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

import { CSSProperties } from "react";
import { Theme } from "@emotion/react";

import { InputLabelOrientation, InputLabelSizeMode } from "./InputLabel.types";

export const customLabelStyles = (
  theme: Theme,
  inputSizeMode: InputLabelSizeMode,
  orientation: InputLabelOrientation,
) => {
  let lineHeightVariant: CSSProperties["height"] = "initial";

  if (orientation === "horizontal" && inputSizeMode) {
    switch (inputSizeMode) {
      case "small":
        lineHeightVariant = 1;
        break;
      case "large":
        lineHeightVariant = 1.4;
        break;
    }
  }

  return {
    fontFamily: "'Geist', sans-serif",
    color: theme.colors["Color/Neutral/Text/colorTextLabel"],
    textAlign: "left" as const,
    alignItems: "flex-start" as const,
    display: "flex",
    userSelect: "none",
    whiteSpace: "nowrap",
    "& > span": {
      display: "flex",
      alignItems: "center",
      lineHeight: lineHeightVariant,
      width: 190,
      paddingRight: 8,
      textWrap: "wrap",
      "&.noMinWidthLabel": {
        minWidth: "initial",
        width: "initial",
      },
    },
  };
};
