import React from "react";
import { CSSObject } from "styled-components";
export interface FormActionsTrayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  marginTop?: number;
  separator?: boolean;
  sx?: CSSObject;
}
