import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface FormLayoutProps {
  sx?: OverrideTheme;
  children?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  helpBox?: React.ReactNode;
  withBorders?: boolean;
  containerPadding?: boolean;
}
