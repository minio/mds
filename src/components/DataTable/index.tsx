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

import React, { Fragment, useMemo, useState } from "react";
import {
  AutoSizer,
  Column,
  InfiniteLoader,
  SortDirectionType,
  Table,
} from "react-virtualized";
import { css, useTheme } from "@emotion/react";
import get from "lodash/get";

import { overridePropsParse } from "../../global/utils";
import Columns3Icon from "../../icons/Columns3Icon";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Grid from "../Grid";
import Loader from "../Loader";
import ColumnsSelector from "./ColumnsSelector";
import {
  dataTableWrapperStyles,
  tableRowPredefStyles,
} from "./DataTable.styles";
import { DataTableProps, IColumns, ITableSortInfo } from "./DataTable.types";
import {
  calculateOptionsSize,
  elementActions,
  generateColumnsMap,
  selectWidth,
  sortRecords,
} from "./DataTable.utils";

// Main function to render the Table Wrapper
const DataTable = <T,>({
  itemActions,
  columns,
  onSelect,
  records = [] as T[],
  isLoading,
  loadingMessage = <h3>Loading...</h3>,
  entityName,
  selectedItems,
  idField,
  customEmptyMessage = "",
  customPaperHeight = "",
  columnsSelector = false,
  textSelectable = false,
  columnsShown = [],
  onColumnChange = () => {},
  infiniteScrollConfig,
  autoScrollToBottom = false,
  onSelectAll,
  rowStyle,
  parentClassName = "",
  disabled = false,
  sx,
  rowHeight = 36,
  sortEnabled = false,
  sortCallBack,
}: DataTableProps<T>) => {
  const theme = useTheme();

  const dataTableWrapper = dataTableWrapperStyles(
    theme,
    customPaperHeight,
    disabled,
    rowHeight,
  );
  const dataTablePredef = tableRowPredefStyles(theme);

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const [columnSelectorOpen, setColumnSelectorOpen] = useState<boolean>(false);
  const [currentSortColumn, setCurrentSortColumn] = useState<
    keyof T | undefined
  >(undefined);
  const [currentSortDirection, setCurrentSortDirection] =
    useState<SortDirectionType>("ASC");
  const [anchorEl, setAnchorEl] = useState<any>(null);

  const rowIDField = idField || ("" as keyof T);

  const findView = itemActions
    ? itemActions.find((el) => el.type === "view")
    : null;

  const manualSortEnabled =
    sortEnabled &&
    typeof sortEnabled === "object" &&
    !Array.isArray(sortEnabled);

  const clickAction = (rowItem: T, index: number) => {
    if (findView) {
      const valueClick = rowItem;

      let disabled = false;

      if (findView.isDisabled) {
        if (typeof findView.isDisabled === "boolean") {
          disabled = findView.isDisabled;
        } else {
          disabled = findView.isDisabled(rowItem);
        }
      }

      if (findView.onClick && !disabled) {
        findView.onClick(valueClick, index);
      }
    }
  };

  const openColumnsSelector = (event: { currentTarget: any }) => {
    setColumnSelectorOpen(!columnSelectorOpen);
    setAnchorEl(event.currentTarget);
  };

  const closeColumnSelector = () => {
    setColumnSelectorOpen(false);
    setAnchorEl(null);
  };

  const columnsSelection = (columns: IColumns<T>[]) => {
    return (
      <div
        css={{
          margin: "10px 0 0",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button
          id={"columns-selector"}
          icon={<Columns3Icon />}
          iconLocation={"end"}
          onClick={openColumnsSelector}
        >
          Columns
        </Button>
        {columnSelectorOpen && (
          <ColumnsSelector
            open={columnSelectorOpen}
            closeTriggerAction={closeColumnSelector}
            onSelect={(label) => onColumnChange(label)}
            columns={columns}
            selectedOptionIDs={columnsShown}
            anchorEl={anchorEl}
          />
        )}
      </div>
    );
  };

  const onSortClick = (sort: ITableSortInfo) => {
    const newSortDirection = get(
      sort,
      "sortDirection",
      "DESC",
    ) as SortDirectionType;
    setCurrentSortColumn(sort.sortBy as keyof T);
    setCurrentSortDirection(newSortDirection);

    if (sortCallBack) {
      sortCallBack(sort);
    }
  };

  let tableSort: ((val: ITableSortInfo) => any) | undefined = undefined;
  let tableSortBy: keyof T | undefined = undefined;
  let tableSortDirection: SortDirectionType | undefined = undefined;

  if (sortEnabled) {
    if (manualSortEnabled) {
      tableSort = sortEnabled.onSortClick;
      tableSortBy = sortEnabled.currentSort as keyof T;
      tableSortDirection = sortEnabled.currentDirection;
    } else {
      tableSort = onSortClick;
      tableSortBy = currentSortColumn;
      tableSortDirection = currentSortDirection;
    }
  }

  let sortedRecords = records;

  if (sortEnabled && currentSortColumn && !manualSortEnabled) {
    sortedRecords = sortRecords(
      records,
      currentSortColumn as string,
      currentSortDirection,
    );
  }

  return (
    <Grid item xs={12} className={`data-table ${parentClassName}`}>
      <div css={[dataTableWrapper, overrideThemes]}>
        {isLoading && (
          <Grid container className={"loadingBox"}>
            <Grid item xs={12} style={{ textAlign: "center" }}>
              {loadingMessage}
            </Grid>
            <Grid
              item
              xs={12}
              sx={{
                textAlign: "center",
              }}
            >
              <Loader />
            </Grid>
          </Grid>
        )}

        {columnsSelector && !isLoading && sortedRecords.length > 0 && (
          <Fragment>{columnsSelection(columns)}</Fragment>
        )}
        {sortedRecords && !isLoading && sortedRecords.length > 0 ? (
          <InfiniteLoader
            isRowLoaded={({ index }) => !!sortedRecords[index]}
            loadMoreRows={
              infiniteScrollConfig
                ? infiniteScrollConfig.loadMoreRecords
                : () => new Promise(() => true)
            }
            rowCount={
              infiniteScrollConfig
                ? infiniteScrollConfig.recordsCount
                : sortedRecords.length
            }
          >
            {({ onRowsRendered, registerChild }) => (
              <AutoSizer>
                {({ width, height }: any) => {
                  const optionsWidth = calculateOptionsSize(
                    width,
                    itemActions
                      ? itemActions.filter((el) => el.type !== "view").length
                      : 0,
                  );
                  const hasSelect: boolean = !!(onSelect && selectedItems);
                  const hasOptions: boolean = !!(
                    (itemActions && itemActions.length > 1) ||
                    (itemActions &&
                      itemActions.length === 1 &&
                      itemActions[0].type !== "view")
                  );
                  return (
                    <Table
                      ref={registerChild}
                      disableHeader={false}
                      headerClassName={"headerItem"}
                      headerHeight={36}
                      height={height}
                      noRowsRenderer={() => (
                        <Fragment>
                          {customEmptyMessage !== ""
                            ? customEmptyMessage
                            : `There are no ${entityName || "items"} yet.`}
                        </Fragment>
                      )}
                      overscanRowCount={10}
                      rowHeight={rowHeight}
                      width={width}
                      rowCount={sortedRecords.length}
                      rowGetter={({ index }) => sortedRecords[index]}
                      onRowClick={({ rowData, index }) =>
                        clickAction(rowData, index)
                      }
                      rowClassName={(r) =>
                        `rowLine ${findView ? "canClick" : ""} ${
                          !findView && textSelectable ? "canSelectText" : ""
                        } ${rowStyle ? rowStyle(r) : ""}`
                      }
                      onRowsRendered={onRowsRendered}
                      sort={tableSort}
                      sortBy={tableSortBy ? String(tableSortBy) : undefined}
                      sortDirection={tableSortDirection}
                      scrollToIndex={
                        autoScrollToBottom ? sortedRecords.length - 1 : -1
                      }
                      rowStyle={(r) => {
                        if (rowStyle) {
                          const returnElement = rowStyle(r);

                          if (typeof returnElement === "string") {
                            return get(dataTablePredef, returnElement, {});
                          }

                          return returnElement;
                        }

                        return {};
                      }}
                    >
                      {hasSelect && (
                        <Column
                          headerRenderer={() => (
                            <Fragment>
                              {onSelectAll ? (
                                <div className={"checkAllWrapper"}>
                                  <Checkbox
                                    onChange={onSelectAll}
                                    value="all"
                                    id={"selectAll"}
                                    name={"selectAll"}
                                    checked={
                                      selectedItems?.length ===
                                      sortedRecords.length
                                    }
                                  />
                                </div>
                              ) : (
                                <Fragment>Select</Fragment>
                              )}
                            </Fragment>
                          )}
                          dataKey={`select-${String(rowIDField)}`}
                          width={selectWidth}
                          disableSort
                          cellRenderer={({ rowData }) => {
                            const isSelected = selectedItems
                              ? selectedItems.includes(rowData[rowIDField])
                              : false;

                            return (
                              <Checkbox
                                value={rowData[rowIDField]}
                                color="primary"
                                className="TableCheckbox"
                                checked={isSelected}
                                onChange={onSelect}
                                onClick={(e) => {
                                  e.stopPropagation();
                                }}
                              />
                            );
                          }}
                        />
                      )}
                      {generateColumnsMap(
                        columns,
                        width,
                        optionsWidth,
                        hasSelect,
                        hasOptions,
                        selectedItems || [],
                        rowIDField,
                        columnsSelector,
                        columnsShown,
                        sortEnabled,
                        tableSortBy,
                        tableSortDirection,
                      )}
                      {hasOptions && (
                        <Column
                          dataKey={"column-options"}
                          width={optionsWidth}
                          headerClassName="optionsAlignment"
                          className="optionsAlignment"
                          cellRenderer={({ rowData }) => {
                            const isSelected = selectedItems
                              ? selectedItems.includes(rowData[rowIDField])
                              : false;
                            return elementActions(
                              itemActions || [],
                              rowData,
                              isSelected,
                            );
                          }}
                        />
                      )}
                    </Table>
                  );
                }}
              </AutoSizer>
            )}
          </InfiniteLoader>
        ) : (
          <Fragment>
            {!isLoading && (
              <div id={"empty-results"}>
                {customEmptyMessage !== ""
                  ? customEmptyMessage
                  : `There are no ${entityName || "items"} yet.`}
              </div>
            )}
          </Fragment>
        )}
      </div>
    </Grid>
  );
};

export default DataTable;
