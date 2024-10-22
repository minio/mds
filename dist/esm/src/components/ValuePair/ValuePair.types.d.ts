import { ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
export type ValuePairDirection = "column" | "row";
export interface ValuePairMain {
  label?: ReactNode;
  value?: ReactNode;
}
export interface ValuePairCommon {
  direction?: ValuePairDirection;
  sx?: OverrideTheme;
}
export type ValuePairProps = ValuePairMain & ValuePairCommon;
