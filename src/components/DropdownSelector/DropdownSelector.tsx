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
import debounce from "lodash/debounce";
import { createPortal } from "react-dom";
import {
  DropDownBlockProps,
  DropdownSelectorProps,
} from "./DropdownSelector.types";
import get from "lodash/get";
import { useArrowKeys, useEnterKey, useEscapeKey } from "../../global/hooks";

const SelectorContainer = styled.div(({}) => ({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "transparent",
  zIndex: 5000,
  overscrollBehavior: "contain",
}));

const DropdownBlock = styled.div<DropDownBlockProps>(({ theme, sx }) => ({
  position: "absolute",
  display: "flex",
  backgroundColor: get(theme, "dropdownSelector.backgroundColor", "#fff"),
  border: `1px solid ${get(theme, "borderColor", "#E2E2E2")}`,
  padding: "10px 0",
  maxHeight: 450,
  minWidth: 150,
  overflowY: "auto",
  borderRadius: 4,
  boxShadow:
    "rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px",
  "& ul": {
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    width: "100%",
    "& > li": {
      cursor: "pointer",
      listStyle: "none",
      width: "100%",
      color: get(theme, "dropdownSelector.optionTextColor", "#000"),
      padding: "6px 15px",
      fontSize: 14,
      userSelect: "none",
      display: "flex",
      alignItems: "center",
      gap: 10,
      "& svg": {
        width: 16,
        height: 16,
      },
      '&:not([class*="Mui"])::before': {
        content: "' '",
      },
      "&.selected": {
        backgroundColor: get(
          theme,
          "dropdownSelector.selectedBGColor",
          "#D5D7D8",
        ),
        color: get(theme, "dropdownSelector.optionTextColor", "#000"),
      },
      "&.disabled": {
        cursor: "not-allowed",
        color: get(theme, "dropdownSelector.disabledText", "#E6EBEB"),
        "&:hover": {
          backgroundColor: get(
            theme,
            "dropdownSelector.backgroundColor",
            "#fff",
          ),
          color: get(theme, "dropdownSelector.disabledText", "#E6EBEB"),
        },
      },
      "&.hovered:not(.disabled)": {
        backgroundColor: get(theme, "dropdownSelector.hoverBG", "#E6EAEB"),
        color: get(theme, "dropdownSelector.hoverText", "#000"),
      },
    },
  },
  ...sx,
}));

const calcElementPosition = (anchorEl: (EventTarget & HTMLElement) | null) => {
  if (!anchorEl) {
    return {
      top: 0,
      left: 0,
      width: 0,
    };
  }

  const bounds = anchorEl.getBoundingClientRect();

  return {
    top: bounds.top + bounds.height,
    left: bounds.left,
    width: bounds.width,
  };
};

const DropdownSelector: FC<DropdownSelectorProps> = ({
  id,
  options,
  selectedOption = "",
  onSelect,
  hideTriggerAction,
  open,
  anchorEl = null,
}) => {
  const [coords, setCoords] = useState<CSSObject | null>(null);
  const [indexHover, setIndexHover] = useState<number>(0);

  const selectOption = () => {
    const option = options[indexHover];

    if (!option.disabled) {
      onSelect(option.value, option.extraValue || null, option.label);
    }

    hideTriggerAction();
  };

  useEnterKey(selectOption);
  useEscapeKey(hideTriggerAction);
  useArrowKeys((keyPressed) => {
    if (open) {
      if (keyPressed === "ArrowUp") {
        const prevIndex = indexHover - 1;
        const setIndexValue = prevIndex >= 0 ? prevIndex : 0;

        setIndexHover(setIndexValue);
      } else if (keyPressed === "ArrowDown") {
        const nextIndex = indexHover + 1;
        const setIndexValue =
          nextIndex <= options.length - 1 ? nextIndex : options.length - 1;

        setIndexHover(setIndexValue);
      }
    }
  });

  useEffect(() => {
    setIndexHover(0);
  }, [options]);

  useEffect(() => {
    if (open) {
      setCoords(calcElementPosition(anchorEl));
      return;
    }
    setCoords(null);
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      hideTriggerAction();
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
  });

  if (!open || !coords) {
    return null;
  }

  if (!anchorEl) {
    console.warn(
      "AnchorEl not set. Element will be rendered on the top of the page",
    );
  }

  return createPortal(
    <SelectorContainer onClick={hideTriggerAction}>
      <DropdownBlock id={id} sx={coords}>
        <ul>
          {options.map((option, index) => {
            return (
              <li
                className={`${
                  selectedOption === option.value ? "selected" : ""
                } ${option.disabled ? "disabled" : ""} ${
                  index === indexHover ? "hovered" : ""
                }`}
                onClick={selectOption}
                onMouseOver={() => {
                  setIndexHover(index);
                }}
                key={`option-${index}`}
              >
                {option.icon}
                {option.label}
              </li>
            );
          })}
        </ul>
      </DropdownBlock>
    </SelectorContainer>,
    document.body,
  );
};

export default DropdownSelector;
