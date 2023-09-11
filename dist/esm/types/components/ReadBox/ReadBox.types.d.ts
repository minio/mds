import React from "react";
import { CSSObject } from "styled-components";
export interface ReadBoxProps {
  label?: string;
  children: React.ReactNode;
  multiLine?: boolean;
  actionButton?: React.ReactNode;
  sx?: CSSObject;
  helpTip?: any;
  helpTipPlacement?: "top" | "bottom" | "left" | "right";
}
export interface ReadBoxBaseProps {
  label?: string;
  sx?: CSSObject;
  multiLine?: boolean;
}
