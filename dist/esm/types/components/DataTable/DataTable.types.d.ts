import React, { HTMLAttributes } from "react";
export interface ItemActions {
  label?: string;
  type: string | any;
  sendOnlyId?: boolean;
  disableButtonFunction?: (itemValue: any) => boolean;
  showLoaderFunction?: (itemValue: any) => boolean;
  onClick?(valueToSend: any): any;
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
export interface ISortConfig {
  triggerSort: (val: any) => any;
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
  onColumnChange?: (column: string, state: boolean) => any;
  autoScrollToBottom?: boolean;
  infiniteScrollConfig?: IInfiniteScrollConfig;
  sortConfig?: ISortConfig;
  disabled?: boolean;
  onSelectAll?: () => void;
  rowStyle?: ({
    index,
  }: {
    index: number;
  }) => "deleted" | "" | React.CSSProperties;
  parentClassName?: string;
}
export interface DataTableWrapperProps extends HTMLAttributes<HTMLDivElement> {
  disabled?: boolean;
  customPaperHeight?: string | number;
  noBackground?: boolean;
}
export interface IActionButton {
  label?: string;
  type: string | React.ReactNode;
  onClick?: (id: string) => any;
  valueToSend: any;
  selected: boolean;
  sendOnlyId?: boolean;
  idField: string;
  disabled: boolean;
}
