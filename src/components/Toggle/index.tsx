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

import FieldContainer from "../../global/FieldContainer";
import { overridePropsParse } from "../../global/utils";
import CircleHelpIcon from "../../icons/CircleHelpIcon";
import InputHelper from "../InputHelper";
import InputLabel from "../InputLabel";
import Tooltip from "../Tooltip";
import {
  toggleContainerStyles,
  toggleIndicatorStyles,
  toggleInverseStyles,
  toggleItemStyles,
  toggleMainContainerStyles,
} from "./Toggle.styles";
import { ToggleProps } from "./Toggle.types";

const Toggle: FC<ToggleProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  tooltip,
  label,
  id,
  sx,
  className,
  toggleOnly,
  indicatorLabels,
  labelsOn = false,
  helper,
  checked,
  inverse = false,
  ...props
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const toogleItem = toggleItemStyles(theme);
  const toggleIndicator = toggleIndicatorStyles(theme);

  const toggleComponent = (
    <div css={[toggleContainerStyles]}>
      {!toggleOnly && labelsOn && (
        <span css={toggleIndicator}>
          {indicatorLabels && indicatorLabels.length > 1
            ? indicatorLabels[1]
            : "OFF"}
        </span>
      )}
      <label css={[toogleItem]} id={`${id}-Toggle`}>
        <input type={"checkbox"} id={id} checked={checked} {...props} />
        <span className={"ToggleRail"} />
      </label>
      {!toggleOnly && labelsOn && (
        <span css={toggleIndicator}>
          {indicatorLabels ? indicatorLabels[0] : "ON"}
        </span>
      )}
    </div>
  );

  if (toggleOnly) {
    return toggleComponent;
  }

  return (
    <div
      css={[
        toggleMainContainerStyles,
        inverse ? toggleInverseStyles : {},
        overrideThemes,
      ]}
      className={`inputItem ${className ? className : ""}`}
    >
      <FieldContainer className={"inputBase"}>
        {toggleComponent}
        <div>
          {label !== "" && (
            <InputLabel htmlFor={id} noMinWidth>
              {label}
              {tooltip && tooltip !== "" && (
                <div className={"tooltipContainer"}>
                  <Tooltip tooltip={tooltip} placement="top">
                    <CircleHelpIcon />
                  </Tooltip>
                </div>
              )}
            </InputLabel>
          )}
          {helper !== undefined && <InputHelper>{helper}</InputHelper>}
        </div>
      </FieldContainer>
    </div>
  );
};

export default Toggle;
