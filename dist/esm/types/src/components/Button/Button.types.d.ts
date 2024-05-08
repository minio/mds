import { MouseEventHandler, ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
export interface ButtonProps {
  id: string;
  name?: string;
  label?: string;
  variant?: "regular" | "callAction" | "secondary" | "text" | "subAction";
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  fullWidth?: boolean;
  disabled?: boolean;
  collapseOnSmall?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode | string;
  compact?: boolean;
  sx?: OverrideTheme;
}
export interface ConstructProps {
  parentChildren: ReactNode | string | undefined;
}
