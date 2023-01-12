import { IColumns, ItemActions } from "./DataTable.types";
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
  sortColumn: string,
  sortDirection: "ASC" | "DESC" | undefined
) => (JSX.Element | null)[];
export declare const elementActions: (
  actions: ItemActions[],
  valueToSend: any,
  selected: boolean,
  idField: string
) => (JSX.Element | null)[];
export declare const calculateOptionsSize: (
  containerWidth: number,
  totalOptions: number
) => number;
