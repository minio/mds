import React from "react";
import { OverrideTheme, SelectOption } from "../../global/global.types";
export interface RadioGroupProps {
  label?: string;
  tooltip?: string;
  selectorOptions: SelectOption[];
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
  sx?: OverrideTheme;
}
