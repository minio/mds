import React from "react";
import { OverrideTheme } from "../../global/global.types";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
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
  overlayAction?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  overlayObject?: React.ReactNode;
  noLabelMinWidth?: boolean;
  startIcon?: React.ReactNode;
  required?: boolean;
  className?: string;
  helper?: string;
  state?: "normal" | "error" | "success" | "warning";
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
  sizeMode?: "small" | "large";
  orientation?: "horizontal" | "vertical";
  disableErrorUntilFocus?: boolean;
}
export interface InputContainerProps {
  children?: React.ReactNode;
  sx?: OverrideTheme;
  startIcon?: React.ReactNode;
  className?: string;
  sizeMode?: "small" | "large";
}
export interface ExtraInputProps {
  originType?: string;
}
