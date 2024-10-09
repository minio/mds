import { Theme } from "@emotion/react";
import { LinkButtonVariant } from "./LinkButton.types";
export declare const linkButtonBase: (
  theme: Theme,
  variant: LinkButtonVariant,
) => {
  cursor: string;
  display: string;
  backgroundColor: string;
  border: number;
  padding: number;
  color: string;
  textDecoration: string;
  fontSize: string;
  "&:disabled": {
    cursor: string;
    textDecoration: string;
    color: string;
  };
  "&:hover:not(:disabled)": {
    textDecoration: string;
    color: string;
  };
  "&:active:not(:disabled)": {
    textDecoration: string;
    color: string;
  };
};
