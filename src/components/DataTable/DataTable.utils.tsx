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
import { Column, SortDirectionType } from "react-virtualized";
import isPlainObject from "lodash/isPlainObject";

import Box from "../Box/Box";
import ChevronDownIcon from "../Icons/NewDesignIcons/ChevronDownIcon";
import ChevronUpIcon from "../Icons/NewDesignIcons/ChevronUpIcon";
import Loader from "../Loader/Loader";
import { IColumns, ISortConfig, ItemActions } from "./DataTable.types";
import TableActionButton from "./TableActionButton";

export const selectWidth = 45;

// Function to render elements in table
const subRenderFunction = <T,>(
  rowData: T,
  column: IColumns<T>,
  isSelected: boolean,
) => {
  let content: React.ReactNode;

  if (column.renderFullObjectFunction) {
    content = column.renderFullObjectFunction(rowData);
  } else if (column.renderFunction && column.elementKey) {
    const value = rowData[column.elementKey];
    content = column.renderFunction(value);
  } else if (column.elementKey) {
    const value = rowData[column.elementKey];
    content = value?.toString() ?? "-";
  } else {
    content = "-";
  }

  return <span className={isSelected ? "selected" : ""}>{content}</span>;
};

// Function to calculate common column width for elements with no with size
const calculateColumnRest = <T,>(
  columns: IColumns<T>[],
  containerWidth: number,
  actionsWidth: number,
  hasSelect: boolean,
  hasActions: boolean,
  columnsSelector: boolean,
  columnsShown: string[],
) => {
  if (columns) {
    let colsItems = [...columns];

    if (columnsSelector) {
      colsItems = columns.filter((column) =>
        columnsShown.includes(String(column.elementKey!)),
      );
    }

    let initialValue = containerWidth;

    if (hasSelect) {
      initialValue -= selectWidth;
    }

    if (hasActions) {
      initialValue -= actionsWidth;
    }

    const freeSpacing = colsItems.reduce((total, currValue) => {
      return currValue.width ? total - currValue.width : total;
    }, initialValue);

    return freeSpacing / colsItems.filter((el) => !el.width).length;
  }

  return containerWidth;
};

// Function that renders Columns in table
export const generateColumnsMap = <T,>(
  columns: IColumns<T>[],
  containerWidth: number,
  actionsWidth: number,
  hasSelect: boolean,
  hasActions: boolean,
  selectedItems: Array<keyof T> | string[],
  idField: keyof T,
  columnsSelector: boolean,
  columnsShown: Array<keyof T>,
  sortColumns: boolean | Array<keyof T> | ISortConfig,
  currentSortColumn: keyof T | undefined,
  currentSortDirection: "ASC" | "DESC" | undefined,
) => {
  const manualSortEnabled =
    sortColumns &&
    typeof sortColumns === "object" &&
    !Array.isArray(sortColumns);

  const commonRestWidth = calculateColumnRest(
    columns,
    containerWidth,
    actionsWidth,
    hasSelect,
    hasActions,
    columnsSelector,
    columnsShown.map((key) => key.toString()), // Convert keys to strings
  );

  return columns.map((column: IColumns<T>, index: number) => {
    const columnKey = column.elementKey as keyof T;

    if (columnsSelector && !columnsShown.includes(columnKey)) {
      return null;
    }

    // Manual Column Sort state, Enabled by default.
    const manualColumnSortEnabled =
      column.enableSort !== undefined ? column.enableSort : true;

    const disableSort =
      !sortColumns ||
      (manualSortEnabled && !manualColumnSortEnabled) ||
      (Array.isArray(sortColumns) && !sortColumns.includes(columnKey));

    return (
      <Column
        key={`col-tb-${index.toString()}`}
        dataKey={String(column.elementKey) || `column-${index}`}
        headerClassName={`titleHeader ${
          column.headerTextAlign ? `text-${column.headerTextAlign}` : ""
        }`}
        headerRenderer={() => (
          <Box
            sx={{
              display: "flex",
              width: "100%",
              "& svg": {
                width: 12,
                height: 12,
                minWidth: 12,
                minHeight: 12,
              },
            }}
          >
            <Box
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {column.label}
            </Box>
            {sortColumns ||
            (Array.isArray(sortColumns) && sortColumns.includes(columnKey)) ? (
              <Fragment>
                {currentSortColumn === columnKey ||
                (columns.length === 1 && currentSortColumn === "column-0") ? (
                  <Fragment>
                    {currentSortDirection === "ASC" ? (
                      <ChevronUpIcon />
                    ) : (
                      <ChevronDownIcon />
                    )}
                  </Fragment>
                ) : null}
              </Fragment>
            ) : null}
          </Box>
        )}
        className={
          column.contentTextAlign ? `text-${column.contentTextAlign}` : ""
        }
        cellRenderer={({ rowData }) => {
          const isSelected = selectedItems
            ? selectedItems.includes(rowData[idField])
            : false;
          return subRenderFunction(rowData as T, column, isSelected);
        }}
        width={column.width || commonRestWidth}
        disableSort={disableSort}
        defaultSortDirection={"ASC"}
      />
    );
  });
};

