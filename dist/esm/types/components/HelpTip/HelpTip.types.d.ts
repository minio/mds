import React from "react";
export interface HelpTipProps {
  children: any;
  content: React.ReactElement;
  errorProps?: any;
  placement?: "bottom" | "left" | "right" | "top";
}
export interface HelpTipBuild {
  placement: "bottom" | "left" | "right" | "top";
}
export interface HelpTipConstructProps {
  placement: "bottom" | "left" | "right" | "top";
  content: React.ReactNode;
  anchorEl: (EventTarget & HTMLSpanElement) | null;
}
