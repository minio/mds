import { Theme } from "@emotion/react";
export declare const inlineBox: import("@emotion/react").SerializedStyles;
export declare const readBoxBaseStyles: (theme: Theme) => {
  boxSizing: string;
  display: string;
  width: string;
  alignItems: string;
  "& .predefinedList": {
    boxSizing: string;
    backgroundColor: string;
    border: string;
    padding: string;
    color: string;
    fontSize: number;
    fontWeight: number;
    minHeight: number;
    borderRadius: number;
    width: string;
  };
  "& .innerContent": {
    width: string;
    overflowX: string;
    whiteSpace: string;
    scrollbarWidth: string;
    "&::-webkit-scrollbar": {
      display: string;
    };
  };
  "& .innerContentMultiline": {
    width: string;
    maxHeight: number;
    overflowY: string;
    scrollbarWidth: string;
    "&::-webkit-scrollbar": {
      display: string;
    };
  };
  "& .includesActionButton": {
    paddingRight: number;
    position: string;
  };
  "& .overlayShareOption": {
    position: string;
    width: number;
    right: number;
    top: string;
    transform: string;
  };
  "& .codeSnippet": {
    "& .inputBase": {
      flexWrap: string;
    };
  };
};
