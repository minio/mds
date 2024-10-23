import React from "react";
export interface HelpBoxProps {
  icon?: React.ReactNode;
  title: string;
  help: string | React.ReactNode | React.ReactNode[];
}
