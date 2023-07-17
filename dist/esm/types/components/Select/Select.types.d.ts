import { CSSObject } from "styled-components";
import { SelectOptionsType } from "../../global/global.types";
export interface SelectProps {
  options: SelectOptionsType[];
  value?: string;
  id: string;
  name?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  tooltip?: string;
  noLabelMinWidth?: boolean;
  fixedLabel?: string;
  onChange: (newValue: string, extraValue?: any) => void;
  sx?: CSSObject;
}
