import { CSSObject } from "styled-components";
export interface PillProps {
  type: "current" | "secondary" | "default";
  sx?: CSSObject;
}
