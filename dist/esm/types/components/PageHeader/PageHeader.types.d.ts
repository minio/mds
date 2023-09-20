import React from "react";
import { CSSObject } from "styled-components";
export interface PageHeaderMainProps {
  label: React.ReactNode;
  middleComponent?: React.ReactNode;
  actions?: React.ReactNode;
}
export interface PageHeaderConstruct {
  sx?: CSSObject;
}
export type PageHeaderProps = PageHeaderMainProps & PageHeaderConstruct;
