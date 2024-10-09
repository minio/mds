import { Theme } from "@emotion/react";
export declare const breadcrumbsTheme: (theme: Theme) => {
  boxSizing: string;
  flexBasis: string;
  width: string;
  fontSize: number;
  fontWeight: string;
  height: number;
  display: string;
  alignItems: string;
  marginRight: number;
  "& .breadcrumbsList": {
    display: string;
    flexWrap: string;
    flexGrow: number;
    textAlign: "left";
    marginLeft: number;
    marginRight: number;
    overflow: string;
    userSelect: string;
    "& .divider": {
      boxSizing: string;
      display: string;
      justifyContent: string;
      width: number;
      minWidth: number;
      color: string;
      fontSize: number;
      fontStyle: string;
      fontWeight: number;
      lineHeight: string;
      letterSpacing: string;
      padding: string;
    };
    "& svg": {
      color: string;
      "&:hover": {
        color: string;
      };
    };
    "& .last": {
      pointerEvents: string;
    };
  };
  "& .slashSpacingStyle": {
    margin: string;
  };
};
export declare const breadcrumbsButtonTheme: (theme: Theme) => {
  cursor: string;
  display: "inline-flex";
  boxSizing: "border-box";
  border: number;
  backgroundColor: string;
  padding: string;
  color: string;
  fontSize: number;
  fontStyle: string;
  fontWeight: number;
  lineHeight: string;
  letterSpacing: string;
  textOverflow: "ellipsis";
  overflow: "hidden";
  whiteSpace: "nowrap";
  borderRadius: number;
  height: number;
  gap: number;
  "& .button-icon svg": {
    width: number;
    height: number;
    minWidth: number;
    minHeight: number;
    color: string;
  };
  "&.current": {
    cursor: string;
    color: string;
    "& .button-icon svg": {
      color: string;
    };
  };
  "&:not(.current):hover": {
    backgroundColor: string;
    color: string;
    textDecoration: string;
    "& .button-icon svg": {
      color: string;
    };
  };
};
