import { CSSObject } from "styled-components";
export interface TagMainProps {
  label: string;
  onDelete?: (item: string) => void;
  id: string;
}
export interface TagConstructProps {
  color?: "default" | "secondary" | "warn" | "alert" | "ok";
  sx?: CSSObject;
}
export type TagProps = TagMainProps & TagConstructProps;
