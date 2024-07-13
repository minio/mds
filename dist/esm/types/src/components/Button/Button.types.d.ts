import { MouseEventHandler, ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
export type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "primary-lighter"
  | "secondary-lighter"
  | "destructive-lighter"
  | "primary-ghost"
  | "secondary-ghost"
  | "destructive-ghost";
export interface ButtonProps {
  id: string;
  name?: string;
  label?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  secondaryIcon?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  collapseOnSmall?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode | string;
  compact?: boolean;
  inButtonGroup?: boolean;
  sx?: OverrideTheme;
  isLoading?: boolean;
}
export interface ConstructProps {
  parentChildren: ReactNode | string | undefined;
}
