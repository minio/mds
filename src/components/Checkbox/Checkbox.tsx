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

import React, { FC, Fragment } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { CheckboxProps } from "./Checkbox.types";
import InputLabel from "../InputLabel/InputLabel";
import { InputLabelProps } from "../InputLabel/InputLabel.types";
import FieldContainer from "../../global/FieldContainer";
import Tooltip from "../Tooltip/Tooltip";
import HelpIcon from "../Icons/HelpIcon";
import { overridePropsParse } from "../../global/utils";
import { themeColors } from "../../global/themeColors";
import CheckIcon from "../Icons/NewDesignIcons/CheckIcon";

const CheckboxItem = styled.label<InputLabelProps>(({ sx, theme }) => ({
  position: "relative",
  "& input": {
    display: "none",
  },
  "& .checkbox": {
    position: "relative",
    display: "block",
    width: 18,
    height: 18,
    borderRadius: 4,
    border: `1px solid ${get(theme, "checkbox.checkBoxBorder", themeColors["Color/Brand/Neutral/colorPrimaryBorder"].lightMode)}`,
    boxSizing: "border-box" as const,
    "&:hover": {
      borderColor: get(
        theme,
        "checkbox.checkBoxHoverBorder",
        themeColors["Color/Brand/Primary/colorPrimaryBorder"].lightMode,
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
      themeColors["Color/Brand/Primary/colorPrimaryBorder"].lightMode,
    ),
    "&:before": {
      content: "' '",
      position: "absolute",
      display: "block",
      width: 18,
      height: 18,
      backgroundColor: get(
        theme,
        "checkbox.checkBoxActiveColor",
        themeColors["Color/Brand/Primary/colorPrimary"].lightMode,
      ),
      borderRadius: 4,
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
    },
    "& .icon-overlay": {
      display: "block",
    },
  },
  "input:disabled": {
    "&  ~ .checkbox": {
      border: `1px solid ${get(theme, "checkbox.disabledBorder", "#B4B4B4")}`,
    },
    "&:checked ~ .checkbox": {
      "&:before": {
        backgroundColor: get(theme, "checkbox.disabledColor", "#D5D7D7"),
      },
    },
  },
  "& .icon-overlay": {
    color: themeColors["Color/Base/White"].lightMode,
    position: "absolute",
    width: 16,
    height: 16,
    top: "50%",
    left: "50%",
    transform: "translateX(-50%) translateY(-50%)",
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
        <input type={"checkbox"} id={id} checked={checked} {...props} />
        <span className={"checkbox"}>
          <CheckIcon className={"icon-overlay"} />
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
                <HelpIcon />
              </Tooltip>
            </div>
          )}
        </InputLabel>
      )}
    </FieldContainer>
  );
};

export default Checkbox;
