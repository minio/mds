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

import React, { FC, useMemo, useState } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import ChevronDownIcon from "../../icons/ChevronDownIcon";
import ChevronUpIcon from "../../icons/ChevronUpIcon";
import CircleHelpIcon from "../../icons/CircleHelpIcon";
import DropdownSelector from "../DropdownSelector";
import InputBox from "../InputBox";
import {
  containerSizeSmall,
  inputContainerStyles,
} from "../InputBox/InputBox.styles";
import InputLabel from "../InputLabel";
import Tooltip from "../Tooltip";
import { SelectProps } from "./Select.types";

const Select: FC<SelectProps> = ({
  id,
  label = "",
  required,
  className,
  tooltip = "",
  noLabelMinWidth = false,
  value = "",
  sx,
  options,
  onChange,
  disabled = false,
  name,
  placeholder = "",
  sizeMode = "large",
  orientation = "horizontal",
  state = "normal",
  readOnly = false,
  helper,
}) => {
  const theme = useTheme();

  const containerStyles = inputContainerStyles(theme);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLDivElement) | null
  >(null);

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const selectedLabel = options.find((option) => option.value === value);

  const displayValue = selectedLabel ? selectedLabel.label : value;

  const boxStyle = css({
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: sizeMode === "small" ? 30 : 38,
    "&:hover:not(.disabled)": {
      cursor: "pointer",
    },
    cursor: disabled || readOnly ? "not-allowed" : "pointer",
  });

  return (
    <div
      css={[
        containerStyles,
        sizeMode === "small" ? containerSizeSmall : {},
        css({ flexDirection: orientation === "vertical" ? "column" : "row" }),
        overrideThemes,
      ]}
      className={`inputItem inputdiv Base_Normal ${className}`}
    >
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth={noLabelMinWidth}
          className={`inputLabel ${orientation === "vertical" ? "verticalMode" : ""}`}
          orientation={orientation}
          inputSizeMode={sizeMode}
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
      <InputBox
        className={`select ${className || ""}`}
        id={id}
        noLabelMinWidth={noLabelMinWidth}
        value={displayValue}
        sx={{
          position: "relative",
          "& .overlayAction > button": {
            borderLeft: 0,
            backgroundColor: "transparent",
          },
          "& .accessoryIcon": {
            display: "none",
          },
          "& input": {
            paddingRight: 25,
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            overflow: "hidden",
          },
        }}
        disabled={disabled}
        disableErrorUntilFocus={true}
        name={name}
        placeholder={placeholder}
        sizeMode={sizeMode}
        helper={helper}
        orientation={orientation}
        state={state}
        readOnly={readOnly}
        overlayIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        startIcon={selectedLabel?.icon}
      >
        <div
          id={"select-trigger"}
          className={`${disabled || readOnly ? "disabled" : ""}`}
          css={boxStyle}
          onClick={(e) => {
            if (!disabled) {
              setAnchorEl(e.currentTarget);
              setIsOpen(!isOpen);
            }
          }}
        ></div>
        {isOpen && (
          <DropdownSelector
            id={`${id}-options-selector`}
            options={options}
            selectedOption={value}
            onSelect={(nValue, extraValue) => onChange(nValue, extraValue)}
            hideTriggerAction={() => {
              setIsOpen(false);
            }}
            open={isOpen}
            anchorEl={anchorEl}
            useAnchorWidth
            forSelectInput
          />
        )}
      </InputBox>
    </div>
  );
};

export default Select;
