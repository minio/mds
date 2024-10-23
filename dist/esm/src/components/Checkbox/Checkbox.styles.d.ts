import { Theme } from "@emotion/react";
export declare const checkboxStyles: (theme: Theme) => {
  position: string;
  "& input": {
    display: string;
  };
  "& .checkbox": {
    position: string;
    display: string;
    width: number;
    height: number;
    borderRadius: number;
    border: string;
    backgroundColor: string;
    boxSizing: "border-box";
    "&:hover:not(:disabled)": {
      borderColor: string;
    };
    "& .icon-overlay": {
      display: string;
    };
  };
  "input:checked ~ .checkbox": {
    borderColor: string;
    backgroundColor: string;
    overflow: string;
    "&:before": {
      content: string;
      position: string;
      display: string;
      width: number;
      height: number;
      borderRadius: number;
      top: string;
      left: string;
      transform: string;
    };
    "& .icon-overlay": {
      display: string;
    };
    "&:hover": {
      borderColor: string;
      backgroundColor: string;
    };
  };
  "input:disabled": {
    "&  ~ .checkbox": {
      border: string;
      backgroundColor: string;
      "&:hover": {
        borderColor: string;
        backgroundColor: string;
      };
    };
  };
  "& .icon-overlay": {
    color: string;
    position: string;
    width: number;
    height: number;
    "&.disabled": {
      color: string;
    };
  };
};
