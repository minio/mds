import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface SectionTitleProps {
  separator?: boolean;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
  children: React.ReactNode;
  sx?: OverrideTheme;
}
