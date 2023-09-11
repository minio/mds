import React from "react";
import { CSSObject } from "styled-components";
export interface MainSwitchProps {
  id: string;
  label?: string;
  tooltip?: string;
  sx?: CSSObject;
  className?: string;
  switchOnly?: boolean;
  indicatorLabels?: string[];
  description?: string;
  helpTip?: any;
  helpTipPlacement?: "top" | "bottom" | "left" | "right";
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
