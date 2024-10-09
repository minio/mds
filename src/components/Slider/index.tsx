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

import React, { FC, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import CircleHelpIcon from "../../icons/CircleHelpIcon";
import InputHelper from "../InputHelper";
import InputLabel from "../InputLabel";
import Tooltip from "../Tooltip";
import {
  backBarStyles,
  inputBaseStyles,
  sliderContainerStyles,
} from "./Slider.styles";
import { SliderProps } from "./Slider.types";

const Slider: FC<SliderProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  id,
  tooltip = "",
  noLabelMinWidth,
  label = "",
  required,
  className,
  error,
  sx,
  min = 0,
  max = 100,
  value,
  displayValue,
  displayValueFunction,
  step = 1,
  disabled = false,
  ...props
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const inputBase = inputBaseStyles(theme);
  const backBar = backBarStyles(theme);

  return (
    <div
      css={[
        sliderContainerStyles,
        !!error && error !== ""
          ? css({ "& .inputLabel": { marginBottom: error ? 18 : 0 } })
          : {},
        overrideThemes,
      ]}
      className={`slider ${className}`}
    >
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth={noLabelMinWidth}
          className={"inputLabel"}
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
        <div
          css={css({
            display: "flex",
            alignItems: "center",
            gap: 8,
          })}
        >
          <div
            css={css({
              flexGrow: 1,
              position: "relative",
              height: 6,
              display: "flex",
              alignItems: "flex-start",
            })}
          >
            <input
              css={[inputBase]}
              id={id}
              type={"range"}
              className={"rangeSelector"}
              min={min}
              max={max}
              step={step}
              disabled={disabled}
              {...props}
            />
            <div css={[backBar]} className={`${disabled ? "disabled" : ""}`} />
          </div>
          {displayValue ? (
            <span className={"displayValue"}>
              {displayValueFunction ? displayValueFunction(value || 0) : value}
            </span>
          ) : null}
        </div>
        {error !== "" && <InputHelper state={"error"}>{error}</InputHelper>}
      </div>
    </div>
  );
};

export default Slider;
