import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface SimpleHeaderProps {
  label: React.ReactNode;
  icon?: React.ReactNode;
  sx?: OverrideTheme;
}
export interface SimpleHeaderContainerProps {
  sx?: OverrideTheme;
}
