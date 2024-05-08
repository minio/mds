import React, { ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
export interface ExpandMenuProps {
  id: string;
  name?: string;
  label?: string;
  variant?: "regular" | "callAction" | "secondary" | "text" | "subAction";
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  children?: ReactNode | string;
  dropMenuPosition?: "start" | "end";
  compact?: boolean;
  sx?: OverrideTheme;
}
export interface ExpandMenuOptionProps {
  id: string;
  variant?: "regular" | "secondary";
  icon?: ReactNode;
  sx?: OverrideTheme;
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
  sx?: OverrideTheme;
}
export type ExpandDropdownProps = DropdownMainProps & ExpandDropBaseProps;
