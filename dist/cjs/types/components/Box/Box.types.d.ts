import React from "react";
import { CSSObject } from "styled-components";
export interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  sx?: CSSObject;
  children?: React.ReactNode;
  withBorders?: boolean;
  customBorderPadding?: number | string;
  useBackground?: boolean;
}
