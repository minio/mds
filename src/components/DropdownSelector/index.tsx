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

import { CSSProperties, FC, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { css, useTheme } from "@emotion/react";
import debounce from "lodash/debounce";

import { useArrowKeys, useEnterKey, useEscapeKey } from "../../global/hooks";
import SelectorContainer from "../../global/SelectorContainer";
import {
  dropdownBlockStyles,
  dropdownItemStyles,
} from "./DropdownSelector.styles";
import { DropdownSelectorProps } from "./DropdownSelector.types";

const calcElementPosition = (
  anchorEl: (EventTarget & HTMLElement) | null,
  anchorOrigin: "start" | "end",
  useAnchorWidth: boolean,
): CSSProperties => {
  if (!anchorEl) {
    return {
      top: 0,
      left: 0,
      width: 0,
    };
  }

  const bounds = anchorEl.getBoundingClientRect();

  const returnItem: CSSProperties = { top: bounds.top + bounds.height };

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

  //max height of dropdown

  const defaultMaxHeight = 450;
  returnItem.maxHeight = defaultMaxHeight;

  const calcHeight =
    window.innerHeight - bounds.top - bounds.height - defaultMaxHeight;

  if (calcHeight < 0) {
    returnItem.maxHeight = window.innerHeight - bounds.top - bounds.height - 40;
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
  const theme = useTheme();

  const [coords, setCoords] = useState<CSSProperties | null>(null);
  const [indexHover, setIndexHover] = useState<number>(0);

  const dropdownBlock = dropdownBlockStyles(theme);

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
  }, [anchorEl, anchorOrigin, open, useAnchorWidth]);

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
      <div
        css={[
          dropdownBlock,
          useAnchorWidth ? css({ minWidth: 160 }) : {},
          forSelectInput ? css({ border: 0 }) : {},
        ]}
        id={id}
        style={coords}
      >
        {options.map((option, index) => {
          const dropdownItem = dropdownItemStyles(
            theme,
            !!option.icon,
            !!option.indicator,
          );
          return (
            <div
              css={dropdownItem}
              className={`${
                selectedOption === option.value ? "selected" : ""
              } ${option.disabled ? "disabled" : ""} ${
                index === indexHover ? "hovered" : ""
              } ${option.danger ? "danger" : ""}`}
              onClick={selectOption}
              onMouseOver={() => {
                setIndexHover(index);
              }}
              key={`option-${index}`}
            >
              {option.icon}
              <div className={"truncate"}>{option.label}</div>
              {option.indicator}
            </div>
          );
        })}
      </div>
    </SelectorContainer>,
    document.body,
  );
};

export default DropdownSelector;
