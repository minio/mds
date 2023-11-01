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
import Calendar from "react-calendar";
import styled from "styled-components";
import get from "lodash/get";
import { DateSelectorProps } from "./DateTimeInput.types";
import { lightColors } from "../../global/themes";
import NextCaretIcon from "../Icons/NextCaretIcon";
import PrevCaretIcon from "../Icons/PrevCaretIcon";
import { DateTime } from "luxon";

const DateSelectorContainer = styled.div(({ theme }) => ({
  "& .react-calendar__navigation": {
    display: "flex",
    justifyContent: "space-between",
    gap: 5,
    borderBottom: `1px solid ${get(
      theme,
      "borderColor",
      lightColors.borderColor,
    )}`,
    padding: "0 0 12px",
    marginBottom: 10,
    "& button": {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      backgroundColor: "transparent",
      border: 0,
      fontWeight: "bold",
      fontSize: 16,
      color: get(theme, "fontColor", lightColors.defaultFontColor),
      borderRadius: 3,
      "&:not(:disabled):hover": {
        backgroundColor: get(
          theme,
          "buttons.text.hover.background",
          lightColors.hoverGrey,
        ),
        color: get(theme, "buttons.text.hover.text", lightColors.mainGrey),
      },
      "&:disabled": {
        cursor: "not-allowed",
        color: get(
          theme,
          "buttons.text.disabled.text",
          lightColors.disabledInnerGrey,
        ),
      },
      "& svg": {
        width: 12,
        height: 12,
      },
    },
    "& .react-calendar__navigation__label__labelText": {
      display: "flex",
      gap: 5,
      justifyContent: "center",
      color: get(theme, "fontColor", lightColors.defaultFontColor),
      userSelect: "none",
      "& .secondaryItem": {
        fontWeight: "normal",
        color: get(theme, "mutedText", lightColors.mutedText),
      },
    },
  },
  "& .react-calendar__month-view__weekdays__weekday": {
    fontSize: 10,
    color: get(theme, "mutedText", lightColors.mutedText),
    textAlign: "center",
    "& abbr": {
      textDecoration: "none",
    },
  },
  "& .react-calendar__month-view__weekdays": {
    marginBottom: 5,
    userSelect: "none",
  },
  "& .react-calendar__month-view__days": {
    rowGap: 8,
    columnGap: 6,
    justifyContent: "space-evenly",
    "& .react-calendar__month-view__days__day": {
      cursor: "pointer",
      height: 28,
      width: 28,
      maxWidth: 28,
      maxHeight: 28,
      borderRadius: "100%",
      padding: 0,
      fontWeight: "bold",
      backgroundColor: "transparent",
      border: 0,
      color: get(theme, "signalColors.main", lightColors.mainBlue),
      "&:not(.react-calendar__tile--active):hover": {
        backgroundColor: get(
          theme,
          "buttons.text.hover.background",
          lightColors.hoverGrey,
        ),
        color: get(theme, "signalColors.main", lightColors.mainBlue),
      },
      "&.react-calendar__tile--now": {
        backgroundColor: get(
          theme,
          "signalColors.info",
          lightColors.bulletColor,
        ),
        color: get(theme, "bgColor", lightColors.white),
      },
      "&.react-calendar__tile--active": {
        backgroundColor: get(theme, "signalColors.main", lightColors.mainBlue),
        color: get(theme, "bgColor", lightColors.white),
      },
    },
  },
  "& .react-calendar__year-view__months, & .react-calendar__decade-view__years, & .react-calendar__century-view__decades":
    {
      gap: 15,
      justifyContent: "center",
      "& button": {
        cursor: "pointer",
        padding: "5px 10px",
        backgroundColor: "transparent",
        border: 0,
        fontSize: 14,
        fontWeight: "normal",
        color: get(theme, "mutedText", lightColors.mutedText),
        borderRadius: 3,
        "&:not(:disabled):hover": {
          backgroundColor: get(
            theme,
            "buttons.text.hover.background",
            lightColors.hoverGrey,
          ),
          color: get(theme, "buttons.text.hover.text", lightColors.mainGrey),
        },
        "&:disabled": {
          cursor: "not-allowed",
          color: get(
            theme,
            "buttons.text.disabled.text",
            lightColors.disabledInnerGrey,
          ),
        },
      },
    },
  "& .react-calendar__century-view__decades": {
    "& button": {
      minWidth: 120,
    },
  },
}));

const DateSelector: FC<DateSelectorProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
}) => {
  return (
    <DateSelectorContainer>
      <Calendar
        onChange={(value) => {
          if (value) {
            onChange(DateTime.fromJSDate(value as Date));
          }
        }}
        value={value?.toJSDate()}
        minDate={minDate?.toJSDate()}
        maxDate={maxDate?.toJSDate()}
        navigationLabel={({ label }) => {
          const labelExplode = label.split(" ");

          return (
            <Fragment>
              {labelExplode.map((item, index) => (
                <span
                  key={`calLabItem-${index}`}
                  className={index === 1 ? "secondaryItem" : ""}
                >
                  {item}
                </span>
              ))}
            </Fragment>
          );
        }}
        next2Label={null}
        prev2Label={null}
        calendarType={"gregory"}
        nextLabel={<NextCaretIcon />}
        prevLabel={<PrevCaretIcon />}
      />
    </DateSelectorContainer>
  );
};

export default DateSelector;
