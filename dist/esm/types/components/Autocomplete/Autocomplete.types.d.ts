/// <reference types="react" />
import { OverrideTheme, SelectOption } from "../../global/global.types";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
export interface AutocompleteProps {
  options: SelectOption[];
  value?: string;
  id: string;
  name?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  displayDropArrow?: boolean;
  label?: string;
  tooltip?: string;
  noLabelMinWidth?: boolean;
  placeholder?: string;
  onChange: (newValue: string, extraValue?: any) => void;
  sx?: OverrideTheme;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
