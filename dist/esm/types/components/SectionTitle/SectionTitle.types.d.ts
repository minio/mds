import React from "react";
import { CSSObject } from "styled-components";
export interface SectionTitleProps {
  separator?: boolean;
  actions?: React.ReactNode;
  icon?: React.ReactNode;
  children: React.ReactNode;
  sx?: CSSObject;
}
