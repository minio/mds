import React from "react";
import { CSSProperties } from "styled-components";
export interface ButtonGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  displayLabels?: boolean;
  sx?: CSSProperties;
}
