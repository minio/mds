import { Theme } from "@emotion/react";
import { TagColors } from "./Tag.types";
export declare const tagStylesSmall: (theme: Theme) => {
  height: number;
  borderRadius: number;
  padding: string;
  "& .deleteTagButton": {
    "& svg": {
      width: number;
      height: number;
      minWidth: number;
      minHeight: number;
    };
  };
};
export declare const tagBaseStyles: (
  theme: Theme,
  color: TagColors,
) => {
  boxSizing: string;
  position: string;
  margin: number;
  userSelect: string;
  appearance: string;
  maxWidth: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: number;
  lineHeight: string;
  display: string;
  alignItems: string;
  justifyContent: string;
  height: number;
  color: string;
  background: string;
  boxShadow: string;
  borderRadius: number;
  whiteSpace: string;
  cursor: string;
  outline: number;
  textDecoration: string;
  padding: string;
  verticalAlign: string;
  gap: number;
  "& svg": {
    width: number;
    height: number;
    fill: string;
  };
  "& .deleteTagButton": {
    backgroundColor: string;
    border: number;
    display: string;
    alignItems: string;
    justifyContent: string;
    padding: number;
    cursor: string;
    opacity: number;
    "&:hover": {
      opacity: number;
    };
    "& svg": {
      color: string;
      fill: string;
      width: number;
      height: number;
      minWidth: number;
      minHeight: number;
    };
  };
};
