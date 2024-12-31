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
import DateSelector from "./DateSelector";
import { dateTimeContainerStyles, saveDateButtons } from "./DateTime.styles";
import { DateTimeSelectorProps } from "./DateTimeInput.types";
import TimeSelector from "./TimeSelector";
import { Button } from "../../index";

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
  saveLabel = "Save",
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
  const saveButtonsContainer = saveDateButtons(theme);

  const [coords, setCoords] = useState<CSSProperties | null>(null);
  const [valid, setValid] = useState<boolean>(true);
  const [originalDate, setOriginalDate] = useState<DateTime>(
    value || DateTime.now(),
  );

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

  const closeSelector = () => {
    setOriginalDate(value || DateTime.now());
    if (onClose) {
      onClose();
    }
  };

  const cancelSelector = () => {
    onChange(originalDate);
    closeSelector();
  };

  const dateSelectorChange = (newDate: DateTime | null) => {
    if (newDate) {
      const newValue = (value || DateTime.now()).set({
        year: newDate.year,
        month: newDate.month,
        day: newDate.day,
      });

      onChange(newValue);
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
      <DateSelector
        minDate={minDate}
        maxDate={maxDate}
        value={value}
        onChange={dateSelectorChange}
      />
      {mode === "all" && (
        <TimeSelector
          secondsSelector={secondsSelector}
          timeFormat={timeFormat}
          value={value}
          onChange={onChange}
          validitySignal={(isValid) => setValid(isValid)}
        />
      )}
      <div css={[saveButtonsContainer]}>
        <Button id={"cancel-date-picker"} onClick={cancelSelector}>
          Cancel
        </Button>
        <Button
          id={"save-date-picker"}
          variant={"primary"}
          disabled={!valid}
          onClick={closeSelector}
        >
          {saveLabel}
        </Button>
      </div>
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
