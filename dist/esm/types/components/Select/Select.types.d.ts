/// <reference types="react" />
import { CSSObject } from "styled-components";
import { SelectorType } from "../../global/global.types";
import { HelpTipPlacement } from "../../global/global.types";
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
  sx?: CSSObject;
  helpTip?: React.ReactNode;
  helpTipPlacement?: HelpTipPlacement;
}
