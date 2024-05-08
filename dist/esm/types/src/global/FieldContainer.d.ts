import React, { FC } from "react";
import { OverrideTheme } from "./global.types";
export interface FieldContainerProps {
  children: React.ReactNode;
  className?: string;
  sx?: OverrideTheme;
}
export declare const FieldContainer: FC<FieldContainerProps>;
export default FieldContainer;
