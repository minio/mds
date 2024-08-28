import { OverrideTheme } from "../../global/global.types";
export type LinkButtonVariant = "primary" | "neutral" | "destructive";
export interface CommonLinkButtonProps {
  isLoading?: boolean;
  label?: any;
}
export interface BaseLinkButtonProps {
  variant?: LinkButtonVariant;
  sx?: OverrideTheme;
}
export type LinkButtonProps = CommonLinkButtonProps & BaseLinkButtonProps;
