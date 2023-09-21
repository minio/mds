import React from "react";
import { CSSObject } from "styled-components";
import { SelectorType } from "../../global/global.types";
import { HelpTipPlacement } from "../../global/global.types";
export interface RadioGroupProps {
  label?: string;
  tooltip?: string;
  selectorOptions: SelectorType[];
  currentValue: string;
  id: string;
  name: string;
  disableOptions?: boolean;
  displayInColumn?: boolean;
  className?: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    extraValue?: any,
  ) => void;
  sx?: CSSObject;
  helpTip?: React.ReactNode;
  helpTipPlacement?: HelpTipPlacement;
}
export interface OptionsContainerProps {
  inColumn: boolean;
}
