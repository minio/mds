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

import React, { FC, Fragment, useMemo, useState } from "react";
import { DateTime } from "luxon";
import styled from "styled-components";

import { useEscapeKey } from "../../global/hooks";
import { overridePropsParse } from "../../global/utils";
import Box from "../Box/Box";
import ChevronDownIcon from "../Icons/NewDesignIcons/ChevronDownIcon";
import ChevronUpIcon from "../Icons/NewDesignIcons/ChevronUpIcon";
import { InputContainerProps } from "../InputBox/InputBox.types";
import { DateTimeInputProps } from "./DateTimeInput.types";
import DateTimeSelector from "./DateTimeSelector";
import InputBox from "../InputBox/InputBox";

const InputContainer = styled.div<InputContainerProps>(({ theme, sx }) => ({
  display: "flex",
  flexGrow: 1,
  width: "100%",
  position: "relative",
  "& .dateTimeInputContainer": {
    display: "flex",
    gap: 10,
    width: "100%",
    flexGrow: 1,
    position: "relative",
    minWidth: 80,
  },
  ...overridePropsParse(sx, theme),
}));

const DateTimeInput: FC<DateTimeInputProps> = ({
  sx,
  id,
  className,
  tooltip = "",
  helpTip,
  helpTipPlacement,
  maxDate,
  minDate,
  label = "",
  disabled,
  mode = "all",
  value,
  openPickerIcon = "arrow" as "arrow" | React.ReactNode,
  required,
  displayFormat,
  noLabelMinWidth,
  onChange,
  timeFormat = "24h",
  secondsSelector = false,
  sizeMode = "large",
  orientation = "horizontal",
  state = "normal",
  readOnly = false,
  helper,
  pickerSx,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [dateInputVal, setDateInputVal] = useState<string>(
    value?.toFormat(
      `MM/dd/yyyy${
        mode === "all" ? ` HH:mm${secondsSelector ? ":ss" : ""}` : ""
      }`,
    ) || "",
  );
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);
  const [editMode, setEditMode] = useState<boolean>(false);

  useEscapeKey(() => {
    setIsOpen(false);
  });

  //Input format: mm/dd/yyyy HH:mm:ss

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    let limitChars = 16;

    if (mode === "date") {
      limitChars = 10;
    } else if (mode === "all" && secondsSelector) {
      limitChars = 19;
    }

    if (value.length < dateInputVal.length) {
      // We are deleting elements
      setDateInputVal(value);
      return;
    }

    if (isNaN(parseInt(value.slice(-1)))) {
      // Introduced character is not a number
      return;
    }

    if (value.length >= limitChars) {
      // Characters amount is limit
      setDateInputVal(value.slice(0, limitChars));
      return;
    }

    const slashLength = [2, 5];
    const colonLength = [13, 16];
    const spaceLength = [10];

    let textToAdd = value;

    if (slashLength.includes(value.length)) {
      textToAdd = `${value}/`;
    } else if (colonLength.includes(value.length)) {
      textToAdd = `${value}:`;
    } else if (spaceLength.includes(value.length)) {
      textToAdd = `${value} `;
    }

    setDateInputVal(textToAdd);
  };

  const blurDateTimeInput = () => {
    setEditMode(false);

    const newTime = DateTime.fromFormat(
      dateInputVal,
      `MM/dd/yyyy${
        mode === "all" ? ` HH:mm${secondsSelector ? ":ss" : ""}` : ""
      }`,
    );

    if (newTime.isValid) {
      onChange(newTime);
    } else {
      setDateInputVal(
        value?.toFormat(
          `MM/dd/yyyy${
            mode === "all" ? ` HH:mm${secondsSelector ? ":ss" : ""}` : ""
          }`,
        ) || "",
      );
    }
  };

  const overlayIcon = useMemo(() => {
    return openPickerIcon === "arrow" ? (
      <Fragment>{isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}</Fragment>
    ) : (
      openPickerIcon
    );
  }, [openPickerIcon, isOpen]);

  const overrideFieldStyle = {
    ...sx,
    "& .overlayAction > button": {
      borderLeft: 0,
      backgroundColor: "transparent",
    },
    "& .accessoryIcon": { display: "none" },
  };

  return (
    <InputContainer
      sx={sx}
      id={`${id}-DateTimeInput`}
      className={`inputItem ${className}`}
    >
      <Box className={"dateTimeInputContainer"}>
        {editMode ? (
          <InputBox
            id={id}
            label={label}
            required={required}
            tooltip={tooltip}
            noLabelMinWidth={noLabelMinWidth}
            value={dateInputVal}
            onChange={onInputChange}
            placeholder={`MM/DD/YYYY${
              mode === "all" ? ` HH:MM${secondsSelector ? ":SS" : ""}` : ""
            }`}
            onBlur={blurDateTimeInput}
            autoFocus
            sx={overrideFieldStyle}
            disabled={disabled}
            disableErrorUntilFocus={true}
            helpTip={helpTip}
            helpTipPlacement={helpTipPlacement}
            sizeMode={sizeMode}
            helper={helper}
            orientation={orientation}
            state={state}
            readOnly={readOnly}
            overlayIcon={overlayIcon}
            overlayAction={(e) => {
              if (!disabled) {
                setIsOpen(!isOpen);
                setAnchorEl(e.currentTarget);
              }
            }}
          />
        ) : (
          <InputBox
            id={id}
            label={label}
            required={required}
            tooltip={tooltip}
            noLabelMinWidth={noLabelMinWidth}
            value={
              value?.toFormat(
                displayFormat ||
                  `DDD ${
                    mode === "all"
                      ? ` ${timeFormat === "24h" ? "HH" : "hh"}:mm${
                          secondsSelector ? ":ss" : ""
                        } ${timeFormat === "12h" ? "a" : ""}`
                      : ""
                  }`,
              ) || ""
            }
            sx={overrideFieldStyle}
            disabled={disabled}
            disableErrorUntilFocus={true}
            helpTip={helpTip}
            helpTipPlacement={helpTipPlacement}
            sizeMode={sizeMode}
            helper={helper}
            orientation={orientation}
            state={state}
            readOnly={readOnly}
            overlayIcon={overlayIcon}
            overlayAction={(e) => {
              if (!disabled) {
                setIsOpen(!isOpen);
                setAnchorEl(e.currentTarget);
              }
            }}
            onFocus={() => {
              setEditMode(true);
            }}
          />
        )}
      </Box>

      <DateTimeSelector
        id={id}
        value={value}
        minDate={minDate}
        mode={mode}
        onChange={onChange}
        maxDate={maxDate}
        secondsSelector={secondsSelector}
        timeFormat={timeFormat}
        sx={pickerSx}
        onClose={() => {
          setIsOpen(false);
          setEditMode(false);
          setDateInputVal(
            value?.toFormat(
              `MM/dd/yyyy${
                mode === "all" ? ` HH:mm${secondsSelector ? ":ss" : ""}` : ""
              }`,
            ) || "",
          );
        }}
        anchorEl={anchorEl}
        open={isOpen}
        usePortal={true}
      />
    </InputContainer>
  );
};

export default DateTimeInput;
