import React from "react";
import { CSSObject } from "styled-components";
export interface BoxProps {
  sx?: CSSObject;
  children?: React.ReactNode;
  withBorders?: boolean;
  customBorderPadding?: number | string;
  useBackground?: boolean;
  ref?: React.RefObject<HTMLInputElement>;
}
