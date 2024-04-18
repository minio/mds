import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface SearchBoxProps {
  id: string;
  placeholder?: string;
  sx?: OverrideTheme;
  icon?: React.ReactNode;
}
