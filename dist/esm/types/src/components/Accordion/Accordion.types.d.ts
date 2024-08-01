import { ReactNode } from "react";
import { OverrideTheme } from "../../global/global.types";
export interface AccordionProps {
  expanded: boolean;
  onTitleClick: () => void;
  id: string;
  title: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  contentBackgroundColor?: boolean;
  sx?: OverrideTheme;
}
export interface AccordionMainProps {
  sx?: OverrideTheme;
}
export interface AccordionContentProps {
  expanded: boolean;
  backgroundColor?: boolean;
}
