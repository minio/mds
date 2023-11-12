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
import get from "lodash/get";
import styled from "styled-components";
import { DateTime } from "luxon";
import { DateTimeInputProps } from "./DateTimeInput.types";
import Box from "../Box/Box";
import InputLabel from "../InputLabel/InputLabel";
import Tooltip from "../Tooltip/Tooltip";
import HelpIcon from "../Icons/HelpIcon";
import CollapseCaret from "../Icons/CollapseCaret";
import ExpandCaret from "../Icons/ExpandCaret";
import { InputContainerProps } from "../InputBox/InputBox.types";
import DateTimeSelector from "./DateTimeSelector";
import { useEscapeKey } from "../../global/hooks";
import { lightColors } from "../../global/themes";

const InputBase = styled.input(({ theme }) => {
  let borderColor = get(theme, "inputBox.border", lightColors.borderColor);
  let borderHover = get(theme, "inputBox.hoverBorder", lightColors.promoBG);

  return {
    display: "flex",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    alignItems: "center",
    height: 38,
    width: "100%",
    padding: "0 35px 0 15px",
    color: get(theme, "inputBox.color", lightColors.labelColor),
    fontSize: 13,
    fontWeight: 600,
    border: `${borderColor} 1px solid`,
    borderRadius: 3,
    outline: "none",
    transitionDuration: "0.1s",
    backgroundColor: get(theme, "inputBox.backgroundColor", lightColors.white),
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
      border: get(theme, "inputBox.disabledBorder", lightColors.disabledGrey),
      backgroundColor: get(
        theme,
        "inputBox.disabledBackground",
        lightColors.disabledInnerGrey,
      ),
      color: get(
        theme,
        "inputBox.disabledText",
        lightColors.iconButtonDisabled,
      ),
      "&:placeholder": {
        color: get(
          theme,
          "inputBox.disabledPlaceholder",
          lightColors.iconButtonDisabled,
        ),
      },
      "&:hover": {
        borderColor: get(
          theme,
          "inputBox.disabledBorder",
          lightColors.disabledGrey,
        ),
      },
      "&:focus": {
        borderColor: get(
          theme,
          "inputBox.disabledBorder",
          lightColors.disabledGrey,
        ),
      },
    },
  };
});

const InputPlaceholder = styled.div(({ theme }) => {
  let borderColor = get(theme, "inputBox.border", lightColors.borderColor);
  let borderHover = get(theme, "inputBox.hoverBorder", lightColors.promoBG);

  return {
    display: "flex",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    alignItems: "center",
    height: 38,
    width: "100%",
    padding: "0 35px 0 15px",
    color: get(theme, "inputBox.color", lightColors.labelColor),
    fontSize: 13,
    fontWeight: 600,
    border: `${borderColor} 1px solid`,
    borderRadius: 3,
    outline: "none",
    transitionDuration: "0.1s",
    backgroundColor: get(theme, "inputBox.backgroundColor", lightColors.white),
    userAutocomplete: "none",
    cursor: "text",
    "&:hover": {
      borderColor: borderHover,
    },
    "&.disabled, &:disabled": {
      border: get(theme, "inputBox.disabledBorder", lightColors.disabledGrey),
      backgroundColor: get(
        theme,
        "inputBox.disabledBackground",
        lightColors.disabledInnerGrey,
      ),
      color: get(
        theme,
        "inputBox.disabledText",
        lightColors.iconButtonDisabled,
      ),
      "&:hover": {
        borderColor: get(
          theme,
          "inputBox.disabledBorder",
          lightColors.disabledGrey,
        ),
      },
    },
  };
});

const InputContainer = styled.div<InputContainerProps>(
  ({ theme, error, sx }) => ({
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
    "& .tooltipContainer": {
      marginLeft: 5,
      display: "flex",
      alignItems: "center",
      "& .min-icon": {
        width: 13,
      },
    },
    "& .startComponent": {
      display: "flex",
      alignItems: "center",
      gap: 5,
      color: get(theme, "inputBox.mutedText", lightColors.mutedText),
      fontWeight: "bold",
      fontSize: 12,
      whiteSpace: "nowrap",
      "& svg": {
        width: 18,
        height: 18,
        fill: get(theme, "inputBox.mutedText", lightColors.mutedText),
      },
    },
    "& .overlayArrow": {
      cursor: "pointer",
      position: "absolute",
      top: "50%",
      transform: "translateY(-50%)",
      marginTop: 2,
      right: 5,
      "& svg": {
        width: 24,
        height: 24,
        fill: get(theme, "inputBox.mutedText", lightColors.mutedText),
      },
      "&:hover": {
        "& svg": {
          fill: get(theme, "inputBox.color", lightColors.labelColor),
        },
      },
      "& .customIcon": {
        "& svg": {
          width: 18,
          height: 18,
          marginRight: 5,
        },
      },
    },
    "& .inputLabel": {
      marginBottom: error ? 18 : 0,
    },
    ...sx,
  }),
);

const DateTimeInput: FC<DateTimeInputProps> = ({
  sx,
  id,
  className,
  pickerStartComponent,
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
    (EventTarget & HTMLDivElement) | null
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

  return (
    <InputContainer sx={sx} className={`inputItem ${className}`}>
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

      <Box id={`${id}-DateTimeInput`} className={"dateTimeInputContainer"}>
        <Box className={"startComponent"}>{pickerStartComponent}</Box>
        {editMode ? (
          <InputBase
            disabled={disabled}
            id={id}
            value={dateInputVal}
            onChange={onInputChange}
            placeholder={`MM/DD/YYYY${
              mode === "all" ? ` HH:MM${secondsSelector ? ":SS" : ""}` : ""
            }`}
            onBlur={blurDateTimeInput}
            autoFocus
          />
        ) : (
          <InputPlaceholder
            onClick={() => {
              setEditMode(true);
            }}
          >
            {value?.toFormat(
              displayFormat ||
                `DDD ${
                  mode === "all"
                    ? ` ${timeFormat === "24h" ? "HH" : "hh"}:mm${
                        secondsSelector ? ":ss" : ""
                      } ${timeFormat === "12h" ? "a" : ""}`
                    : ""
                }`,
            ) || ""}
          </InputPlaceholder>
        )}

        <Box
          className={"overlayArrow"}
          onClick={(e) => {
            if (!disabled) {
              setIsOpen(!isOpen);
              setAnchorEl(e.currentTarget);
            }
          }}
        >
          {openPickerIcon === "arrow" ? (
            <Fragment>{isOpen ? <CollapseCaret /> : <ExpandCaret />}</Fragment>
          ) : (
            <Box className={"customIcon"}>{openPickerIcon}</Box>
          )}
        </Box>
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
