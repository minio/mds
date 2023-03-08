import { HTMLAttributes } from "react";
import { CSSObject } from "styled-components";
export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  tooltip?: string;
  overrideLabelClasses?: string;
  overrideCheckboxStyles?: CSSObject;
}
