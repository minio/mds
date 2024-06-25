import { FC } from "react";
import { IActionButton, PredefinedActionTypes } from "./DataTable.types";
export declare const isPredefinedAction: (
  val: any,
) => val is PredefinedActionTypes;
declare const TableActionButton: FC<IActionButton>;
export default TableActionButton;
