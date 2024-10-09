import React from "react";
import { OverrideTheme } from "../../global/global.types";
export type TagColors = "primary" | "secondary" | "destructive";
export type TagSizes = "large" | "small";
export interface TagVariantProps {
  background: string;
  label: string;
  deleteColor: string;
}
export interface TagProps {
  label: string;
  onDelete?: (item: string) => void;
  id: string;
  icon?: React.ReactNode;
  color?: TagColors;
  size?: TagSizes;
  sx?: OverrideTheme;
}
export type TagThemeVariants = Record<TagColors, TagVariantProps>;
