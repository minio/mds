import { Theme } from "@emotion/react";
export declare const expandButtonBaseStyles: (theme: Theme) => {
  display: string;
  cursor: string;
  alignItems: string;
  backgroundColor: string;
  borderRadius: number;
  padding: number;
  height: number;
  fontSize: number;
  border: string;
  color: string;
  "& svg": {
    width: number;
    height: number;
  };
  "&:hover": {
    color: string;
    backgroundColor: string;
  };
  "&:active": {
    color: string;
    backgroundColor: string;
  };
  "&:disabled": {
    color: string;
    backgroundColor: string;
    cursor: string;
  };
};
