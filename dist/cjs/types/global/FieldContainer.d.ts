import React, { FC } from "react";
import { CSSObject } from "styled-components";
export interface FieldContainerProps {
  children: React.ReactNode;
  className?: string;
  sx?: CSSObject;
}
export declare const FieldContainer: FC<FieldContainerProps>;
export default FieldContainer;
