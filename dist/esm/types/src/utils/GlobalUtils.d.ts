import React from "react";
import { DefaultTheme } from "styled-components";
export declare const expandMenuOptionStyles: (
  theme: DefaultTheme,
  inButtonGroup?: boolean,
  icon?: React.ReactNode,
  children?: React.ReactNode,
) => {
  display: string;
  alignItems: string;
  justifyContent: string;
  gap: number;
  border: number;
  borderRadius: number;
  cursor: string;
  width: string;
  color: any;
  backgroundColor: any;
  padding: string;
  fontWeight: number;
  height: number;
  boxShadow: string;
  textDecoration: string;
  "&:hover:not(:disabled)": {
    backgroundColor: any;
    color: any;
  };
  "&:active:not(:disabled)": {
    backgroundColor: any;
  };
  "&:disabled": {
    color: any;
    cursor: string;
  };
  "&.danger": {
    color: any;
    "&:hover:not(:disabled)": {
      color: any;
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
