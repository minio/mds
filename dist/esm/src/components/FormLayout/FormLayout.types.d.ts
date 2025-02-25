import React from "react";
import { CSSObject } from "styled-components";
export interface FormLayoutProps {
  sx?: CSSObject;
  children?: React.ReactNode;
  title?: string;
  icon?: React.ReactNode;
  helpBox?: React.ReactNode;
  withBorders?: boolean;
  containerPadding?: boolean;
}
