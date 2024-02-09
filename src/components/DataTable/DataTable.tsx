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

import React, { FC, Fragment, useState } from "react";
import {
  AutoSizer,
  Column,
  InfiniteLoader,
  SortDirectionType,
  Table,
} from "react-virtualized";
import styled from "styled-components";
import get from "lodash/get";
import isString from "lodash/isString";
import Checkbox from "../Checkbox/Checkbox";
import Loader from "../Loader/Loader";
import Grid from "../Grid/Grid";
import {
  DataTableProps,
  DataTableWrapperProps,
  IColumns,
  ITableSortInfo,
} from "./DataTable.types";
import {
  calculateOptionsSize,
  elementActions,
  generateColumnsMap,
  selectWidth,
  sortRecords,
} from "./DataTable.utils";
import ViewColumnIcon from "../Icons/ViewColumnIcon";
import Box from "../Box/Box";
import Button from "../Button/Button";
import ColumnsSelector from "./ColumnsSelector";

const DataTableWrapper = styled.div<DataTableWrapperProps>(
  ({ theme, customPaperHeight, disabled, noBackground, sx, rowHeight }) => ({
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
    padding: "0 16px 8px",
    boxShadow: "none",
    border: `${
      disabled
        ? get(theme, "dataTable.disabledBorder", "#E2E2E2")
        : get(theme, "dataTable.border", "#E2E2E2")
    } 1px solid`,
    borderRadius: 3,
    minHeight: 200,
    overflowY: "scroll",
    position: "relative",
    height: customPaperHeight || "calc(100vh - 205px)",
    backgroundColor: disabled
      ? get(theme, "dataTable.disabledBG", "transparent")
      : "transparent",
    "&.noBackground": {
      backgroundColor: "transparent",
      border: 0,
    },
    "& .loadingBox": {
      padding: "100px 0",
    },
    "& .overlayColumnSelection": {
      position: "absolute",
      right: 0,
      top: 0,
      "& .popoverContent": {
        maxHeight: 250,
        overflowY: "auto",
        padding: "0 10px 10px",
        "& .shownColumnsLabel": {
          color: get(theme, "mainGrey", "#000"),
          fontSize: 12,
          padding: 10,
          borderBottom: `${get(
            theme,
            "dataTable.border",
            "#E2E2E2",
          )} 1px solid`,
          width: "100%",
        },
      },
    },
    "&::-webkit-scrollbar": {
      width: 0,
      height: 3,
    },
    "& .rowLine": {
      borderBottom: `${get(theme, "dataTable.border", "#E2E2E2")} 1px solid`,
      height: rowHeight,
      fontSize: 14,
      transitionDuration: "0.3s",
      "&:focus": {
        outline: "initial",
      },
      "&:hover:not(.ReactVirtualized__Table__headerRow)": {
        userSelect: "none",
        backgroundColor: get(theme, "dataTable.hoverColor", "#ececec"),
        fontWeight: 600,
        "&.canClick": {
          cursor: "pointer",
        },
        "&.canSelectText": {
          userSelect: "text",
        },
      },
      "& .selected": {
        fontWeight: 600,
      },
      "&:not(.deleted) .selected": {
        color: get(theme, "dataTable.selected", "#081C42"),
      },
      "&.deleted .selected": {
        color: get(theme, "dataTable.selectedDisabled", "#C51B3F"),
      },
    },
    "& .headerItem": {
      userSelect: "none",
      fontWeight: 700,
      fontSize: 14,
      fontStyle: "initial",
      display: "flex",
      alignItems: "center",
      outline: "none",
    },
    "& .ReactVirtualized__Table__row": {
      width: "100% !important",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
    },
    "& .ReactVirtualized__Table__headerRow": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      fontWeight: 700,
      fontSize: 14,
      borderColor: get(theme, "dataTable.border", "#39393980"),
      textTransform: "initial",
      transitionDuration: "0s",
    },
    "& .ReactVirtualized__Table__headerTruncatedText": {
      display: "inline-block",
      maxWidth: "100%",
      whiteSpace: "nowrap",
      textOverflow: "ellipsis",
      overflow: "hidden",
    },
    "& .ReactVirtualized__Table__headerColumn": {
      marginRight: 10,
      minWidth: 0,
      "&:first-of-type": {
        marginLeft: 10,
      },
      "& svg": {
        width: 12,
        height: 12,
        marginRight: 5,
        alignSelf: "flex-end",
      },
    },
    "& .ReactVirtualized__Table__rowColumn": {
      marginRight: 10,
      minWidth: 0,
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      "&:first-of-type": {
        marginLeft: 10,
      },
    },
    "& .ReactVirtualized__Table__sortableHeaderColumn": {
      cursor: "pointer",
    },
    "& .ReactVirtualized__Table__sortableHeaderIconContainer": {
      display: "flex",
      alignItems: "center",
    },
    "& .ReactVirtualized__Table__sortableHeaderIcon": {
      flex: "0 0 24px",
      height: "1em",
      width: "1em",
      fill: "currentColor",
    },
    "& .optionsAlignment": {
      display: "flex",
      gap: 5,
      "& .min-icon": {
        width: 16,
        height: 16,
      },
    },
    "& .text-center": {
      textAlign: "center",
    },
    "& .text-right": {
      textAlign: "right",
    },
    "& .progress-enabled": {
      display: "inline-flex",
      position: "relative",
      alignItems: "center",
      justifyContent: "center",
      width: 30,
      height: 30,
    },
    ...sx,
  }),
);

const TableRowPredefStyles: any = {
  deleted: {
    color: "#00000080",
    backgroundColor: "#f1f0f040",
    "&.selected": {
      color: "#b2b2b270",
    },
  },
};

