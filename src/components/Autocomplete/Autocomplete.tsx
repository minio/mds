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

import React, { FC, Fragment, useEffect, useState } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { AutocompleteProps } from "./Autocomplete.types";
import { InputContainerProps } from "../InputBox/InputBox.types";
import HelpIcon from "../Icons/HelpIcon";
import Tooltip from "../Tooltip/Tooltip";
import InputLabel from "../InputLabel/InputLabel";
import Box from "../Box/Box";
import CollapseCaret from "../Icons/CollapseCaret";
import ExpandCaret from "../Icons/ExpandCaret";
import DropdownSelector from "../DropdownSelector/DropdownSelector";

const AutocompleteBase = styled.input(({ theme }) => {
  let borderColor = get(theme, "inputBox.border", "#E2E2E2");
  let borderHover = get(theme, "inputBox.hoverBorder", "#000110");

  return {
    display: "flex",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    alignItems: "center",
    height: 38,
    width: "100%",
    padding: "0 35px 0 15px",
    color: get(theme, "inputBox.color", "#07193E"),
    fontSize: 13,
    fontWeight: 600,
    border: `${borderColor} 1px solid`,
    borderRadius: 3,
    outline: "none",
    transitionDuration: "0.1s",
    transitionProperty: "border",
    backgroundColor: get(theme, "inputBox.backgroundColor", "#fff"),
    userAutocomplete: "none",
    "&:placeholder": {
      color: "#858585",
      opacity: 1,
      fontWeight: 400,
    },
    "&:hover": {
      borderColor: borderHover,
    },
    "&:focus": {
      borderColor: borderHover,
    },
    "&.disabled, &:disabled": {
      border: get(theme, "inputBox.disabledBorder", "#494A4D"),
      backgroundColor: get(theme, "inputBox.disabledBackground", "#B4B4B4"),
      color: get(theme, "inputBox.disabledText", "#E6EBEB"),
      "&:placeholder": {
        color: get(theme, "inputBox.disabledPlaceholder", "#E6EBEB"),
      },
      "&:hover": {
        borderColor: get(theme, "inputBox.disabledBorder", "#494A4D"),
      },
      "&:focus": {
        borderColor: get(theme, "inputBox.disabledBorder", "#494A4D"),
      },
    },
    "&.withIcon": {
      paddingLeft: 38,
    },
  };
});

const InputContainer = styled.div<InputContainerProps>(
  ({ theme, error, sx }) => ({
    display: "flex",
    flexGrow: 1,
    width: "100%",
    height: 38,
    position: "relative",
    "& .AutocompleteContainer": {
      width: "100%",
      flexGrow: 1,
      position: "relative",
      minWidth: 80,
    },
    "& .tooltipContainer": {
      marginLeft: 5,
      display: "flex",
      alignItems: "center",
      "& .min-icon": {
        width: 13,
      },
    },
    "& .overlayArrow": {
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      marginTop: 2,
      right: 5,
      "& svg": {
        width: 26,
        height: 26,
        fill: get(theme, "inputBox.color", "#07193E"),
      },
    },
    "& .inputLabel": {
      marginBottom: error ? 18 : 0,
    },
    "& .iconOption": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      marginLeft: 15,
      height: 38,
      "& svg": {
        width: 16,
        height: 16,
      },
    },
    ...sx,
  }),
);

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
  displayDropArrow = true,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchBoxVal, setSearchBoxVal] = useState<string>("");
  const [valueSelected, setValueSelected] = useState<number | null>(null);
  const [filterVal, setFilterVal] = useState<string>("");
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLDivElement) | null
  >(null);

  useEffect(() => {
    if (value !== "") {
      const index = options.findIndex((option) => option.value === value);

      setValueSelected(index);
      setSearchBoxVal(options[index]?.label || "");
    }
  }, []);

  const filteredOptions = options.filter((item) =>
    item.label.toLowerCase().includes(filterVal.toLowerCase()),
  );

  const optionWithIcon =
    valueSelected !== null &&
    (options[valueSelected]?.icon || options[valueSelected]?.indicator);

  return (
    <InputContainer
      sx={sx}
      className={`inputItem ${className}`}
      onKeyDown={() => {
        if (!isOpen) {
          setIsOpen(true);
        }
      }}
    >
      {label !== "" && (
        <InputLabel
          htmlFor={id}
          noMinWidth={noLabelMinWidth}
          className={"inputLabel"}
          helpTip={helpTip}
          helpTipPlacement={helpTipPlacement}
        >
          {label}
          {required ? "*" : ""}
          {tooltip !== "" && (
            <Box className={"tooltipContainer"}>
              <Tooltip tooltip={tooltip} placement="top">
                <Box className={tooltip}>
                  <HelpIcon />
                </Box>
              </Tooltip>
            </Box>
          )}
        </InputLabel>
      )}

      <Box
        id={`${id}-Autocomplete`}
        className={"AutocompleteContainer"}
        onClick={(e) => {
          if (!disabled) {
            setIsOpen(!isOpen);
            setAnchorEl(e.currentTarget);
          }
        }}
      >
        {optionWithIcon && (
          <Box className={"iconOption"}>
            {options[valueSelected]?.indicator
              ? options[valueSelected]?.indicator
              : options[valueSelected].icon}
          </Box>
        )}
        <AutocompleteBase
          disabled={disabled}
          id={id}
          name={name}
          value={searchBoxVal}
          onChange={(e) => {
            setSearchBoxVal(e.target.value);
            setFilterVal(e.target.value);
          }}
          placeholder={placeholder}
          className={`${optionWithIcon ? "withIcon" : ""}`}
        />
        {displayDropArrow && (
          <Box className={"overlayArrow"}>
            <Fragment>{isOpen ? <CollapseCaret /> : <ExpandCaret />}</Fragment>
          </Box>
        )}
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
            anchorEl={anchorEl}
            useAnchorWidth
          />
        )}
      </Box>
    </InputContainer>
  );
};

export default Autocomplete;
