import {
  IBytesCalc,
  OverrideTheme,
  ThemeDefinitionProps,
} from "./global.types";
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
export declare const getThemeColors: (themeSubVar: string) => {
  [key: string]: string;
};
export declare const overridePropsParse: (
  overrideValue: OverrideTheme,
  theme: ThemeDefinitionProps,
) => import("styled-components").CSSObject | undefined;
