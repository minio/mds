import React from "react";
import { CSSProperties } from "styled-components";
export interface ActionsBarProps extends React.HTMLAttributes<HTMLDivElement> {
  narrow?: boolean;
  sx?: CSSProperties;
}
