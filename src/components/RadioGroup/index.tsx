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

import { FC, Fragment, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import FieldContainer from "../../global/FieldContainer";
import { overridePropsParse } from "../../global/utils";
import CircleHelpIcon from "../../icons/CircleHelpIcon";
import InputLabel from "../InputLabel";
import Tooltip from "../Tooltip";
import {
  optionsContainerStyles,
  radioButtonStyles,
  radioContainerStyles,
  radioMainStyles,
} from "./RadioGroup.styles";
import { RadioGroupProps } from "./RadioGroup.types";

const RadioGroup: FC<RadioGroupProps> = ({
  tooltip,
  label,
  id,
  sx,
  onChange,
  className,
  name,
  selectorOptions,
  currentValue,
  disableOptions = false,
  displayInColumn = false,
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const radioButton = radioButtonStyles(theme);
  const optionsContainer = optionsContainerStyles(theme, displayInColumn);

  return (
    <FieldContainer
      className={`inputItem ${className ? className : ""}`}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: displayInColumn ? "flex-start" : "center",
        flexBasis: "initial",
        flexWrap: "nowrap",
      }}
    >
      {label !== "" && (
        <InputLabel htmlFor={id}>
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
      <div css={optionsContainer}>
        {selectorOptions && (
          <Fragment>
            {selectorOptions.map((selector) => (
              <div css={radioMainStyles} key={`option-${id}-${selector.value}`}>
                <div css={radioContainerStyles}>
                  <label
                    css={[radioButton, overrideThemes]}
                    htmlFor={`option-${id}-${selector.value}`}
                  >
                    <input
                      type={"radio"}
                      name={name}
                      id={`option-${id}-${selector.value}`}
                      value={selector.value}
                      checked={currentValue === selector.value}
                      onChange={(event) => onChange(event, selector.extraValue)}
                      disabled={disableOptions || !!selector.disabled}
                    />
                    <span
                      className={`radio ${
                        currentValue === selector.value ? "checked" : ""
                      }`}
                    />
                  </label>
                  <label
                    htmlFor={`option-${id}-${selector.value}`}
                    className={`optionLabel ${
                      currentValue === selector.value ? "checked" : ""
                    } ${disableOptions || !!selector.disabled ? "disabled" : ""}`}
                  >
                    {selector.label}{" "}
                    {selector.subLabel && (
                      <span className={"subLabel"}>{selector.subLabel}</span>
                    )}
                  </label>
                </div>
                {selector.description && displayInColumn && (
                  <span className={"descriptionLabel"}>
                    {selector.description}
                  </span>
                )}
              </div>
            ))}
          </Fragment>
        )}
      </div>
    </FieldContainer>
  );
};

export default RadioGroup;
