import React from "react";
export type CommonHelpTipPlacement = "bottom" | "left" | "right" | "top";
export interface HelpTipProps {
  children: any;
  content: React.ReactNode;
  errorProps?: any;
  placement?: CommonHelpTipPlacement;
}
export interface HelpTipBuild {
  placement: CommonHelpTipPlacement;
}
export interface HelpTipConstructProps {
  placement: CommonHelpTipPlacement;
  content: React.ReactNode;
  anchorEl: (EventTarget & HTMLSpanElement) | null;
}
