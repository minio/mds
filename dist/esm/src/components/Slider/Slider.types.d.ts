import React from "react";
import { CSSObject } from "styled-components";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
export interface SliderProps {
  id: string;
  label?: string;
  noLabelMinWidth?: boolean;
  error?: string;
  tooltip?: string;
  sx?: CSSObject;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
  displayValue?: boolean;
  displayValueFunction?: (value: any) => React.ReactNode;
}
export interface SliderContainerProps {
  children?: React.ReactNode;
  sx?: CSSObject;
  error?: boolean;
  className?: string;
}
