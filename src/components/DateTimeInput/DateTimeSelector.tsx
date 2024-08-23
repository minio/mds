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
import { createPortal } from "react-dom";
import debounce from "lodash/debounce";
import get from "lodash/get";
import { DateTime } from "luxon";
import styled, { CSSObject } from "styled-components";

import SelectorContainer from "../../global/SelectorContainer";
import { lightV2 } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import Box from "../Box/Box";
import CalendarIcon from "../Icons/NewDesignIcons/CalendarIcon";
import Clock4Icon from "../Icons/NewDesignIcons/Clock4Icon";
import DateSelector from "./DateSelector";
import {
  DateTimeSelectorProps,
  StylesOverrideProps,
} from "./DateTimeInput.types";
import TimeSelector from "./TimeSelector";

const globalWidth = 315;

const OptionChangeButton = styled.button(({ theme }) => ({
  height: 30,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  border: `2px solid ${get(theme, "borderColor", lightV2.borderColor)}`,
  borderRadius: 4,
  backgroundColor: get(theme, "signalColors.clear", lightV2.white),
  color: get(theme, "signalColors.main", lightV2.switchBG),
  fontSize: 14,
  fontWeight: "bold",
  "& svg": {
    width: 12,
    height: 12,
  },
  "&.selected": {
    backgroundColor: get(theme, "signalColors.main", lightV2.switchBG),
    color: get(theme, "bgColor", lightV2.white),
    borderColor: get(theme, "signalColors.main", lightV2.switchBG),
    boxShadow: `0px 3px 6px #00000029;`,
  },
}));

const DateTimeContainer = styled.div<StylesOverrideProps>(
  ({ theme, sx, isPortal, mode, coords }) => ({
    position: isPortal ? "absolute" : ("relative" as const),
    border: `1px solid ${get(theme, "borderColor", lightV2.borderColor)}`,
    backgroundColor: get(theme, "signalColors.clear", lightV2.white),
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
    ...overridePropsParse(sx, theme),
    ...coords,
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

  const returnItem: CSSObject = {
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
  }, [anchorEl, open, usePortal]);

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
  }, [anchorEl, onClose, usePortal]);

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
      coords={coords || {}}
      sx={sx}
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
            <Clock4Icon />
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
