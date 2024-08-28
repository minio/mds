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

import React, { CSSProperties, FC } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { lightV2 } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import HelpTip from "../HelpTip/HelpTip";
import { InputLabelProps } from "./InputLabel.types";

const CustomLabel = styled.label<InputLabelProps>(
  ({ theme, inputSizeMode, orientation, sx }) => {
    let lineHeightVariant: CSSProperties["height"] = "initial";

    if (orientation === "horizontal" && inputSizeMode) {
      switch (inputSizeMode) {
        case "small":
          lineHeightVariant = "28px";
          break;
        case "large":
          lineHeightVariant = "38px";
          break;
      }
    }

    return {
      color: get(theme, "commonInput.labelColor", lightV2.fontColor),
      textAlign: "left" as const,
      alignItems: "flex-start" as const,
      display: "flex",
      userSelect: "none",
      whiteSpace: "nowrap",
      "& > span": {
        display: "flex",
        alignItems: "center",
        lineHeight: lineHeightVariant,
        minWidth: 180,
        "&.noMinWidthLabel": {
          minWidth: "initial",
        },
      },
      ...overridePropsParse(sx, theme),
    };
  },
);

const InputLabel: FC<InputLabelProps> = ({
  children,
  sx,
  noMinWidth,
  htmlFor,
  helpTip,
  helpTipPlacement,
  orientation = "horizontal",
  inputSizeMode,
  ...props
}) => {
  return (
    <CustomLabel
      sx={sx}
      htmlFor={htmlFor}
      inputSizeMode={inputSizeMode}
      orientation={orientation}
      {...props}
    >
      <span className={`Base_Normal ${noMinWidth ? "noMinWidthLabel" : ""}`}>
        {helpTip ? (
          <HelpTip placement={helpTipPlacement} content={helpTip}>
            {children}
          </HelpTip>
        ) : (
          children
        )}
      </span>
    </CustomLabel>
  );
};

export default InputLabel;
