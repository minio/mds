import React, { ReactNode } from "react";
import { CSSObject } from "styled-components";
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
  required?: boolean;
  className?: string;
  error?: string;
}
export interface InputContainerProps {
  children?: ReactNode;
  sx?: CSSObject;
  error?: boolean;
  className?: string;
}
