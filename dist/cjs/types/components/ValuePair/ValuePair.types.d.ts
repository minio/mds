import { ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
export interface ValuePairMain {
  label?: ReactNode;
  value?: ReactNode;
}
export interface ValuePairCommon {
  direction?: "column" | "row";
  sx?: OverrideTheme;
}
export type ValuePairProps = ValuePairMain & ValuePairCommon;
