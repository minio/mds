import React from "react";
import { CSSObject } from "styled-components";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
export interface InputBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  fullWidth?: boolean;
  label?: string;
  tooltip?: string;
  sx?: CSSObject;
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
  sx?: CSSObject;
  error?: boolean;
  startIcon?: React.ReactNode;
  className?: string;
}
export interface ExtraInputProps {
  originType?: string;
}
