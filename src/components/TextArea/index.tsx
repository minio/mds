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

import React, { FC, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import CircleHelpIcon from "../../icons/CircleHelpIcon";
import {
  inputBaseStyles,
  inputContainerStyles,
} from "../InputBox/InputBox.styles";
import InputHelper from "../InputHelper";
import InputLabel from "../InputLabel";
import Tooltip from "../Tooltip";
import { TextAreaProps } from "./TextArea.types";

const TextArea: FC<TextAreaProps> = ({
  id,
  tooltip = "",
  index,
  noLabelMinWidth,
  label = "",
  required,
  className,
  helper,
  state,
  orientation = "horizontal",
  sx,
  ...props
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const baseStyles = inputBaseStyles(theme);
  const containerStyles = inputContainerStyles(theme);

  return (
    <div
      css={[
        containerStyles,
        css({ flexDirection: orientation === "vertical" ? "column" : "row" }),
        overrideThemes,
      ]}
      className={`inputItem ${className}`}
    >
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth={noLabelMinWidth}
          className={`inputLabel ${orientation === "vertical" ? "verticalMode" : ""}`}
          orientation={orientation}
        >
          {label}
          {required ? "*" : ""}
          {tooltip !== "" && (
            <div className={"tooltipContainer"}>
              <Tooltip tooltip={tooltip} placement="top">
                <div className={tooltip}>
                  <CircleHelpIcon />
                </div>
              </Tooltip>
            </div>
          )}
        </InputLabel>
      )}

      <div className={"textBoxContainer"}>
        <textarea
          css={[baseStyles, { minHeight: 92 }]}
          id={id}
          className={`Base_Normal inputRebase ${state}State`}
          data-index={index}
          rows={5}
          {...props}
        />
        {helper !== undefined && (
          <InputHelper state={state}>{helper}</InputHelper>
        )}
      </div>
    </div>
  );
};

export default TextArea;
