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
import debounce from "lodash/debounce";
import { createPortal } from "react-dom";
import {
  ColumnSelectorConstructProps,
  ColumnSelectorProps,
  IColumns,
} from "./DataTable.types";
import { lightColors } from "../../global/themes";
import Checkbox from "../Checkbox/Checkbox";
import Box from "../Box/Box";
import SelectorContainer from "../../global/SelectorContainer";

const SelectorBox = styled.div<ColumnSelectorConstructProps>(
  ({ theme, sx }) => ({
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    backgroundColor: get(
      theme,
      "dropdownSelector.backgroundColor",
      lightColors.white,
    ),
    border: `1px solid ${get(theme, "borderColor", lightColors.borderColor)}`,
    padding: "10px 10px",

    minWidth: 150,
    borderRadius: 4,
    boxShadow:
      "rgba(0, 0, 0, 0.2) 0px 11px 15px -7px, rgba(0, 0, 0, 0.14) 0px 24px 38px 3px, rgba(0, 0, 0, 0.12) 0px 9px 46px 8px",
    "& .columnsSelectorTitle": {
      fontWeight: "bold",
      padding: "0 0 5px",
      borderBottom: `1px solid ${get(
        theme,
        "borderColor",
        lightColors.borderColor,
      )}`,
      marginBottom: 5,
      color: get(theme, "fontColor", lightColors.defaultFontColor),
    },
    "& .columnsSelectorContainer": {
      display: "flex",
      flexDirection: "column",
      gap: 5,
      maxHeight: 250,
      overflowY: "auto",
    },
    ...sx,
  }),
);

const calcElementPosition = (anchorEl: (EventTarget & HTMLElement) | null) => {
  if (!anchorEl) {
    return {
      top: 0,
      right: 0,
    };
  }

  const bounds = anchorEl.getBoundingClientRect();
  const windowWidth = document.documentElement.offsetWidth;

  return {
    top: bounds.top + bounds.height,
    right: windowWidth - bounds.right,
  };
};

const ColumnsSelector: FC<ColumnSelectorProps> = ({
  columns,
  selectedOptionIDs,
  onSelect,
  closeTriggerAction,
  open,
  anchorEl = null,
}) => {
  const [coords, setCoords] = useState<CSSObject | null>(null);

  useEffect(() => {
    if (open) {
      setCoords(calcElementPosition(anchorEl));
      return;
    }
    setCoords(null);
  }, [open]);

  useEffect(() => {
    const handleResize = () => {
      closeTriggerAction();
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
    <SelectorContainer onClick={closeTriggerAction}>
      <SelectorBox
        sx={coords}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <Box className={"columnsSelectorTitle"}>Shown Columns</Box>
        <Box className={"columnsSelectorContainer"}>
          {columns.map((column: IColumns) => {
            return (
              <Checkbox
                key={`tableColumns-${column.label}`}
                label={column.label}
                checked={
                  selectedOptionIDs.findIndex(
                    (element) => element === column.elementKey,
                  ) >= 0
                }
                onChange={() => {
                  onSelect(column.elementKey || "");
                }}
                id={`chbox-${column.label}`}
                name={`chbox-${column.label}`}
                value={column.label}
              />
            );
          })}
        </Box>
      </SelectorBox>
    </SelectorContainer>,
    document.body,
  );
};

export default ColumnsSelector;
