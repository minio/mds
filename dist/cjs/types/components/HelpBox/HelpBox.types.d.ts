import { ReactNode } from "react";
export interface HelpBoxProps {
  icon?: ReactNode;
  title: string;
  help: string | ReactNode | ReactNode[];
}
