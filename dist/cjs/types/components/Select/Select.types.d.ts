import { CSSObject } from "styled-components";
import { SelectorType } from "../../global/global.types";
export interface SelectProps {
  options: SelectorType[];
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
  onChange: (newValue: string) => void;
  sx?: CSSObject;
}
