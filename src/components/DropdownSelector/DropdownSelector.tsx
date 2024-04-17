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
  DropdownItemProps,
  DropdownSelectorProps,
} from "./DropdownSelector.types";
import get from "lodash/get";
import { useArrowKeys, useEnterKey, useEscapeKey } from "../../global/hooks";
import SelectorContainer from "../../global/SelectorContainer";
import Box from "../Box/Box";
import { lightV2 } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";

const DropdownBlock = styled.div<DropDownBlockProps>(
  ({ theme, sx, useAnchorWidth, forSelectInput }) => ({
    position: "absolute",
    display: "grid",
    gridTemplateColumns: "100%",
    backgroundColor: get(
      theme,
      "dropdownSelector.backgroundColor",
      lightV2.white,
    ),
    padding: 8,
    maxHeight: 450,
    minWidth: useAnchorWidth ? 160 : 0,
    overflowX: "hidden",
    overflowY: "auto",
    borderRadius: forSelectInput ? 16 : 12,
    border: forSelectInput
      ? 0
      : `1px solid ${get(theme, "dropdownSelector.border", lightV2.disabledGrey)}`,
    boxShadow:
      "0px 2px 8px 0px rgba(156, 163, 175, 0.15), 0px 4px 12px 0px rgba(156, 163, 175, 0.25)",
    "& ul": {
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    ...overridePropsParse(sx, theme),
  }),
);

const DropdownItem = styled.div<
  DropdownItemProps & React.HTMLAttributes<HTMLDivElement>
>(({ theme, icon, label, indicator }) => {
  let gridColumns = "";

  if (!!icon) {
    gridColumns += "16px ";
  }

  gridColumns += "1fr ";

  if (indicator) {
    gridColumns += "16px";
  }

  return {
    cursor: "pointer",
    listStyle: "none",
    width: "100%",
    color: get(theme, "dropdownSelector.optionTextColor", "#000"),
    padding: "6px 10px",
    fontSize: 14,
    fontWeight: 600,
    lineHeight: "18px",
    letterSpacing: "0.16px",
    userSelect: "none",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
    whiteSpace: "nowrap",
    borderRadius: 6,
    display: "grid",
    gridTemplateColumns: gridColumns,
    "& svg": {
      width: 16,
      height: 16,
      minWidth: 16,
      minHeight: 16,
    },
    "& .truncate": {
      whiteSpace: "nowrap",
      overflow: "hidden",
      textOverflow: "ellipsis",
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
        backgroundColor: get(theme, "dropdownSelector.backgroundColor", "#fff"),
        color: get(theme, "dropdownSelector.disabledText", "#E6EBEB"),
      },
    },
    "&.hovered:not(.disabled)": {
      backgroundColor: get(theme, "dropdownSelector.hoverBG", "#E6EAEB"),
      color: get(theme, "dropdownSelector.hoverText", "#000"),
    },
  };
});

const calcElementPosition = (
  anchorEl: (EventTarget & HTMLElement) | null,
  anchorOrigin: "start" | "end",
  useAnchorWidth: boolean,
) => {
  if (!anchorEl) {
    return {
      top: 0,
      left: 0,
      width: 0,
    };
  }

  const bounds = anchorEl.getBoundingClientRect();

  let returnItem: CSSObject = { top: bounds.top + bounds.height };

  if (anchorOrigin === "start") {
    returnItem.left = bounds.left;
    returnItem.transform = "translateX(0%)";
  } else if (anchorOrigin === "end") {
    returnItem.left = bounds.left + bounds.width;
    returnItem.transform = "translateX(-100%)";
  }

  if (useAnchorWidth) {
    returnItem.width = bounds.width;
  }

  return returnItem;
};

const DropdownSelector: FC<DropdownSelectorProps> = ({
  id,
  options,
  selectedOption = "",
  onSelect,
  hideTriggerAction,
  open,
  anchorEl = null,
  useAnchorWidth = false,
  forSelectInput = false,
  anchorOrigin = "start",
}) => {
  const [coords, setCoords] = useState<CSSObject | null>(null);
  const [indexHover, setIndexHover] = useState<number>(0);

  const selectOption = () => {
    const option = options[indexHover];

    if (!option.disabled) {
      onSelect(
        option.value,
        option.extraValue || null,
        option.label,
        indexHover,
      );
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
      setCoords(calcElementPosition(anchorEl, anchorOrigin, useAnchorWidth));
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
      setCoords(calcElementPosition(anchorEl, anchorOrigin, useAnchorWidth));
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
      <DropdownBlock
        id={id}
        sx={coords}
        useAnchorWidth={useAnchorWidth}
        forSelectInput={forSelectInput}
      >
        {options.map((option, index) => {
          return (
            <DropdownItem
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
              label={option.label}
              icon={option.icon}
              indicator={option.indicator}
            >
              {option.icon}
              <Box className={"truncate"}>{option.label}</Box>
              {option.indicator}
            </DropdownItem>
          );
        })}
      </DropdownBlock>
    </SelectorContainer>,
    document.body,
  );
};

export default DropdownSelector;
