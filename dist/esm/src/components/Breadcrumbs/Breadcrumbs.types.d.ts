import React from "react";
import { CSSObject } from "styled-components";
export interface BreadcrumbsProps {
  sx?: CSSObject;
  children: React.ReactNode;
  additionalOptions?: React.ReactNode;
  goBackFunction: () => void;
}
export interface BreadcrumbsContainerProps {
  sx?: CSSObject;
}
