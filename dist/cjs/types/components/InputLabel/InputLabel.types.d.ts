import { HTMLAttributes, ReactNode } from "react";
import { CSSObject } from "styled-components";
import { HelpTipPlacement } from "../../global/global.types";
export interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  sx?: CSSObject;
  noMinWidth?: boolean;
  htmlFor?: string;
  helpTip?: React.ReactNode;
  helpTipPlacement?: HelpTipPlacement;
}
