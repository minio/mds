import { ReactNode } from "react";
import { CSSObject } from "styled-components";
export interface TagMainProps {
  label: string;
  onDelete?: (item: string) => void;
  id: string;
  icon?: ReactNode;
}
export interface TagConstructProps {
  color?: "default" | "secondary" | "warn" | "alert" | "ok" | "grey";
  sx?: CSSObject;
  variant?: "regular" | "outlined";
  square?: boolean;
}
export type TagProps = TagMainProps & TagConstructProps;
