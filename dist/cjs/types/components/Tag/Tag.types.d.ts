import { ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
export interface TagMainProps {
  label: string;
  onDelete?: (item: string) => void;
  id: string;
  icon?: ReactNode;
}
export interface TagConstructProps {
  color?: "default" | "secondary" | "warn" | "alert" | "ok" | "grey";
  sx?: OverrideTheme;
  variant?: "regular" | "outlined";
  square?: boolean;
}
export type TagProps = TagMainProps & TagConstructProps;
