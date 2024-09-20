import React, { HTMLAttributes } from "react";
import { SortDirectionType } from "react-virtualized";
import { OverrideTheme } from "../../global/global.types";
export declare const actionsTypes: readonly [
  "view",
  "edit",
  "delete",
  "description",
  "share",
  "cloud",
  "console",
  "download",
  "disable",
  "format",
  "preview",
];
export type PredefinedActionTypes = (typeof actionsTypes)[number];
export interface ItemActions<T> {
  tooltip?: string | ((itemValue: T) => string);
  type: PredefinedActionTypes | React.ReactNode;
  isDisabled?: boolean | ((itemValue: T) => boolean);
  showLoader?: boolean | ((itemValue: T) => boolean);
  onClick?(valueToSend: T, index?: number): any;
}
type Column<T, K extends keyof T> = {
  label: string;
  elementKey?: K;
  globalClass?: any;
  rowClass?: any;
  width?: number;
  headerTextAlign?: string;
  contentTextAlign?: string;
  enableSort?: boolean;
  renderFunction?: (input: T[K]) => React.ReactNode | string;
  renderFullObjectFunction?: (input: T) => React.ReactNode | string;
};
export type IColumns<T> = {
  [K in keyof T]: Column<T, K>;
}[keyof T];
export interface IInfiniteScrollConfig {
  loadMoreRecords: (indexElements: {
    startIndex: number;
    stopIndex: number;
  }) => Promise<any>;
  recordsCount: number;
}
export interface ITableSortInfo {
  sortBy: string;
  sortDirection: SortDirectionType;
}
export interface ISortConfig {
  onSortClick: (val: ITableSortInfo) => any;
  currentSort: string;
  currentDirection: "ASC" | "DESC" | undefined;
}
export interface DataTableProps<T, K extends keyof T = keyof T> {
  itemActions?: ItemActions<T>[];
  columns: IColumns<T>[];
  onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  idField?: K;
  isLoading?: boolean;
  loadingMessage?: React.ReactNode;
  records: T[];
  entityName?: string;
  selectedItems?: Array<K> | string[];
  customEmptyMessage?: string;
  customPaperHeight?: string;
  noBackground?: boolean;
  columnsSelector?: boolean;
  textSelectable?: boolean;
  columnsShown?: Array<K>;
  onColumnChange?: (column: K) => void;
  autoScrollToBottom?: boolean;
  infiniteScrollConfig?: IInfiniteScrollConfig;
  disabled?: boolean;
  onSelectAll?: () => void;
  rowStyle?: ({
    index,
  }: {
    index: number;
  }) => "deleted" | "" | React.CSSProperties;
  parentClassName?: string;
  sx?: OverrideTheme;
  rowHeight?: number;
  sortEnabled?: boolean | Array<K> | ISortConfig;
  sortCallBack?: (info: ITableSortInfo) => void;
}
export interface DataTableWrapperProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  customPaperHeight?: string | number;
  noBackground?: boolean;
  sx?: OverrideTheme;
  rowHeight: number;
}
export interface IActionButton<T> {
  tooltip?: string;
  type: PredefinedActionTypes | React.ReactNode;
  onClick?: (valueToSend: T, index?: number) => any;
  valueToSend: T;
  selected: boolean;
  disabled: boolean;
}
export interface ColumnSelectorProps<T, K extends keyof T = keyof T> {
  open: boolean;
  closeTriggerAction: () => void;
  onSelect: (column: K) => void;
  columns: IColumns<T>[];
  selectedOptionIDs: Array<K>;
  sx?: OverrideTheme;
  anchorEl?: (EventTarget & HTMLElement) | null;
}
export interface ColumnSelectorConstructProps {
  sx?: OverrideTheme;
}
export {};
