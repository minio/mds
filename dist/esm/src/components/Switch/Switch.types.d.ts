import React from "react";
import { CSSObject } from "styled-components";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
export interface MainSwitchProps {
  id: string;
  label?: string;
  tooltip?: string;
  sx?: CSSObject;
  className?: string;
  switchOnly?: boolean;
  indicatorLabels?: string[];
  description?: string;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
export interface IndicatorProps {
  active: boolean;
  children: React.ReactNode;
}
export interface SwitchContainerProps {
  sx?: CSSObject;
}
export type SwitchProps = MainSwitchProps &
  React.InputHTMLAttributes<HTMLInputElement>;
