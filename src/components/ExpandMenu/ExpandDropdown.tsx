// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
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
import styled, { CSSObject } from "styled-components";

import { useEscapeKey } from "../../global/hooks";
import SelectorContainer from "../../global/SelectorContainer";
import { themeColors } from "../../global/themeColors";
import { lightV2 } from "../../global/themes";
import { overridePropsParse, radioVariants } from "../../global/utils";
import { expandMenuOptionStyles } from "../../utils/GlobalUtils";
import { DropdownMainProps, ExpandDropdownProps } from "./ExpandMenu.types";

const DropdownBlock = styled.div<DropdownMainProps>(
  ({ theme, sx, forInputOptions }) => ({
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
    minWidth: forInputOptions ? "initial" : 180,
    overflowX: "hidden",
    overflowY: "auto",
    borderRadius: radioVariants.borderRadiusSM,
    border: `1px solid ${get(theme, "dropdownSelector.border", lightV2.disabledGrey)}`,
    boxShadow:
      "0px 2px 8px 0px rgba(156, 163, 175, 0.15), 0px 4px 12px 0px rgba(156, 163, 175, 0.25)",
    marginTop: forInputOptions ? 0 : 10,
    "& ul": {
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      width: "100%",
    },
    "& button": expandMenuOptionStyles(theme),
    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      background: themeColors["Color/Base/Shark/3"].lightMode, // Hardcoded color until we decide the correct style for scrollbars
      borderRadius: "5px",
    },

    "&::-webkit-scrollbar-track": {
      background: "transparent",
      borderRadius: 0,
    },
    ...overridePropsParse(sx, theme),
  }),
);

const calcElementPosition = (
  anchorEl: (EventTarget & HTMLElement) | null,
  anchorOrigin: "start" | "end" | "middle",
) => {
  if (!anchorEl) {
    return {
      top: 0,
      left: 0,
      width: 0,
    };
  }

  const bounds = anchorEl.getBoundingClientRect();

  const returnItem: CSSObject = { top: bounds.top + bounds.height };

  switch (anchorOrigin) {
    case "start":
      returnItem.left = bounds.left;
      returnItem.transform = "translateX(0%)";
      break;
    case "end":
      returnItem.left = bounds.left + bounds.width;
      returnItem.transform = "translateX(-100%)";
      break;
    case "middle":
      returnItem.left = bounds.right - bounds.width / 2;
      returnItem.transform = "translateX(-50%)";
      break;
  }

  return returnItem;
};

const DropdownSelector: FC<ExpandDropdownProps> = ({
  hideTriggerAction,
  open,
  anchorEl = null,
  anchorOrigin = "start",
  forInputOptions = false,
  children,
}) => {
  const [coords, setCoords] = useState<CSSObject | null>(null);

  useEscapeKey(hideTriggerAction);

  useEffect(() => {
    if (open) {
      setCoords(calcElementPosition(anchorEl, anchorOrigin));
      return;
    }
    setCoords(null);
  }, [anchorEl, anchorOrigin, open]);

  useEffect(() => {
    const handleResize = () => {
      hideTriggerAction();
    };

    const scrollResize = debounce((anchorEl) => {
      if (!anchorEl || !anchorEl.getBoundingClientRect()) {
        return;
      }
      setCoords(calcElementPosition(anchorEl, anchorOrigin));
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
      <DropdownBlock sx={coords} forInputOptions={forInputOptions}>
        {children}
      </DropdownBlock>
    </SelectorContainer>,
    document.body,
  );
};

export default DropdownSelector;
