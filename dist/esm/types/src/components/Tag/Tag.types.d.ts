import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface TagMainProps {
  label: string;
  onDelete?: (item: string) => void;
  id: string;
  icon?: React.ReactNode;
}
export interface TagConstructProps {
  color?: "primary" | "secondary" | "destructive";
  size?: "large" | "small";
  sx?: OverrideTheme;
}
export type TagProps = TagMainProps & TagConstructProps;
