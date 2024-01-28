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

import React, { FC, Fragment, useState } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { SelectProps } from "./Select.types";
import { InputContainerProps } from "../InputBox/InputBox.types";
import HelpIcon from "../Icons/HelpIcon";
import Tooltip from "../Tooltip/Tooltip";
import InputLabel from "../InputLabel/InputLabel";
import Box from "../Box/Box";
import CollapseCaret from "../Icons/CollapseCaret";
import ExpandCaret from "../Icons/ExpandCaret";
import DropdownSelector from "../DropdownSelector/DropdownSelector";

const SelectBase = styled.div(({ theme }) => {
  let borderColor = get(theme, "inputBox.border", "#E2E2E2");
  let borderHover = get(theme, "inputBox.hoverBorder", "#000110");

  return {
    display: "flex",
    flexGrow: 1,
    height: 38,
    padding: "0 5px 0 15px",
    color: get(theme, "inputBox.color", "#07193E"),
    fontSize: 13,
    fontWeight: 600,
    border: `${borderColor} 1px solid`,
    borderRadius: 3,
    outline: "none",
    transitionDuration: "0.1s",
    backgroundColor: get(theme, "inputBox.backgroundColor", "#fff"),
    userSelect: "none",
    width: "100%",
    minWidth: 0,
    alignItems: "center",
    justifyContent: "space-between",
    "& .truncate": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
    },
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
    "&.disabled": {
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
    "& svg": {
      width: 16,
      height: 16,
      minWidth: 16,
      minHeight: 16,
    },
    "& .indicatorContainer": {
      display: "flex",
      alignItems: "center",
      width: 16,
    },
  };
});

const InputContainer = styled.div<InputContainerProps>(
  ({ theme, error, sx }) => ({
    display: "flex",
    flexGrow: 1,
    width: "100%",
    position: "relative",

    "& .selectContainer": {
      display: "flex",
      width: "100%",
      gap: 8,
      alignItems: "center",
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
      marginTop: "2px",
      right: "5px",
      "& svg": {
        width: 26,
        height: 26,
        fill: get(theme, "inputBox.color", "#07193E"),
      },
    },
    "& .inputLabel": {
      marginBottom: error ? 18 : 0,
    },
    ...sx,
  }),
);

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
    <InputContainer sx={sx} className={`inputItem ${className || ""}`}>
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
        id={`${id}-select`}
        className={"selectContainer"}
        onClick={(e) => {
          if (!disabled) {
            setIsOpen(!isOpen);
            setAnchorEl(e.currentTarget);
          }
        }}
      >
        <SelectBase className={disabled ? "disabled" : ""}>
          <Box
            sx={{ display: "flex", columnGap: 8, width: "calc(100% - 16px)" }}
          >
            {selectedLabel?.icon && (
              <Box className={"indicatorContainer"}>{selectedLabel?.icon}</Box>
            )}
            <Box
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
                minWidth: 0,
              }}
            >
              {fixedLabel && fixedLabel !== "" ? (
                fixedLabel
              ) : (
                <Fragment>
                  {selectedLabel?.label || (
                    <i style={{ opacity: 0.6 }}>
                      {placeholder !== "" ? placeholder : ""}
                    </i>
                  )}
                </Fragment>
              )}
            </Box>
            {selectedLabel?.indicator && (
              <Box className={"indicatorContainer"}>
                {selectedLabel?.indicator}
              </Box>
            )}
          </Box>
          <Box sx={{ display: "flex", width: 16 }}>
            {isOpen ? <CollapseCaret /> : <ExpandCaret />}
          </Box>
        </SelectBase>
        <input type={"hidden"} id={id} name={name} value={value} />
      </Box>
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
        />
      )}
    </InputContainer>
  );
};

export default Select;
