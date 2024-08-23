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
import get from "lodash/get";
import styled from "styled-components";

import FieldContainer from "../../global/FieldContainer";
import { themeColors } from "../../global/themeColors";
import { overridePropsParse } from "../../global/utils";
import CheckIcon from "../Icons/NewDesignIcons/CheckIcon";
import CircleHelpIcon from "../Icons/NewDesignIcons/CircleHelpIcon";
import InputLabel from "../InputLabel/InputLabel";
import { InputLabelProps } from "../InputLabel/InputLabel.types";
import Tooltip from "../Tooltip/Tooltip";
import { CheckboxProps } from "./Checkbox.types";

const CheckboxItem = styled.label<InputLabelProps>(({ sx, theme }) => ({
  position: "relative",
  "& input": {
    display: "none",
  },
  "& .checkbox": {
    position: "relative",
    display: "block",
    width: 16,
    height: 16,
    borderRadius: 4,
    border: `1px solid ${get(theme, "checkbox.checkBoxBorder", themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode)}`,
    backgroundColor: get(
      theme,
      "checkbox.checkBoxBackground",
      themeColors["Color/Neutral/Bg/colorBgFields"].lightMode,
    ),
    boxSizing: "border-box" as const,
    "&:hover:not(:disabled)": {
      borderColor: get(
        theme,
        "checkbox.checkBoxHoverBorder",
        themeColors["Color/Neutral/Border/colorBorderBold"].lightMode,
      ),
    },
    "& .icon-overlay": {
      display: "none",
    },
  },
  "input:checked ~ .checkbox": {
    borderColor: get(
      theme,
      "checkbox.checkBoxActiveBorder",
      themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
    ),
    backgroundColor: get(
      theme,
      "checkbox.checkBoxActiveColor",
      themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
    ),
    overflow: "hidden",
    "&:before": {
      content: "' '",
      position: "absolute",
      display: "block",
      width: 16,
      height: 16,
      borderRadius: 4,
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
    },
    "& .icon-overlay": {
      display: "block",
    },
    "&:hover": {
      borderColor: get(
        theme,
        "checkbox.checkBoxActiveHoverBorder",
        themeColors["Color/Brand/Primary/colorPrimaryHover"].lightMode,
      ),
      backgroundColor: get(
        theme,
        "checkbox.checkBoxActiveHoverBackground",
        themeColors["Color/Brand/Primary/colorPrimaryHover"].lightMode,
      ),
    },
  },
  "input:disabled": {
    "&  ~ .checkbox": {
      border: `1px solid ${get(theme, "checkbox.disabledBorder", themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode)}`,
      backgroundColor: get(
        theme,
        "checkbox.disabledBackground",
        themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
      ),
      "&:hover": {
        borderColor: get(
          theme,
          "checkbox.disabledBorder",
          themeColors["Color/Neutral/Border/colorBorderSubtle"].lightMode,
        ),
        backgroundColor: get(
          theme,
          "checkbox.disabledBackground",
          themeColors["Color/Neutral/Bg/colorBgDisabled"].lightMode,
        ),
      },
    },
  },
  "& .icon-overlay": {
    color: get(
      theme,
      "checkbox.checkBoxActiveCheckboxColor",
      themeColors["Color/Neutral/Text/colorTextLightSolid"].lightMode,
    ),
    position: "absolute",
    width: 14,
    height: 14,
    "&.disabled": {
      color: get(
        theme,
        "checkbox.disabledColor",
        themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
      ),
    },
  },
  ...overridePropsParse(sx, theme),
}));

const Checkbox: FC<
  CheckboxProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({
  tooltip,
  label,
  id,
  overrideLabelClasses,
  sx,
  className,
  helpTip,
  helpTipPlacement,
  checked,
  disabled,
  ...props
}) => {
  return (
    <FieldContainer
      className={`inputItem ${className ? className : ""}`}
      sx={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flexBasis: "initial",
        flexWrap: "nowrap",
      }}
    >
      <CheckboxItem sx={sx} onClick={(e) => e.stopPropagation()}>
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
      </CheckboxItem>
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth
          className={`${overrideLabelClasses || ""}`}
          sx={{
            marginLeft: 10,
          }}
          helpTip={helpTip}
          helpTipPlacement={helpTipPlacement}
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
    </FieldContainer>
  );
};

export default Checkbox;
