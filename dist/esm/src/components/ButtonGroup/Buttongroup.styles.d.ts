import { Theme } from "@emotion/react";
export declare const buttonGroupStyles: (theme: Theme) => {
  display: string;
  flexDirection: "row";
  border: string;
  backgroundColor: string;
  borderRadius: number;
  overflow: string;
  width: string;
  height: number;
  boxSizing: "border-box";
  "& > *:not(:last-child)": {
    borderRight: string;
  };
  "& button": {
    display: string;
    alignItems: string;
    justifyContent: string;
    boxShadow: string;
    border: number;
    borderRadius: number;
    fontSize: number;
    lineHeight: string;
    fontStyle: string;
    fontWeight: number;
    letterSpacing: string;
    fontFamily: string;
    boxSizing: string;
    color: string;
    height: number;
    background: string;
    "& .buttonIcon": {
      height: number;
      "& > svg": {
        width: number;
        height: number;
        minWidth: number;
        minHeight: number;
        color: string;
      };
    };
    "&.button-secondary": {
      color: string;
      "& .buttonIcon > svg": {
        color: string;
      };
    };
    "& .button-label, & .menu-option": {
      whiteSpace: string;
    };
    "&:disabled": {
      cursor: string;
      color: string;
      backgroundColor: string;
      "& .buttonIcon > svg": {
        color: string;
      };
    };
    "&:hover:not(:disabled)": {
      background: string;
      color: string;
      borderColor: string;
      boxShadow: string;
      "& .buttonIcon > svg": {
        color: string;
      };
      "&.button-secondary": {
        color: string;
        "& .buttonIcon > svg": {
          color: string;
        };
      };
    };
    "&:active": {
      backgroundColor: string;
      color: string;
      borderColor: string;
      boxShadow: string;
      "& .buttonIcon > svg": {
        color: string;
      };
    };
    "&.selected:not(:disabled)": {
      backgroundColor: string;
      color: string;
      "& .buttonIcon > svg": {
        color: string;
      };
      "&:hover": {
        backgroundColor: string;
        color: string;
        "& .buttonIcon > svg": {
          color: string;
        };
      };
    };
  };
};
