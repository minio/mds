import React from "react";
import { CSSObject } from "styled-components";
export interface ScreenTitleProps {
  icon: React.ReactNode;
  subTitle?: React.ReactNode;
  title: string;
  actions: React.ReactNode;
  titleOptions?: ScreenTitleOptions[];
  sx?: CSSObject;
}
export interface ScreenTitleContainerProps {
  sx?: CSSObject;
  bottomBorder?: boolean;
}
export interface ScreenTitleOptions {
  title: string;
  value: string;
}
