import React from "react";
import { OverrideTheme } from "../../global/global.types";
import { InputBoxState } from "../InputBox/InputBox.types";
export interface FileSelectorProps {
  label: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    fileName: string,
    data?: string,
  ) => void;
  returnEncodedData?: boolean;
  id: string;
  name: string;
  disabled?: boolean;
  tooltip?: string;
  required?: boolean;
  helper?: string;
  accept?: string;
  value: string;
  className?: string;
  state?: InputBoxState;
  noLabelMinWidth?: boolean;
  sx?: OverrideTheme;
}
export interface FileSelectorConstructorProps {
  children?: React.ReactNode;
  sx?: OverrideTheme;
  error?: boolean;
  startIcon?: React.ReactNode;
  className?: string;
}
