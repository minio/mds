import React from "react";
import { SortDirectionType } from "react-virtualized";
import { IColumns, ISortConfig, ItemActions } from "./DataTable.types";
export declare const selectWidth = 45;
export declare const generateColumnsMap: (
  columns: IColumns[],
  containerWidth: number,
  actionsWidth: number,
  hasSelect: boolean,
  hasActions: boolean,
  selectedItems: string[],
  idField: string,
  columnsSelector: boolean,
  columnsShown: string[],
  sortColumns: boolean | string[] | ISortConfig,
  currentSortColumn: string | undefined,
  currentSortDirection: "ASC" | "DESC" | undefined,
) => (React.JSX.Element | null)[];
export declare const elementActions: (
  actions: ItemActions[],
  valueToSend: any,
  selected: boolean,
  idField: string,
) => (React.JSX.Element | null)[];
export declare const calculateOptionsSize: (
  containerWidth: number,
  totalOptions: number,
) => number;
export declare const sortRecords: (
  records: any[],
  sortColumn: string | undefined,
  sortDirection: SortDirectionType,
) => any[];
