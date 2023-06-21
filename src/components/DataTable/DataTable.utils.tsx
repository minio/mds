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

import React, { Fragment } from "react";
import get from "lodash/get";
import isString from "lodash/isString";
import { Column } from "react-virtualized";
import { IColumns, ItemActions } from "./DataTable.types";
import ArrowDropUpIcon from "../Icons/ArrowDropUp";
import ArrowDropDownIcon from "../Icons/ArrowDropDown";
import Loader from "../Loader/Loader";
import TableActionButton from "./TableActionButton";
import Box from "../Box/Box";

export const selectWidth = 45;

// Function to render elements in table
const subRenderFunction = (
  rowData: any,
  column: IColumns,
  isSelected: boolean
) => {
  const itemElement = isString(rowData)
    ? rowData
    : get(rowData, column.elementKey || "", null); // If the element is just a string, we render it as it is
  const renderConst = column.renderFullObject ? rowData : itemElement;

  const renderElement = column.renderFunction
    ? column.renderFunction(renderConst)
    : renderConst; // If render function is set, we send the value to the function.

  return (
    <Fragment>
      <span className={isSelected ? "selected" : ""}>{renderElement}</span>
    </Fragment>
  );
};

// Function to calculate common column width for elements with no with size
const calculateColumnRest = (
  columns: IColumns[],
  containerWidth: number,
  actionsWidth: number,
  hasSelect: boolean,
  hasActions: boolean,
  columnsSelector: boolean,
  columnsShown: string[]
) => {
  if (columns) {
    let colsItems = [...columns];

    if (columnsSelector) {
      colsItems = columns.filter((column) =>
        columnsShown.includes(column.elementKey!)
      );
    }

    let initialValue = containerWidth;

    if (hasSelect) {
      initialValue -= selectWidth;
    }

    if (hasActions) {
      initialValue -= actionsWidth;
    }

    let freeSpacing = colsItems.reduce((total, currValue) => {
      return currValue.width ? total - currValue.width : total;
    }, initialValue);

    return freeSpacing / colsItems.filter((el) => !el.width).length;
  }

  return containerWidth;
};

// Function that renders Columns in table
export const generateColumnsMap = (
  columns: IColumns[],
  containerWidth: number,
  actionsWidth: number,
  hasSelect: boolean,
  hasActions: boolean,
  selectedItems: string[],
  idField: string,
  columnsSelector: boolean,
  columnsShown: string[],
  sortColumn: string,
  sortDirection: "ASC" | "DESC" | undefined
) => {
  const commonRestWidth = calculateColumnRest(
    columns,
    containerWidth,
    actionsWidth,
    hasSelect,
    hasActions,
    columnsSelector,
    columnsShown
  );
  return columns.map((column: IColumns, index: number) => {
    if (columnsSelector && !columnsShown.includes(column.elementKey!)) {
      return null;
    }

    const disableSort = column.enableSort ? !column.enableSort : true;

    return (
      // @ts-ignore
      <Column
        key={`col-tb-${index.toString()}`}
        dataKey={column.elementKey || `column-${index}`}
        headerClassName={`titleHeader ${
          column.headerTextAlign ? `text-${column.headerTextAlign}` : ""
        }`}
        headerRenderer={() => (
          <Box
            sx={{
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {sortColumn === column.elementKey && (
              <Fragment>
                {sortDirection === "ASC" ? (
                  <ArrowDropUpIcon />
                ) : (
                  <ArrowDropDownIcon />
                )}
              </Fragment>
            )}
            {column.label}
          </Box>
        )}
        className={
          column.contentTextAlign ? `text-${column.contentTextAlign}` : ""
        }
        cellRenderer={({ rowData }) => {
          const isSelected = selectedItems
            ? selectedItems.includes(
                isString(rowData) ? rowData : `${rowData[idField]}`
              )
            : false;
          return subRenderFunction(rowData, column, isSelected);
        }}
        width={column.width || commonRestWidth}
        disableSort={disableSort}
        defaultSortDirection={"ASC"}
      />
    );
  });
};

// Function to render the action buttons
export const elementActions = (
  actions: ItemActions[],
  valueToSend: any,
  selected: boolean,
  idField: string
) => {
  return actions.map((action: ItemActions, index: number) => {
    if (action.type === "view") {
      return null;
    }

    const vlSend =
      typeof valueToSend === "string" ? valueToSend : valueToSend[idField];

    let disabled = false;

    if (action.disableButtonFunction) {
      if (action.disableButtonFunction(vlSend)) {
        disabled = true;
      }
    }

    if (action.showLoaderFunction) {
      if (action.showLoaderFunction(vlSend)) {
        return (
          <div className={"progress-enabled"}>
            <Loader
              style={{ width: 18, height: 18 }}
              key={`actions-loader-${action.type}-${index.toString()}`}
            />
          </div>
        );
      }
    }

    return (
      <TableActionButton
        label={action.label}
        type={action.type}
        onClick={action.onClick}
        valueToSend={valueToSend}
        selected={selected}
        key={`actions-${action.type}-${index.toString()}`}
        idField={idField}
        sendOnlyId={!!action.sendOnlyId}
        disabled={disabled}
      />
    );
  });
};

// Function to calculate the options column width according elements inside
export const calculateOptionsSize = (
  containerWidth: number,
  totalOptions: number
) => {
  const minContainerSize = 80;
  const sizeOptions = totalOptions * 45 + 15;

  if (sizeOptions < minContainerSize) {
    return minContainerSize;
  }

  if (sizeOptions > containerWidth) {
    return containerWidth;
  }

  return sizeOptions;
};
