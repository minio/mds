import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface BackLinkProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  sx?: OverrideTheme;
  label?: string;
}
