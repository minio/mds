import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface ScreenTitleProps {
  icon: React.ReactNode;
  superTitle?: React.ReactNode;
  subTitle?: React.ReactNode;
  title: string;
  actions?: React.ReactNode;
  titleBadges?: React.ReactNode[];
  titleOptions?: ScreenTitleOptions[];
  sx?: OverrideTheme;
}
export interface ScreenTitleContainerProps {
  superTitle?: React.ReactNode;
  subTitle?: React.ReactNode;
  titleOptions?: ScreenTitleOptions[];
  sx?: OverrideTheme;
  bottomBorder?: boolean;
}
export interface ScreenTitleOptions {
  title?: string;
  value?: string;
}
