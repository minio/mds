import { Theme } from "@emotion/react";
export declare const inputHelperStyles: (theme: Theme) => {
  fontFamily: string;
  fontSize: number;
  color: string;
  marginTop: number;
  lineHeight: string;
  minHeight: number;
  "&.errorState": {
    color: string;
  };
  "&.successState": {
    color: string;
  };
  "&.warningState": {
    color: string;
  };
};
