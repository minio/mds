import { MouseEventHandler, ReactNode } from "react";
export interface ButtonProps {
  id: string;
  name?: string;
  label?: string;
  variant?: "regular" | "callAction" | "secondary";
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  type?: "submit" | "reset" | "button";
  fullWidth?: boolean;
  disabled?: boolean;
  collapseOnSmall?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}