// Main function to render the Table Wrapper
const DataTable = <T,>({
  itemActions,
  columns,
  onSelect,
  records,
  isLoading,
  loadingMessage = <h3>Loading...</h3>,
  entityName,
  selectedItems,
  idField,
  customEmptyMessage = "",
  customPaperHeight = "",
  noBackground = false,
  columnsSelector = false,
  textSelectable = false,
  columnsShown = [],
  onColumnChange = (column: string) => {},
  infiniteScrollConfig,
  autoScrollToBottom = false,
  disabled = false,
  onSelectAll,
  rowStyle,
  parentClassName = "",
  sx,
  rowHeight = 40,
  sortEnabled = false,
  sortCallBack,
}:DataTableProps<T>) => {
  const [columnSelectorOpen, setColumnSelectorOpen] = useState<boolean>(false);
  const [currentSortColumn, setCurrentSortColumn] = useState<
    string | undefined
  >(undefined);
  const [currentSortDirection, setCurrentSortDirection] =
    useState<SortDirectionType>("ASC");

  const [anchorEl, setAnchorEl] = useState<any>(null);
  const rowIDField = idField || "";

  const findView = itemActions
    ? itemActions.find((el) => el.type === "view")
    : null;

  const manualSortEnabled =
    sortEnabled &&
    typeof sortEnabled === "object" &&
    !Array.isArray(sortEnabled);

  const clickAction = (rowItem: T) => {
    if (findView) {
      const valueClick =
        findView.sendOnlyId && idField ? rowItem[rowIDField] : rowItem;

      let disabled = false;

      if (!!findView.isDisabled) {
        if (typeof findView.isDisabled === "boolean") {
          disabled = findView.isDisabled;
        } else {
          disabled = findView.isDisabled(rowItem);
        }
      }

      if (findView.onClick && !disabled) {
        findView.onClick(valueClick);
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
      <Box
        sx={{ margin: "10px 0 0", display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          id={"columns-selector"}
          variant={"regular"}
          icon={<ViewColumnIcon />}
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
      </Box>
    );
  };

  let tableSort: ((val: ITableSortInfo) => any) | undefined = undefined;
  let tableSortBy: string | undefined = undefined;
  let tableSortDirection: SortDirectionType | undefined = undefined;

  const onSortClick = (sort: ITableSortInfo) => {
    const newSortDirection = get(sort, "sortDirection", "DESC");
    setCurrentSortColumn(sort.sortBy);
    setCurrentSortDirection(newSortDirection);

    if (sortCallBack) {
      sortCallBack(sort);
    }
  };

  if (sortEnabled) {
    if (manualSortEnabled) {
      tableSort = sortEnabled.onSortClick;
      tableSortBy = sortEnabled.currentSort;
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
      currentSortColumn,
      currentSortDirection,
    );
  }

  return (
    <Grid item xs={12} className={parentClassName}>
      <DataTableWrapper
        className={`${noBackground ? "noBackground" : ""}`}
        customPaperHeight={customPaperHeight}
        sx={sx}
        rowHeight={rowHeight}
      >
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
          // @ts-ignore
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
              // @ts-ignore
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
                    // @ts-ignore
                    <Table
                      ref={registerChild}
                      disableHeader={false}
                      headerClassName={"headerItem"}
                      headerHeight={40}
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
                      onRowClick={({ rowData }) => {
                        clickAction(rowData);
                      }}
                      rowClassName={(r) =>
                        `rowLine ${findView ? "canClick" : ""} ${
                          !findView && textSelectable ? "canSelectText" : ""
                        } ${rowStyle ? rowStyle(r) : ""}`
                      }
                      onRowsRendered={onRowsRendered}
                      sort={tableSort}
                      sortBy={tableSortBy}
                      sortDirection={tableSortDirection}
                      scrollToIndex={
                        autoScrollToBottom ? sortedRecords.length - 1 : -1
                      }
                      rowStyle={(r) => {
                        if (rowStyle) {
                          const returnElement = rowStyle(r);

                          if (typeof returnElement === "string") {
                            return get(TableRowPredefStyles, returnElement, {});
                          }

                          return returnElement;
                        }

                        return {};
                      }}
                    >
                      {hasSelect && (
                        // @ts-ignore
                        <Column
                          headerRenderer={() => (
                            <Fragment>
                              {onSelectAll ? (
                                <div className={"checkAllWrapper"}>
                                  <Checkbox
                                    label={""}
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
                          dataKey={`select-${rowIDField}`}
                          width={selectWidth}
                          disableSort
                          cellRenderer={({ rowData }) => {
                            const isSelected = selectedItems
                              ? selectedItems.includes(
                                  isString(rowData)
                                    ? rowData
                                    : `${rowData[rowIDField]}`,
                                )
                              : false;

                            return (
                              <Checkbox
                                value={
                                  isString(rowData)
                                    ? rowData
                                    : `${rowData[rowIDField]}`
                                }
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
                      {hasOptions && (
                        // @ts-ignore
                        <Column
                          dataKey={"column-options"}
                          width={optionsWidth}
                          headerClassName="optionsAlignment"
                          className="optionsAlignment"
                          cellRenderer={({ rowData }) => {
                            const isSelected = selectedItems
                              ? selectedItems.includes(
                                  isString(rowData)
                                    ? rowData
                                    : `${rowData[rowIDField]}`,
                                )
                              : false;
                            return elementActions(
                              itemActions || [],
                              rowData,
                              isSelected,
                              rowIDField,
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
                        tableSortBy || "",
                        tableSortDirection,
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
      </DataTableWrapper>
    </Grid>
  );
};

export default DataTable;
