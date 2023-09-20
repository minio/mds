import { ReactNode } from "react";
import { CSSObject } from "styled-components";
export interface AccordionProps {
  expanded: boolean;
  onTitleClick: () => void;
  id: string;
  title: ReactNode;
  children: ReactNode;
  disabled?: boolean;
  sx?: CSSObject;
}
export interface AccordionMainProps {
  sx?: CSSObject;
}
export interface AccordionContentProps {
  expanded: boolean;
}
