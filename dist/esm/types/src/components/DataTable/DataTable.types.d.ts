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
export interface ItemActions {
  tooltip?: string;
  type: PredefinedActionTypes | React.ReactNode;
  sendOnlyId?: boolean;
  isDisabled?: boolean | ((itemValue: any) => boolean);
  showLoader?: boolean | ((itemValue: any) => boolean);
  onClick?(valueToSend: any, index?: number): any;
}
export interface IColumns {
  label: string;
  elementKey?: string;
  renderFunction?: (input: any) => any;
  renderFullObject?: boolean;
  globalClass?: any;
  rowClass?: any;
  width?: number;
  headerTextAlign?: string;
  contentTextAlign?: string;
  enableSort?: boolean;
}
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
export interface DataTableProps {
  itemActions?: ItemActions[] | null;
  columns: IColumns[];
  onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  idField?: string;
  isLoading?: boolean;
  loadingMessage?: React.ReactNode;
  records: any[];
  entityName?: string;
  selectedItems?: string[];
  customEmptyMessage?: string;
  customPaperHeight?: string;
  noBackground?: boolean;
  columnsSelector?: boolean;
  textSelectable?: boolean;
  columnsShown?: string[];
  onColumnChange?: (column: string) => any;
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
  sortEnabled?: boolean | string[] | ISortConfig;
  sortCallBack?: (info: ITableSortInfo) => void;
}
export interface DataTableWrapperProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  customPaperHeight?: string | number;
  noBackground?: boolean;
  sx?: OverrideTheme;
  rowHeight: number;
}
export interface IActionButton {
  tooltip?: string;
  type: PredefinedActionTypes | React.ReactNode;
  onClick?: (valueToSend: any, index?: number) => any;
  valueToSend: any;
  selected: boolean;
  sendOnlyId?: boolean;
  idField: string;
  disabled: boolean;
}
export interface ColumnSelectorProps {
  open: boolean;
  closeTriggerAction: () => void;
  onSelect: (column: string) => void;
  columns: IColumns[];
  selectedOptionIDs: string[];
  sx?: OverrideTheme;
  anchorEl?: (EventTarget & HTMLElement) | null;
}
export interface ColumnSelectorConstructProps {
  sx?: OverrideTheme;
}
