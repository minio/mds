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

import React, { Fragment, useState } from "react";
import {
  AutoSizer,
  Column,
  InfiniteLoader,
  SortDirectionType,
  Table,
} from "react-virtualized";
import get from "lodash/get";
import styled from "styled-components";

import { themeColors } from "../../global/themeColors";
import { overridePropsParse } from "../../global/utils";
import Box from "../Box/Box";
import Button from "../Button/Button";
import Checkbox from "../Checkbox/Checkbox";
import Grid from "../Grid/Grid";
import Columns3Icon from "../Icons/NewDesignIcons/Columns3Icon";
import Loader from "../Loader/Loader";
import ColumnsSelector from "./ColumnsSelector";
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

const DataTableWrapper = styled.div<DataTableWrapperProps>(
  ({ theme, customPaperHeight, disabled, sx, rowHeight }) => ({
    display: "flex",
    overflow: "auto",
    boxSizing: "border-box" as const,
    flexDirection: "column" as const,
    boxShadow: "none",
    border: 0,
    minHeight: 200,
    overflowY: "scroll",
    position: "relative",
    height: customPaperHeight || "calc(100vh - 205px)",
    backgroundColor: disabled
      ? get(theme, "dataTable.disabledBG", "transparent")
      : "transparent",
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
          color: get(
            theme,
            "dataTable.titleColor",
            themeColors["Color/Neutral/Text/colorTextLabel"].lightMode,
          ),
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
      borderBottom: `${get(theme, "dataTable.border", themeColors["Color/Neutral/Border/colorBorderBold"].lightMode)} 1px solid`,
      height: rowHeight,
      fontSize: 14,
      transitionDuration: "0.3s",
      "&:focus": {
        outline: "initial",
      },
      "&:hover:not(.ReactVirtualized__Table__headerRow)": {
        userSelect: "none",
        backgroundColor: get(
          theme,
          "dataTable.hoverColor",
          themeColors["Color/Brand/Control/colorBgActive"].lightMode,
        ),
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
        color: get(
          theme,
          "dataTable.selected",
          themeColors["Color/Neutral/Text/colorTextHeading"].lightMode,
        ),
      },
      "&.deleted .selected": {
        color: get(
          theme,
          "dataTable.itemDisabled",
          themeColors["Color/Neutral/Text/colorTextDisabled"].lightMode,
        ),
      },
    },
    "& .headerItem": {
      userSelect: "none",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "16px",
      letterSpacing: "0.5px",
      display: "flex",
      alignItems: "center",
      outline: "none",
    },
    "& .ReactVirtualized__Table__row": {
      width: "100% !important",
      display: "flex",
      flexDirection: "row" as const,
      alignItems: "center",
    },
    "& .ReactVirtualized__Table__headerRow": {
      display: "flex",
      flexDirection: "row" as const,
      alignItems: "center",
      fontSize: 12,
      fontStyle: "normal",
      fontWeight: 600,
      lineHeight: "16px",
      letterSpacing: "0.5px",
      borderColor: "transparent",
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
        alignSelf: "center" as const,
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
    ...overridePropsParse(sx, theme),
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
  sx,
  rowHeight = 36,
  sortEnabled = false,
  sortCallBack,
}: DataTableProps<T>) => {
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
      <Box
        sx={{ margin: "10px 0 0", display: "flex", justifyContent: "flex-end" }}
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
      </Box>
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
      <DataTableWrapper
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
                            return get(TableRowPredefStyles, returnElement, {});
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
      </DataTableWrapper>
    </Grid>
  );
};

export default DataTable;
