import React from "react";
import { CSSObject } from "styled-components";
export interface SimpleHeaderProps {
  label: React.ReactNode;
  icon?: React.ReactNode;
  sx?: CSSObject;
}
export interface SimpleHeaderContainerProps {
  sx?: CSSObject;
}
