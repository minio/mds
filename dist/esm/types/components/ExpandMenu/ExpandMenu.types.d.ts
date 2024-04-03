import React, { ReactNode } from "react";
import { CSSObject } from "styled-components";
export interface ExpandMenuProps {
  id: string;
  name?: string;
  label?: string;
  variant?: "regular" | "callAction" | "secondary" | "text" | "subAction";
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  children?: ReactNode | string;
  dropMenuPosition?: "start" | "end";
  sx?: CSSObject;
}
export interface ExpandMenuOptionProps {
  id: string;
  variant?: "regular" | "secondary";
  icon?: ReactNode;
  sx?: CSSObject;
  children: ReactNode;
}
export interface ExpandDropBaseProps {
  selectedOption?: string;
  hideTriggerAction: () => void;
  open: boolean;
  anchorEl?: (EventTarget & HTMLElement) | null;
  anchorOrigin?: "start" | "end";
  children: React.ReactNode;
}
export interface DropdownMainProps {
  sx?: CSSObject;
}
export type ExpandDropdownProps = DropdownMainProps & ExpandDropBaseProps;
