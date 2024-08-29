import React from "react";
import { DataTableProps } from "./DataTable.types";
declare const DataTable: <T>({
  itemActions,
  columns,
  onSelect,
  records,
  isLoading,
  loadingMessage,
  entityName,
  selectedItems,
  idField,
  customEmptyMessage,
  customPaperHeight,
  columnsSelector,
  textSelectable,
  columnsShown,
  onColumnChange,
  infiniteScrollConfig,
  autoScrollToBottom,
  onSelectAll,
  rowStyle,
  parentClassName,
  sx,
  rowHeight,
  sortEnabled,
  sortCallBack,
}: DataTableProps<T>) => React.JSX.Element;
export default DataTable;
