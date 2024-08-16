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

import React, { HTMLAttributes } from "react";
import { SortDirectionType } from "react-virtualized";
import { OverrideTheme } from "../../global/global.types";

export const actionsTypes = [
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
] as const;

export type PredefinedActionTypes = (typeof actionsTypes)[number];

export interface ItemActions {
  tooltip?: string;
  type: PredefinedActionTypes | React.ReactNode;
  sendOnlyId?: boolean;
  isDisabled?: boolean | ((itemValue: any) => boolean);
  showLoader?: boolean | ((itemValue: any) => boolean);
  onClick?(valueToSend: any, index?: number): any;
}

type ColumnBase<K> = {
  label: string;
  elementKey: K;
  globalClass?: any;
  rowClass?: any;
  width?: number;
  headerTextAlign?: string;
  contentTextAlign?: string;
  enableSort?: boolean;
};

type Column<T, K extends keyof T> = ColumnBase<K> &
  (
    | {
        renderFullObject?: false;
        renderFunction?: (input: T[K]) => React.ReactNode | string;
      }
    | {
        renderFullObject: true;
        renderFunction?: (input: T) => React.ReactNode | string;
      }
  );

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
  itemActions?: ItemActions[] | null;
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
