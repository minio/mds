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

import React, { FC, useEffect, useMemo, useRef, useState } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { overridePropsParse } from "../../global/utils";
import DropdownSelector from "../DropdownSelector/DropdownSelector";
import ChevronDownIcon from "../Icons/NewDesignIcons/ChevronDownIcon";
import ChevronUpIcon from "../Icons/NewDesignIcons/ChevronUpIcon";
import { InputContainerProps } from "../InputBox/InputBox.types";
import { AutocompleteProps } from "./Autocomplete.types";
import InputBox from "../InputBox/InputBox";

const InputContainer = styled.div<InputContainerProps>(({ theme, sx }) => ({
  display: "flex",
  flexGrow: 1,
  width: "100%",
  height: 38,
  position: "relative",
  ...overridePropsParse(sx, theme),
}));

const Autocomplete: FC<AutocompleteProps> = ({
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
  helpTip,
  helpTipPlacement,
  sizeMode = "large",
  orientation = "horizontal",
  state = "normal",
  readOnly = false,
  helper,
}) => {
  const baseInputRef = useRef(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchBoxVal, setSearchBoxVal] = useState<string>("");
  const [valueSelected, setValueSelected] = useState<number | null>(null);
  const [filterVal, setFilterVal] = useState<string>("");

  useEffect(() => {
    if (value !== "") {
      const index = options.findIndex((option) => option.value === value);

      setValueSelected(index);
      setSearchBoxVal(options[index]?.label || "");
    }
  }, [options, value]);

  const filteredOptions = options.filter((item) =>
    item.label.toLowerCase().includes(filterVal.toLowerCase()),
  );

  const startIcon = useMemo(() => {
    const optionWithIcon =
      valueSelected !== null &&
      (options[valueSelected]?.icon || options[valueSelected]?.indicator);

    if (!optionWithIcon) {
      return null;
    }

    return options[valueSelected]?.indicator
      ? options[valueSelected]?.indicator
      : options[valueSelected].icon;
  }, [options, valueSelected]);

  return (
    <InputContainer
      sx={sx}
      className={`inputItem ${className}`}
      onKeyDown={() => {
        if (!isOpen) {
          setIsOpen(true);
        }
      }}
      id={`${id}-Autocomplete`}
    >
      <InputBox
        label={label}
        required={required}
        tooltip={tooltip}
        noLabelMinWidth={noLabelMinWidth}
        helpTip={helpTip}
        helpTipPlacement={helpTipPlacement}
        disabled={disabled}
        id={id}
        name={name}
        value={searchBoxVal}
        onChange={(e) => {
          setSearchBoxVal(e.target.value);
          setFilterVal(e.target.value);
        }}
        placeholder={placeholder}
        sizeMode={sizeMode}
        helper={helper}
        orientation={orientation}
        state={state}
        readOnly={readOnly}
        overlayIcon={isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
        overlayAction={() => {
          if (!disabled) {
            setIsOpen(!isOpen);
          }
        }}
        startIcon={startIcon}
        onClick={() => {
          if (!disabled) {
            setIsOpen(!isOpen);
          }
        }}
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
        ref={baseInputRef}
      />
      {isOpen && (
        <DropdownSelector
          id={`${id}-options-Autocomplete`}
          options={filteredOptions}
          selectedOption={value}
          onSelect={(nValue, extraValue, label, id) => {
            setSearchBoxVal(label || "");
            setFilterVal("");
            if (id !== undefined) {
              setValueSelected(id);
            }
            onChange(nValue, extraValue);
          }}
          hideTriggerAction={() => {
            setIsOpen(false);
            if (
              (value !== "" && searchBoxVal === "") ||
              filteredOptions.length === 0
            ) {
              const option = options.find((option) => option.value === value);

              setSearchBoxVal(option?.label || "");
            }
          }}
          open={isOpen}
          anchorEl={baseInputRef.current}
          useAnchorWidth
          forSelectInput
        />
      )}
    </InputContainer>
  );
};

export default Autocomplete;
