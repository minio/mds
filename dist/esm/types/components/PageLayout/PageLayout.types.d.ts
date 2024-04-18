import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface PageLayoutProps {
  variant?: "constrained" | "full";
  children: React.ReactNode;
  className?: string;
  sx?: OverrideTheme;
}
