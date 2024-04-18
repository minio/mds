import React, { HTMLAttributes } from "react";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
import { OverrideTheme } from "../../global/global.types";
export interface CheckboxProps extends HTMLAttributes<HTMLInputElement> {
  label?: string;
  tooltip?: string;
  overrideLabelClasses?: string;
  sx?: OverrideTheme;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
