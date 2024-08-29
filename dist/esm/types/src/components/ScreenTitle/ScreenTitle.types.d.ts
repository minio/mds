import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface ScreenTitleProps {
  icon: React.ReactNode;
  subTitle?: React.ReactNode;
  title: string;
  actions?: React.ReactNode;
  titleOptions?: ScreenTitleOptions[];
  sx?: OverrideTheme;
}
export interface ScreenTitleContainerProps {
  subTitle?: React.ReactNode;
  titleOptions?: ScreenTitleOptions[];
  sx?: OverrideTheme;
  bottomBorder?: boolean;
}
export interface ScreenTitleOptions {
  title: string;
  value: string;
}
