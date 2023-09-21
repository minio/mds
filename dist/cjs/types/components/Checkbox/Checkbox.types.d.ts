import React, { HTMLAttributes } from "react";
import { CSSObject } from "styled-components";
import { HelpTipPlacement } from "../../global/global.types";
export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  tooltip?: string;
  overrideLabelClasses?: string;
  sx?: CSSObject;
  helpTip?: React.ReactNode;
  helpTipPlacement?: HelpTipPlacement;
}
