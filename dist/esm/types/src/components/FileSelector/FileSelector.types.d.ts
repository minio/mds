import React from "react";
import { OverrideTheme } from "../../global/global.types";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
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
  error?: string;
  accept?: string;
  value: string;
  className?: string;
  noLabelMinWidth?: boolean;
  sx?: OverrideTheme;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
export interface FileSelectorConstructorProps {
  children?: React.ReactNode;
  sx?: OverrideTheme;
  error?: boolean;
  startIcon?: React.ReactNode;
  className?: string;
}
