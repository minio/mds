import { IBytesCalc } from "./global.types";
export declare const breakPoints: {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};
export declare const units: string[];
export declare const fractionToPerc: (
  fraction: "auto" | number | boolean,
) => string;
export declare const calculateBytes: (
  x: string | number,
  showDecimals?: boolean,
  roundFloor?: boolean,
) => IBytesCalc;
