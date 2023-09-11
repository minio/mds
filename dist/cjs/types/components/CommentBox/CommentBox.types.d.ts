import React from "react";
import { CSSObject } from "styled-components";
export interface CommentBoxProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  fullWidth?: boolean;
  label?: string;
  tooltip?: string;
  sx?: CSSObject;
  index?: number;
  noLabelMinWidth?: boolean;
  required?: boolean;
  className?: string;
  error?: string;
  helpTip?: any;
  helpTipPlacement?: "top" | "bottom" | "left" | "right";
}
export interface CommentContainerProps {
  children?: React.ReactNode;
  sx?: CSSObject;
  error?: boolean;
  startIcon?: React.ReactNode;
  className?: string;
}
export interface ExtraCommentProps {
  originType?: string;
}
