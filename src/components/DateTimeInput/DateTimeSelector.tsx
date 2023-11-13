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

import React, { FC, useEffect, useState } from "react";
import styled, { CSSObject } from "styled-components";
import get from "lodash/get";
import { createPortal } from "react-dom";
import {
  DateTimeSelectorProps,
  StylesOverrideProps,
} from "./DateTimeInput.types";
import Box from "../Box/Box";
import CalendarIcon from "../Icons/CalendarIcon";
import TimeIcon from "../Icons/TimeIcon";
import DateSelector from "./DateSelector";
import TimeSelector from "./TimeSelector";
import { lightColors } from "../../global/themes";
import { DateTime } from "luxon";
import SelectorContainer from "../../global/SelectorContainer";
import debounce from "lodash/debounce";

const globalWidth = 315;

const OptionChangeButton = styled.button(({ theme }) => ({
  height: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  border: `2px solid ${get(theme, "borderColor", lightColors.borderColor)}`,
  borderRadius: 4,
  backgroundColor: get(theme, "bgColor", lightColors.white),
  color: get(theme, "signalColors.main", lightColors.mainBlue),
  fontSize: 14,
  fontWeight: "bold",
  "& svg": {
    width: 12,
    height: 12,
  },
  "&.selected": {
    backgroundColor: get(theme, "signalColors.main", lightColors.mainBlue),
    color: get(theme, "bgColor", lightColors.white),
    borderColor: get(theme, "signalColors.main", lightColors.mainBlue),
    boxShadow: `0px 3px 6px #00000029;`,
  },
}));

const DateTimeContainer = styled.div<StylesOverrideProps>(
  ({ theme, sx, isPortal, mode }) => ({
    position: isPortal ? "absolute" : "relative",
    border: `1px solid ${get(theme, "borderColor", lightColors.borderColor)}`,
    backgroundColor: get(theme, "bgColor", lightColors.white),
    width: globalWidth,
    minHeight: mode === "all" ? 340 : 285,
    boxShadow: `0px 0px 10px #00000029`,
    padding: 24,
    borderRadius: 4,
    "& .modeBar": {
      display: "flex",
      gap: 16,
      marginBottom: 18,
    },
    ...sx,
  }),
);

const calcElementPosition = (anchorEl: (EventTarget & HTMLElement) | null) => {
  if (!anchorEl) {
    return {
      top: 0,
      left: 0,
      width: 0,
    };
  }

  const bounds = anchorEl.getBoundingClientRect();

  let returnItem: CSSObject = {
    top: bounds.top + bounds.height,
    left: bounds.left + bounds.width,
    transform: "translateX(-100%)",
  };

  return returnItem;
};

const DateTimeSelector: FC<DateTimeSelectorProps> = ({
  mode = "all",
  onChange,
  maxDate,
  minDate,
  value,
  id,
  usePortal = true,
  anchorEl = null,
  secondsSelector,
  timeFormat = "24h",
  onClose,
  open = false,
  sx,
}) => {
  const [currentView, setCurrentView] = useState<"calendar" | "time">(
    "calendar",
  );
  const [coords, setCoords] = useState<CSSObject | null>(null);

  useEffect(() => {
    if (usePortal) {
      if (open) {
        setCoords(calcElementPosition(anchorEl));
        return;
      }
      setCoords(null);
    }
  }, [open, usePortal]);

  useEffect(() => {
    if (usePortal) {
      const handleResize = () => {
        if (onClose) {
          onClose();
        }
      };

      const scrollResize = debounce((anchorEl) => {
        if (!anchorEl || !anchorEl.getBoundingClientRect()) {
          return;
        }
        setCoords(calcElementPosition(anchorEl));
      }, 300);

      window.addEventListener("resize", handleResize);
      window.addEventListener("scroll", () => {
        scrollResize(anchorEl);
      });
    }
  }, [usePortal]);

  const calendarChange = (value: DateTime | null) => {
    onChange(value);

    if (mode === "all") {
      setCurrentView("time");
    }
    if (mode === "date" && onClose) {
      onClose();
    }
  };

  const closeSelector = () => {
    if (onClose) {
      onClose();
    }
  };

  if (usePortal && (!open || !coords)) {
    return null;
  }

  const picker = (
    <DateTimeContainer
      mode={mode}
      onClick={(e) => e.stopPropagation()}
      id={`timeSelector-${id}`}
      isPortal={usePortal}
      sx={{ ...sx, ...coords }}
    >
      {mode === "all" && value && (
        <Box className={"modeBar"}>
          <OptionChangeButton
            className={currentView === "calendar" ? "selected" : ""}
            onClick={() => setCurrentView("calendar")}
          >
            <CalendarIcon />
            <span>{value?.toFormat("dd LLL yyyy") || ""}</span>
          </OptionChangeButton>
          <OptionChangeButton
            className={currentView === "time" ? "selected" : ""}
            onClick={() => setCurrentView("time")}
          >
            <TimeIcon />
            <span>
              {value?.toFormat(
                `${timeFormat === "24h" ? "HH" : "hh"}:mm${
                  secondsSelector ? ":ss" : ""
                }${timeFormat === "12h" ? " a" : ""}`,
              ) || ""}
            </span>
          </OptionChangeButton>
        </Box>
      )}
      {currentView === "calendar" && (
        <DateSelector
          minDate={minDate}
          maxDate={maxDate}
          value={value}
          onChange={calendarChange}
        />
      )}
      {currentView === "time" && (
        <TimeSelector
          secondsSelector={secondsSelector}
          timeFormat={timeFormat}
          value={value}
          onChange={onChange}
          completeCallback={closeSelector}
        />
      )}
    </DateTimeContainer>
  );

  if (usePortal) {
    return createPortal(
      <SelectorContainer onClick={closeSelector}>{picker}</SelectorContainer>,
      document.body,
    );
  }

  return picker;
};

export default DateTimeSelector;
