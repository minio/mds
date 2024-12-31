import { Theme } from "@emotion/react";
import { DateTimeMode } from "./DateTimeInput.types";
export declare const dateSelectorContainerStyles: (
  theme: Theme,
) => import("@emotion/react").SerializedStyles;
export declare const dateInputContainerStyles: import("@emotion/react").SerializedStyles;
export declare const optionChangeButtonStyles: (
  theme: Theme,
) => import("@emotion/react").SerializedStyles;
export declare const dateTimeContainerStyles: (
  theme: Theme,
  isPortal: boolean,
  mode: DateTimeMode,
) => {
  position: string;
  border: string;
  backgroundColor: string;
  width: number;
  minHeight: number;
  boxShadow: string;
  borderRadius: number;
  "& .modeBar": {
    display: string;
    gap: number;
    marginBottom: number;
  };
};
export declare const timeSelectorContainerStyles: (
  theme: Theme,
) => import("@emotion/react").SerializedStyles;
export declare const saveDateButtons: (
  theme: Theme,
) => import("@emotion/react").SerializedStyles;
