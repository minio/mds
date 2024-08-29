import React from "react";
import { SortDirectionType } from "react-virtualized";
import { IColumns, ISortConfig, ItemActions } from "./DataTable.types";
export declare const selectWidth = 45;
export declare const generateColumnsMap: <T>(
  columns: IColumns<T>[],
  containerWidth: number,
  actionsWidth: number,
  hasSelect: boolean,
  hasActions: boolean,
  selectedItems: Array<keyof T> | string[],
  idField: keyof T,
  columnsSelector: boolean,
  columnsShown: Array<keyof T>,
  sortColumns: boolean | Array<keyof T> | ISortConfig,
  currentSortColumn: keyof T | undefined,
  currentSortDirection: "ASC" | "DESC" | undefined,
) => (React.JSX.Element | null)[];
export declare const elementActions: <T>(
  actions: ItemActions<T>[],
  valueToSend: any,
  selected: boolean,
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
