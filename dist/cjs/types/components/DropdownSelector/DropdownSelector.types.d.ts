import { SelectOptionsType } from "../../global/global.types";
import { CSSObject } from "styled-components";
export interface DropdownSelectorProps {
  options: SelectOptionsType[];
  selectedOption?: string;
  onSelect: (value: string, extraValue?: any) => void;
  hideTriggerAction: () => void;
  open: boolean;
  anchorEl?: (EventTarget & HTMLElement) | null;
}
export interface DropDownBlockProps {
  sx: CSSObject;
}
