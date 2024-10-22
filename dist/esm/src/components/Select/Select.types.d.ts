import { OverrideTheme, SelectOption } from "../../global/global.types";
export type SelectSizeMode = "small" | "large";
export type SelectOrientation = "horizontal" | "vertical";
export type SelectState = "normal" | "error" | "success" | "warning";
export interface SelectProps {
  options: SelectOption[];
  value?: string;
  id: string;
  name?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  tooltip?: string;
  noLabelMinWidth?: boolean;
  placeholder?: string;
  onChange: (newValue: string, extraValue?: any) => void;
  sx?: OverrideTheme;
  sizeMode?: SelectSizeMode;
  orientation?: SelectOrientation;
  state?: SelectState;
  readOnly?: boolean;
  helper?: string;
}
