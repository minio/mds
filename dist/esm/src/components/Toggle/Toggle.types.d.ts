import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface MainToggleProps {
  id: string;
  label?: string;
  tooltip?: string;
  sx?: OverrideTheme;
  className?: string;
  toggleOnly?: boolean;
  indicatorLabels?: string[];
  helper?: string;
  labelsOn?: boolean;
  inverse?: boolean;
}
export interface IndicatorProps {
  active: boolean;
  children: React.ReactNode;
}
export interface ToggleContainerProps {
  sx?: OverrideTheme;
}
export type ToggleProps = MainToggleProps &
  React.InputHTMLAttributes<HTMLInputElement>;
