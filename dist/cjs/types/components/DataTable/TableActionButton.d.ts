import { FC } from "react";
import { IActionButton } from "./DataTable.types";
export declare const isPredefinedAction: (
  val: any,
) => val is
  | "view"
  | "format"
  | "download"
  | "console"
  | "cloud"
  | "edit"
  | "delete"
  | "description"
  | "share"
  | "disable"
  | "preview";
declare const TableActionButton: FC<IActionButton>;
export default TableActionButton;
