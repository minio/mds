import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface MainContainerProps {
  menu?: React.ReactElement;
  children: React.ReactElement;
  horizontal?: boolean;
  mobileModeAuto?: boolean;
  sx?: OverrideTheme;
}
export interface ParentBoxProps {
  horizontal?: boolean;
  mobileModeAuto: boolean;
  sx?: OverrideTheme;
}
export interface CustomMainProps {
  horizontal?: boolean;
}
