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
import { CSSObject } from "styled-components";
import { SortDirectionType } from "react-virtualized";

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

export interface ItemActions<T> {
  tooltip?: string;
  type: PredefinedActionTypes | React.ReactNode;
  sendOnlyId?: boolean;
  isDisabled?: boolean | ((itemValue: T) => boolean);
  showLoader?: boolean | ((itemValue: T) => boolean);
  onClick?(valueToSend: T): void;
}

export interface IColumns<T> {
  label: string;
  elementKey?: string;
  renderFunction?: (input: T) => any;
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

export interface DataTableProps<T> {
  itemActions?: ItemActions<T>[] | null;
  columns: IColumns<T>[];
  onSelect?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  idField?: string;
  isLoading?: boolean;
  loadingMessage?: React.ReactNode;
  records: T[];
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
  sx?: CSSObject;
  rowHeight?: number;
  sortEnabled?: boolean | string[] | ISortConfig;
  sortCallBack?: (info: ITableSortInfo) => void;
}

export interface DataTableWrapperProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  customPaperHeight?: string | number;
  noBackground?: boolean;
  sx?: CSSObject;
  rowHeight: number;
}

export interface IActionButton<T> {
  tooltip?: string;
  type: PredefinedActionTypes | React.ReactNode;
  onClick?: (id: string) => void;
  valueToSend: T;
  selected: boolean;
  sendOnlyId?: boolean;
  idField: string;
  disabled: boolean;
}

export interface ColumnSelectorProps<T> {
  open: boolean;
  closeTriggerAction: () => void;
  onSelect: (column: string) => void;
  columns: IColumns<T>[];
  selectedOptionIDs: string[];
  sx?: CSSObject;
  anchorEl?: (EventTarget & HTMLElement) | null;
}

export interface ColumnSelectorConstructProps {
  sx?: CSSObject;
}
