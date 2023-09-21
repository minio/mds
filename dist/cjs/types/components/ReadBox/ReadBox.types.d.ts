import React from "react";
import { CSSObject } from "styled-components";
export interface ReadBoxProps {
  label?: string;
  children: React.ReactNode;
  multiLine?: boolean;
  actionButton?: React.ReactNode;
  sx?: CSSObject;
}
export interface ReadBoxBaseProps {
  label?: string;
  sx?: CSSObject;
  multiLine?: boolean;
}
