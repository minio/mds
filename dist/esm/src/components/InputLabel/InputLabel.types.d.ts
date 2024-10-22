import { HTMLAttributes, ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
export type InputLabelOrientation = "horizontal" | "vertical";
export type InputLabelSizeMode = "small" | "large";
export interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  sx?: OverrideTheme;
  noMinWidth?: boolean;
  htmlFor?: string;
  orientation?: InputLabelOrientation;
  inputSizeMode?: InputLabelSizeMode;
}
