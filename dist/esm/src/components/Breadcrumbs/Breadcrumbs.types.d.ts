import React, { MouseEventHandler, ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
export interface BreadcrumbsProps {
  sx?: OverrideTheme;
  options: BreadcrumbsOption[];
  goBackFunction?: () => void;
  displayLastItems?: false | number;
  onClickOption?: (to?: string) => void;
  children?: React.ReactNode;
  markCurrentItem?: boolean;
}
export interface BreadcrumbsOption {
  label?: string;
  to?: string;
  onClick?: (to?: string) => void;
  icon?: ReactNode;
  subOptions?: BreadcrumbsOption[];
  disabled?: boolean;
}
export interface BreadcrumbsContainerProps {
  sx?: OverrideTheme;
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
  onClickOption?: (to?: string) => void;
  children?: ReactNode | string;
  sx?: OverrideTheme;
  subOptions?: BreadcrumbsOption[];
}
