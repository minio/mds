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
import { CheckboxProps } from "./Checkbox.types";
import InputLabel from "../InputLabel/InputLabel";
import { InputLabelProps } from "../InputLabel/InputLabel.types";
import FieldContainer from "../../global/FieldContainer";
import Tooltip from "../Tooltip/Tooltip";
import HelpIcon from "../Icons/HelpIcon";

const CheckboxItem = styled.label<InputLabelProps>(({ sx, theme }) => ({
  "& input": {
    display: "none",
  },
  "& .checkbox": {
    position: "relative",
    display: "block",
    width: 16,
    height: 16,
    borderRadius: 2,
    border: `1px solid ${get(theme, "checkbox.checkBoxBorder", "#c3c3c3")}`,
    boxShadow: "inset 0px 1px 3px rgba(0,0,0,0.1)",
  },
  "input:checked ~ .checkbox": {
    "&:before": {
      content: "' '",
      position: "absolute",
      display: "block",
      width: 12,
      height: 12,
      backgroundColor: get(theme, "checkbox.checkBoxColor", "#4CCB92"),
      borderRadius: 1,
      top: "50%",
      left: "50%",
      transform: "translateX(-50%) translateY(-50%)",
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
  ...sx,
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
        <input type={"checkbox"} id={id} {...props} />
        <span className={"checkbox"} />
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