// Function to render the action buttons
export const elementActions = <T,>(
  actions: ItemActions<T>[],
  valueToSend: any,
  selected: boolean,
) => {
  return actions.map((action: ItemActions<T>, index: number) => {
    if (action.type === "view") {
      return null;
    }

    let disabled = false;

    if (action.isDisabled) {
      if (typeof action.isDisabled === "boolean") {
        disabled = action.isDisabled;
      } else {
        disabled = action.isDisabled(valueToSend);
      }
    }

    if (action.showLoader) {
      if (
        (typeof action.showLoader === "boolean" && action.showLoader) ||
        action.showLoader(valueToSend)
      ) {
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

    let tooltip = "";

    if (action.tooltip) {
      if (typeof action.tooltip === "function") {
        tooltip = action.tooltip(valueToSend);
      } else {
        tooltip = action.tooltip ?? "";
      }
    }

    return (
      <TableActionButton
        tooltip={tooltip}
        type={action.type}
        onClick={action.onClick}
        valueToSend={valueToSend}
        selected={selected}
        key={`actions-${action.type}-${index.toString()}`}
        disabled={disabled}
      />
    );
  });
};

// Function to calculate the options column width according elements inside
export const calculateOptionsSize = (
  containerWidth: number,
  totalOptions: number,
) => {
  const minContainerSize = 36;
  const sizeOptions = totalOptions * 36;

  if (sizeOptions < minContainerSize) {
    return minContainerSize;
  }

  if (sizeOptions > containerWidth) {
    return containerWidth;
  }

  return sizeOptions;
};

// Function to sort records in the list
export const sortRecords = (
  records: any[],
  sortColumn: string | undefined,
  sortDirection: SortDirectionType,
) => {
  const sortedRecords = records;

  if (records.length === 0) {
    return records;
  }

  // Records are objects
  if (isPlainObject(records[0]) && sortColumn !== undefined) {
    switch (sortDirection) {
      case "ASC":
        sortedRecords.sort((a, b) => {
          if (a[sortColumn] > b[sortColumn]) {
            return 1;
          }
          if (a[sortColumn] < b[sortColumn]) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        break;
      case "DESC":
        sortedRecords.sort((a, b) => {
          if (a[sortColumn] < b[sortColumn]) {
            return 1;
          }
          if (a[sortColumn] > b[sortColumn]) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        break;
    }
  } else {
    // Record is plain array
    switch (sortDirection) {
      case "ASC":
        sortedRecords.sort((a, b) => {
          if (a > b) {
            return 1;
          }
          if (a < b) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        break;
      case "DESC":
        sortedRecords.sort((a, b) => {
          if (a < b) {
            return 1;
          }
          if (a > b) {
            return -1;
          }
          // a must be equal to b
          return 0;
        });
        break;
    }
  }

  return sortedRecords;
};
