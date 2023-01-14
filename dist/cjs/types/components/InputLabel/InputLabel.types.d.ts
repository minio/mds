import { HTMLAttributes, ReactNode } from "react";
import { CSSObject } from "styled-components";
export interface InputLabelProps extends HTMLAttributes<HTMLLabelElement> {
  children?: ReactNode;
  sx?: CSSObject;
  noMinWidth?: boolean;
  htmlFor?: string;
}
