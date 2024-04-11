import React, { MouseEventHandler, ReactNode } from "react";
import { CSSObject } from "styled-components";
export interface BreadcrumbsProps {
  sx?: CSSObject;
  options: BreadcrumbsOption[];
  goBackFunction?: () => void;
  displayLastItems?: false | number;
  onClickOption?: (to?: string) => void;
  children?: React.ReactNode;
  markCurrentItem?: boolean;
}
export interface BreadcrumbsOption {
  label: string;
  to?: string;
  onClick?: (to?: string) => void;
}
export interface BreadcrumbsContainerProps {
  sx?: CSSObject;
}
export interface BreadcrumbsOptionProps {
  id: string;
  name?: string;
  label?: string;
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  disabled?: boolean;
  current?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode | string;
  sx?: CSSObject;
}
