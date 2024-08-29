import { HTMLAttributes, ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
export interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  sx?: OverrideTheme;
  noMinWidth?: boolean;
  htmlFor?: string;
  helpTip?: ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
  orientation?: "horizontal" | "vertical";
  inputSizeMode?: "small" | "large";
}
