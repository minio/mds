import { FC } from "react";
import { IActionButton } from "./DataTable.types";
export declare const isPredefinedAction: (
  val: any,
) => val is
  | "view"
  | "console"
  | "cloud"
  | "format"
  | "edit"
  | "delete"
  | "description"
  | "share"
  | "download"
  | "disable"
  | "preview";
declare const TableActionButton: FC<IActionButton>;
export default TableActionButton;
