import { CSSProperties } from "react";
import { Theme } from "@emotion/react";
export declare const formActionsTrayMainStyles: (
  theme: Theme,
  marginTop: CSSProperties["marginTop"],
  separator: boolean,
) => {
  display: string;
  justifyContent: string;
  marginTop: import("csstype").Property.MarginTop<string | number> | undefined;
  gap: number;
  paddingTop: number;
  borderTop: string;
};
