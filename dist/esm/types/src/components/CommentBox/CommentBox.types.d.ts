import React from "react";
import { OverrideTheme } from "../../global/global.types";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
export interface CommentBoxProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  fullWidth?: boolean;
  label?: string;
  tooltip?: string;
  sx?: OverrideTheme;
  index?: number;
  noLabelMinWidth?: boolean;
  required?: boolean;
  className?: string;
  error?: string;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
export interface CommentContainerProps {
  children?: React.ReactNode;
  sx?: OverrideTheme;
  error?: boolean;
  startIcon?: React.ReactNode;
  className?: string;
}
export interface ExtraCommentProps {
  originType?: string;
}
