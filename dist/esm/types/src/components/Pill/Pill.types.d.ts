import { OverrideTheme } from "../../global/global.types";
export interface PillProps {
  type: "current" | "secondary" | "default";
  sx?: OverrideTheme;
}
