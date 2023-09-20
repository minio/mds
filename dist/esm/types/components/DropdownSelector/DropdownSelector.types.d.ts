import { SelectorType } from "../../global/global.types";
import { CSSObject } from "styled-components";
export interface DropdownSelectorProps {
  id: string;
  options: SelectorType[];
  selectedOption?: string;
  onSelect: (value: string, extraValue?: any) => void;
  hideTriggerAction: () => void;
  open: boolean;
  anchorEl?: (EventTarget & HTMLElement) | null;
}
export interface DropDownBlockProps {
  sx: CSSObject;
}
