import { ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
export interface SnackbarMainProps {
  autoHideDuration?: number;
  message?: ReactNode;
  onClose: () => void;
  closeButton?: boolean;
  mode?: "inline" | "portal";
}
export interface SnackbarConstructProps {
  open: boolean;
  condensed?: boolean;
  variant?: "default" | "success" | "warning" | "error";
  sx?: OverrideTheme;
}
export interface SnackbarButtonProps {
  variant: "default" | "success" | "warning" | "error";
  condensed: boolean;
}
export type SnackbarProps = SnackbarMainProps & SnackbarConstructProps;
