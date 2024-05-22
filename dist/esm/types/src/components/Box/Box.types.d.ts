import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: OverrideTheme;
  children?: React.ReactNode;
  withBorders?: boolean;
  customBorderPadding?: number | string;
  customBorderRadius?: number | string;
  useBackground?: boolean;
}
