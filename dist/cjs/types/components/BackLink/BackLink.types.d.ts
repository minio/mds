import React from "react";
import { CSSProperties } from "styled-components";
export interface BackLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sx?: CSSProperties;
  label?: string;
}
