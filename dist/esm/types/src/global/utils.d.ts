import { DefaultTheme } from "styled-components";
import { IBytesCalc, OverrideTheme } from "./global.types";
export declare const breakPoints: {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
};
export declare const paddingSizeVariants: {
  sizeXXXS: number;
  sizeXXS: number;
  sizeXS: number;
  sizeSM: number;
  size: number;
  sizeMD: number;
  sizeLG: number;
  sizeXL: number;
  sizeXXL: number;
};
export declare const radioVariants: {
  borderRadiusXS: number;
  borderRadiusSM: number;
  borderRadius: number;
  borderRadiusLG: number;
  borderRadiusXLG: number;
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
  theme: DefaultTheme,
) => import("styled-components").CSSObject | undefined;
