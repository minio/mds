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

import React, { CSSProperties, FC, useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { css, useTheme } from "@emotion/react";
import debounce from "lodash/debounce";
import { DateTime } from "luxon";

import SelectorContainer from "../../global/SelectorContainer";
import { overridePropsParse } from "../../global/utils";
import CalendarIcon from "../../icons/CalendarIcon";
import Clock4Icon from "../../icons/Clock4Icon";
import Box from "../Box";
import DateSelector from "./DateSelector";
import {
  dateTimeContainerStyles,
  optionChangeButtonStyles,
} from "./DateTime.styles";
import { DateTimeSelectorProps } from "./DateTimeInput.types";
import TimeSelector from "./TimeSelector";

const calcElementPosition = (anchorEl: (EventTarget & HTMLElement) | null) => {
  if (!anchorEl) {
    return {
      top: 0,
      left: 0,
      width: 0,
    };
  }

  const bounds = anchorEl.getBoundingClientRect();

  const returnItem: CSSProperties = {
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
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const dateTimeContainer = dateTimeContainerStyles(theme, usePortal, mode);
  const optionChangeButton = optionChangeButtonStyles(theme);

  const [currentView, setCurrentView] = useState<"calendar" | "time">(
    "calendar",
  );
  const [coords, setCoords] = useState<CSSProperties | null>(null);

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
    <div
      css={[dateTimeContainer, overrideThemes]}
      onClick={(e) => e.stopPropagation()}
      id={`timeSelector-${id}`}
      style={coords || {}}
    >
      {mode === "all" && value && (
        <Box className={"modeBar"}>
          <button
            css={[optionChangeButton]}
            className={currentView === "calendar" ? "selected" : ""}
            onClick={() => setCurrentView("calendar")}
            type={"button"}
          >
            <CalendarIcon />
            <span>{value?.toFormat("dd LLL yyyy") || ""}</span>
          </button>
          <button
            css={[optionChangeButton]}
            className={currentView === "time" ? "selected" : ""}
            onClick={() => setCurrentView("time")}
            type={"button"}
          >
            <Clock4Icon />
            <span>
              {value?.toFormat(
                `${timeFormat === "24h" ? "HH" : "hh"}:mm${
                  secondsSelector ? ":ss" : ""
                }${timeFormat === "12h" ? " a" : ""}`,
              ) || ""}
            </span>
          </button>
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
    </div>
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
