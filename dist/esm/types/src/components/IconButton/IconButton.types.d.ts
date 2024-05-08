import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface IconBase {
  label?: string;
  size?: "small" | "medium" | "large" | string;
  sx?: OverrideTheme;
  children: React.ReactNode;
}
export type IconButtonProps = IconBase &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
