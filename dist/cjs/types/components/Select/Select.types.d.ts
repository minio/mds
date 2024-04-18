/// <reference types="react" />
import { OverrideTheme, SelectorType } from "../../global/global.types";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
export interface SelectProps {
  options: SelectorType[];
  value?: string;
  id: string;
  name?: string;
  required?: boolean;
  className?: string;
  disabled?: boolean;
  label?: string;
  tooltip?: string;
  noLabelMinWidth?: boolean;
  fixedLabel?: string;
  placeholder?: string;
  onChange: (newValue: string, extraValue?: any) => void;
  sx?: OverrideTheme;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
