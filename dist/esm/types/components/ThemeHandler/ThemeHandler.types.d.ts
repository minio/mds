import { ReactNode } from "react";
import { ThemeDefinitionProps } from "../../global/global.types";
export interface ThemeHandlerProps {
  darkMode?: boolean;
  customTheme?: ThemeDefinitionProps;
  children: ReactNode;
}
