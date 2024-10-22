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
  collapseOnSmall?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode | string;
  compact?: boolean;
  inButtonGroup?: boolean;
  sx?: OverrideTheme;
  isLoading?: boolean;
}
export interface ButtonStatesProps {
  enabled: ButtonStyleProps;
  disabled: ButtonStyleProps;
  hover: ButtonStyleProps;
  pressed: ButtonStyleProps;
}
export interface ButtonStyleProps {
  border: string;
  text: string;
  background: string;
  iconColor: string;
  shadow?: string;
}
export interface ConstructProps {
  parentChildren: ReactNode | string | undefined;
}
export type ButtonThemeProps = Record<ButtonVariant, ButtonStatesProps>;
