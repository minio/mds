import { HTMLAttributes } from "react";
import { CSSObject } from "styled-components";
export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  tooltip?: string;
  overrideLabelClasses?: string;
  sx?: CSSObject;
  helpTip?: any;
  helpTipPlacement?: "top" | "bottom" | "left" | "right";
}
