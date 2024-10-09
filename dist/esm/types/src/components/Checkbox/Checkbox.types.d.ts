import { HTMLAttributes } from "react";
import { OverrideTheme } from "../../global/global.types";
export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  tooltip?: string;
  overrideLabelClasses?: string;
  sx?: OverrideTheme;
  helper?: string;
}
