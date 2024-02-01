import React from "react";
import { SelectorType } from "../../global/global.types";
import { CSSObject } from "styled-components";
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
}
export interface DropDownBlockProps {
  useAnchorWidth: boolean;
  sx: CSSObject;
}
export interface DropdownItemProps {
  icon?: React.ReactNode;
  label: string;
  indicator?: React.ReactNode;
}
