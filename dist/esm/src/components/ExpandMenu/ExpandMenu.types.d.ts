import React, { ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
import { ButtonVariant } from "../Button/Button.types";
export interface ExpandMenuProps {
  id: string;
  name?: string;
  label?: string;
  variant?: ButtonVariant;
  openVariant?: ButtonVariant;
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  children?: ReactNode | string;
  dropMenuPosition?: "start" | "end" | "middle";
  compact?: boolean;
  dropArrow?: boolean;
  inButtonGroup?: boolean;
  menuTopSpacing?: boolean;
  openFeedback?: boolean;
  sx?: OverrideTheme;
}
export interface ExpandMenuOptionProps {
  id: string;
  variant?: "regular" | "secondary";
  icon?: ReactNode;
  sx?: OverrideTheme;
  inButtonGroup?: boolean;
  children: ReactNode;
}
export interface ExpandDropBaseProps {
  selectedOption?: string;
  hideTriggerAction: () => void;
  open: boolean;
  anchorEl?: (EventTarget & HTMLElement) | null;
  anchorOrigin?: "start" | "end" | "middle";
  dropMinWidth?: boolean;
  children: React.ReactNode;
}
export interface DropdownMainProps {
  forInputOptions?: boolean;
  sx?: OverrideTheme;
}
export interface ExpandMenuDescriptionProps {
  icon?: ReactNode;
  title?: string;
  subTitle?: string;
  extras?: ReactNode;
}
export type ExpandDropdownProps = DropdownMainProps & ExpandDropBaseProps;
