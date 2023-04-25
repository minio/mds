// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

import React, { FC } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { IconButtonProps } from "./IconButton.types";

const CustomIconButton = styled.button<IconButtonProps>(({ theme, size }) => {
  let buttonSize: number | string = 30;

  if (size) {
    if (typeof size === "string") {
      switch (size) {
        case "small":
          buttonSize = 28;
          break;
        case "medium":
          buttonSize = 30;
          break;
        case "large":
          buttonSize = 48;
          break;
        default:
          buttonSize = size;
      }
    }
  }
  return {
    width: buttonSize,
    height: buttonSize,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "100%",
    border: 0,
    position: "relative",
    cursor: "pointer",
    transitionDuration: "0.2s",
    backgroundColor: get(theme, `iconButton.buttonBG`, "#000"),
    "& svg": {
      fill: get(theme, `iconButton.color`, "#000"),
      margin: "calc(25% - 2px)",
    },
    "&:hover:not(:disabled)": {
      backgroundColor: get(theme, `iconButton.hoverBG`, "#000"),
    },
    "&:active:not(:disabled)": {
      backgroundColor: get(theme, `iconButton.activeBG`, "#000"),
    },
    "&:disabled": {
      cursor: "not-allowed",
      backgroundColor: get(theme, `iconButton.disabledBG`, "#000"),
    },
  };
});

const IconButton: FC<IconButtonProps> = ({ children, ...props }) => {
  return <CustomIconButton {...props}>{children}</CustomIconButton>;
};

export default IconButton;
