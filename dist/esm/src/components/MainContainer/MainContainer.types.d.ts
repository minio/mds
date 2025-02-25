import React from "react";
import { CSSObject } from "styled-components";
export interface MainContainerProps {
  menu?: React.ReactElement;
  children: React.ReactElement;
  horizontal?: boolean;
  mobileModeAuto?: boolean;
  sx?: CSSObject;
}
export interface ParentBoxProps {
  horizontal?: boolean;
  mobileModeAuto: boolean;
  sx?: CSSObject;
}
export interface CustomMainProps {
  horizontal?: boolean;
}
