import React from "react";
import { OverrideTheme } from "../../global/global.types";
import { ButtonVariant } from "../Button/Button.types";
export interface IconBase {
  id: string;
  size?: "small" | "large";
  sx?: OverrideTheme;
  variant?: ButtonVariant;
  isLoading?: boolean;
  children: React.ReactNode;
}
export type IconButtonProps = IconBase &
  React.ButtonHTMLAttributes<HTMLButtonElement>;
