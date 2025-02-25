import React from "react";
import { CSSObject } from "styled-components";
export interface IconBase {
  label?: string;
  size?: "small" | "medium" | "large" | string;
  sx?: CSSObject;
  children: React.ReactNode;
}
export type IconButtonProps = IconBase &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
