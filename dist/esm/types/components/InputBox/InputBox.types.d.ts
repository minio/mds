import React from "react";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
import { OverrideTheme } from "../../global/global.types";
export interface InputBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  fullWidth?: boolean;
  label?: string;
  tooltip?: string;
  sx?: OverrideTheme;
  index?: number;
  overlayId?: "index";
  overlayIcon?: React.ReactNode;
  overlayAction?: () => void;
  overlayObject?: React.ReactNode;
  noLabelMinWidth?: boolean;
  startIcon?: React.ReactNode;
  required?: boolean;
  className?: string;
  error?: string;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
export interface InputContainerProps {
  children?: React.ReactNode;
  sx?: OverrideTheme;
  error?: boolean;
  startIcon?: React.ReactNode;
  className?: string;
}
export interface ExtraInputProps {
  originType?: string;
}
