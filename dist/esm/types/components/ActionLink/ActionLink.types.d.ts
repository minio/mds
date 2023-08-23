import { CSSObject } from "styled-components";
export interface CommonActionLinkProps {
  isLoading?: boolean;
  label?: any;
}
export interface BaseActionLinkProps {
  sx?: CSSObject;
}
export type ActionLinkProps = CommonActionLinkProps & BaseActionLinkProps;
