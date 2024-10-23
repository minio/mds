import { IActionButton, PredefinedActionTypes } from "./DataTable.types";
export declare const isPredefinedAction: (
  val: any,
) => val is PredefinedActionTypes;
declare const TableActionButton: <T>({
  type,
  onClick,
  valueToSend,
  disabled,
  tooltip,
}: IActionButton<T>) => import("@emotion/react/jsx-runtime").JSX.Element | null;
export default TableActionButton;
