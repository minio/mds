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
import CheckIcon from "../../icons/CheckIcon";
import CircleHelpIcon from "../../icons/CircleHelpIcon";
import InputHelper from "../InputHelper";
import InputLabel from "../InputLabel";
import Tooltip from "../Tooltip";
import { checkboxStyles } from "./Checkbox.styles";
import { CheckboxProps } from "./Checkbox.types";

const Checkbox: FC<
  CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  tooltip,
  label,
  id,
  overrideLabelClasses,
  sx,
  className,
  checked,
  helper,
  disabled,
  noLabelMinWidth,
  ...props
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const checkboxTheme = checkboxStyles(theme);

  return (
    <FieldContainer
      className={`inputItem ${className ? className : ""}`}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexBasis: "initial",
        flexWrap: "nowrap",
        "& .checkArea": {
          display: "flex",
          gap: 16,
          alignItems: "center",
          cursor: "pointer",
        },
      }}
    >
      {label && label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth={noLabelMinWidth}
          className={`${overrideLabelClasses || ""}`}
          sx={{
            alignSelf: "flex-start",
          }}
        >
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
      <label
        css={[checkboxTheme, overrideThemes]}
        onClick={(e) => e.stopPropagation()}
      >
        <input
          type={"checkbox"}
          id={id}
          checked={checked}
          disabled={disabled}
          {...props}
        />
        <span className={"checkbox"}>
          <CheckIcon className={`${disabled ? "disabled" : ""} icon-overlay`} />
        </span>
        {helper !== undefined && <InputHelper>{helper}</InputHelper>}
      </label>
    </FieldContainer>
  );
};

export default Checkbox;
