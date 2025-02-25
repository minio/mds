import React from "react";
import { CSSObject } from "styled-components";
export interface PageLayoutProps {
  variant?: "constrained" | "full";
  children: React.ReactNode;
  className?: string;
  sx?: CSSObject;
}
