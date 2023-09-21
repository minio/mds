import React from "react";
import { CSSObject } from "styled-components";
import { HelpTipPlacement } from "../../global/global.types";
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
  helpTipPlacement?: HelpTipPlacement;
}
export interface IndicatorProps {
  on: boolean;
  children: React.ReactNode;
}
export interface SwitchContainerProps {
  sx?: CSSObject;
}
export type SwitchProps = MainSwitchProps &
  React.InputHTMLAttributes<HTMLInputElement>;
