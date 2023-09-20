import React from "react";
export interface TooltipProps {
  children: React.ReactElement;
  tooltip: React.ReactNode;
  errorProps?: any;
  placement?: "bottom" | "left" | "right" | "top";
}
export interface TooltipBuild {
  placement: "bottom" | "left" | "right" | "top";
}
export interface TooltipConstructProps {
  placement: "bottom" | "left" | "right" | "top";
  content: React.ReactNode;
  anchorEl: (EventTarget & HTMLSpanElement) | null;
}
