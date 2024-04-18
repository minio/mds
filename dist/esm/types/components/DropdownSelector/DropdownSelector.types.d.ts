import React from "react";
import { OverrideTheme, SelectorType } from "../../global/global.types";
export interface DropdownSelectorProps {
  id: string;
  options: SelectorType[];
  selectedOption?: string;
  onSelect: (
    value: string,
    extraValue?: any,
    label?: string,
    selectedIndex?: number,
  ) => void;
  hideTriggerAction: () => void;
  open: boolean;
  anchorEl?: (EventTarget & HTMLElement) | null;
  anchorOrigin?: "start" | "end";
  useAnchorWidth?: boolean;
  forSelectInput?: boolean;
}
export interface DropDownBlockProps {
  useAnchorWidth: boolean;
  forSelectInput: boolean;
  sx: OverrideTheme;
}
export interface DropdownItemProps {
  icon?: React.ReactNode;
  label: string;
  indicator?: React.ReactNode;
}
