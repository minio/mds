import { Theme } from "@emotion/react";
export declare const expandMenuOptionStyles: (theme: Theme) => {
  display: string;
  alignItems: string;
  justifyContent: string;
  gap: number;
  border: number;
  borderRadius: number;
  cursor: string;
  width: string;
  color: string;
  backgroundColor: string;
  padding: string;
  fontWeight: number;
  height: number;
  boxShadow: string;
  textDecoration: string;
  "&:hover:not(:disabled)": {
    backgroundColor: string;
    color: string;
  };
  "&:active:not(:disabled)": {
    backgroundColor: string;
  };
  "&:disabled": {
    color: string;
    cursor: string;
  };
  "&.danger": {
    color: string;
    "&:hover:not(:disabled)": {
      color: string;
    };
  };
  "& svg": {
    width: number;
    height: number;
  };
  "& .menu-icon": {
    display: string;
    width: number;
    height: number;
  };
  "& .menu-option": {
    fontSize: number;
    fontStyle: string;
    fontWeight: number;
    lineHeight: string;
    letterSpacing: string;
    whiteSpace: "nowrap";
  };
  "& .button-label": {
    marginLeft: number;
  };
};
export declare const dividerStyles: (
  theme: Theme,
) => import("@emotion/react").SerializedStyles;
export declare const expandMenuDescriptionStyles: (
  theme: Theme,
) => import("@emotion/react").SerializedStyles;
