import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface SliderProps {
  id: string;
  label?: string;
  noLabelMinWidth?: boolean;
  error?: string;
  tooltip?: string;
  sx?: OverrideTheme;
  displayValue?: boolean;
  displayValueFunction?: (value: any) => React.ReactNode;
}
