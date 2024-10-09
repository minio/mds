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

import React, { CSSProperties, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTheme } from "@emotion/react";
import debounce from "lodash/debounce";

import SelectorContainer from "../../global/SelectorContainer";
import Checkbox from "../Checkbox";
import { selectorBoxStyles } from "./DataTable.styles";
import { ColumnSelectorProps, IColumns } from "./DataTable.types";

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

const ColumnsSelector = <T,>({
  columns,
  selectedOptionIDs,
  onSelect,
  closeTriggerAction,
  open,
  anchorEl = null,
}: ColumnSelectorProps<T>): JSX.Element | null => {
  const theme = useTheme();

  const selectorStyles = selectorBoxStyles(theme);

  const [coords, setCoords] = useState<CSSProperties | null>(null);

  useEffect(() => {
    if (open) {
      setCoords(calcElementPosition(anchorEl));
      return;
    }
    setCoords(null);
  }, [anchorEl, open]);

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

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", () => {
        scrollResize(anchorEl);
      });
    };
  }, [anchorEl, closeTriggerAction]);

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
      <div
        css={[selectorStyles]}
        style={coords}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div className={"columnsSelectorTitle"}>Shown Columns</div>
        <div className={"columnsSelectorContainer"}>
          {columns.map((column: IColumns<T>) => {
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
                  onSelect((column.elementKey as keyof T) || ("" as keyof T));
                }}
                id={`chbox-${column.label}`}
                name={`chbox-${column.label}`}
                value={column.label}
              />
            );
          })}
        </div>
      </div>
    </SelectorContainer>,
    document.body,
  );
};

export default ColumnsSelector;
