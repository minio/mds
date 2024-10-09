import React from "react";
import { OverrideTheme } from "../../global/global.types";
export type LinkButtonVariant = "primary" | "neutral" | "destructive";
export interface LinkButtonStyle {
  default: string;
  hover: string;
  active: string;
  disabled: string;
}
export interface LinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  label?: any;
  variant?: LinkButtonVariant;
  sx?: OverrideTheme;
}
export type LinkButtonThemeVariant = Record<LinkButtonVariant, LinkButtonStyle>;
