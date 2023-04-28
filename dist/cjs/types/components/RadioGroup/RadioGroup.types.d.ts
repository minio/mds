import React from "react";
import { CSSObject } from "styled-components";
import { SelectorType } from "../../global/global.types";
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
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  sx?: CSSObject;
}
export interface OptionsContainerProps {
  inColumn: boolean;
}
