import React from "react";
import { CSSObject } from "styled-components";
export interface ConstructProps {
  separator?: boolean;
  sx?: CSSObject;
}
export interface SectionTitleProps {
  actions?: React.ReactNode;
  icon?: React.ReactNode;
  children: React.ReactNode;
}
export type SectionTitleCommon = SectionTitleProps & ConstructProps;
