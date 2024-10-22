import { ColumnSelectorProps } from "./DataTable.types";
declare const ColumnsSelector: <T>({
  columns,
  selectedOptionIDs,
  onSelect,
  closeTriggerAction,
  open,
  anchorEl,
}: ColumnSelectorProps<T>) => JSX.Element | null;
export default ColumnsSelector;
