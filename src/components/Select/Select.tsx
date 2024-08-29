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

import React, { FC, useState } from "react";

import Box from "../Box/Box";
import DropdownSelector from "../DropdownSelector/DropdownSelector";
import { ChevronDownIcon } from "../Icons/NewDesignIcons";
import ChevronUpIcon from "../Icons/NewDesignIcons/ChevronUpIcon";
import InputBox from "../InputBox/InputBox";
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
  fixedLabel = "",
  name,
  placeholder = "",
  helpTip,
  helpTipPlacement,
  sizeMode = "large",
  orientation = "horizontal",
  state = "normal",
  readOnly = false,
  helper,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLDivElement) | null
  >(null);

  const selectedLabel = options.find((option) => option.value === value);

  if (!selectedLabel && fixedLabel === "" && placeholder === "") {
    console.warn("The selected value is not included in Options List");
  }

  return (
    <InputBox
      className={`select ${className || ""}`}
      id={id}
      label={label}
      required={required}
      tooltip={tooltip}
      noLabelMinWidth={noLabelMinWidth}
      value={selectedLabel?.label}
      sx={{
        ...sx,
        "& .overlayAction > button": {
          borderLeft: 0,
          backgroundColor: "transparent",
        },
        "& .accessoryIcon": {
          display: "none",
        },
      }}
      disabled={disabled}
      disableErrorUntilFocus={true}
      name={name}
      placeholder={placeholder}
      helpTip={helpTip}
      helpTipPlacement={helpTipPlacement}
      sizeMode={sizeMode}
      helper={helper}
      orientation={orientation}
      state={state}
      readOnly={readOnly}
      overlayIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
      startIcon={selectedLabel?.icon}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: sizeMode === "small" ? 30 : 38,
          "&:hover": {
            cursor: "pointer",
          },
        }}
        onClick={(e) => {
          if (!disabled) {
            setAnchorEl(e.currentTarget);
            setIsOpen(!isOpen);
          }
        }}
      ></Box>
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
  );
};

export default Select;
