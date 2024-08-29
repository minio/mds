import React from "react";
import { OverrideTheme } from "../../global/global.types";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
export interface SliderProps {
  id: string;
  label?: string;
  noLabelMinWidth?: boolean;
  error?: string;
  tooltip?: string;
  sx?: OverrideTheme;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
  displayValue?: boolean;
  displayValueFunction?: (value: any) => React.ReactNode;
}
export interface SliderContainerProps {
  children?: React.ReactNode;
  sx?: OverrideTheme;
  error?: boolean;
  className?: string;
}
