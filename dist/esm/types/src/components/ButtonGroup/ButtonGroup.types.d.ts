import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  sx?: OverrideTheme;
}
