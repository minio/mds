import React from "react";
import { OverrideTheme } from "../../global/global.types";
export type InputBoxState = "normal" | "error" | "success" | "warning";
export type InputBoxSize = "small" | "large";
export type InputBoxOrientation = "horizontal" | "vertical";
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
  state?: InputBoxState;
  sizeMode?: InputBoxSize;
  orientation?: InputBoxOrientation;
  disableErrorUntilFocus?: boolean;
  passwordRevealEnabled?: boolean;
}
