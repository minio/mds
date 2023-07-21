import { ReactNode } from "react";
import { CSSObject } from "styled-components";
export interface ValuePairMain {
  label?: ReactNode;
  value?: ReactNode;
}
export interface ValuePairCommon {
  direction?: "column" | "row";
  sx?: CSSObject;
}
export type ValuePairProps = ValuePairMain & ValuePairCommon;
