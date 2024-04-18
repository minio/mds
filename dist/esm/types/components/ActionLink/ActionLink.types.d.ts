import { OverrideTheme } from "../../global/global.types";
export interface CommonActionLinkProps {
  isLoading?: boolean;
  label?: any;
}
export interface BaseActionLinkProps {
  sx?: OverrideTheme;
}
export type ActionLinkProps = CommonActionLinkProps & BaseActionLinkProps;
