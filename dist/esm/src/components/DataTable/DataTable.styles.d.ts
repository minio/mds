import { CSSProperties } from "react";
import { Theme } from "@emotion/react";
export declare const dataTableWrapperStyles: (
  theme: Theme,
  customPaperHeight: CSSProperties["height"],
  disabled: boolean,
  rowHeight: number,
) => import("@emotion/react").SerializedStyles;
export declare const tableRowPredefStyles: (theme: Theme) => {
  deleted: {
    color: string;
    backgroundColor: string;
    "&.selected": {
      color: string;
    };
  };
};
export declare const selectorBoxStyles: (
  theme: Theme,
) => import("@emotion/react").SerializedStyles;
