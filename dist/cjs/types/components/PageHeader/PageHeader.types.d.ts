import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface PageHeaderMainProps {
  label: React.ReactNode;
  middleComponent?: React.ReactNode;
  actions?: React.ReactNode;
}
export interface PageHeaderConstruct {
  sx?: OverrideTheme;
}
export type PageHeaderProps = PageHeaderMainProps & PageHeaderConstruct;
