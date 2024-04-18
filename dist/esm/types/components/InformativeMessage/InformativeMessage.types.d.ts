import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface InformativeMessageMain {
  title: React.ReactNode;
  message: React.ReactNode;
}
export interface InformativeConstructProps {
  variant?: "default" | "success" | "warning" | "error";
  sx?: OverrideTheme;
}
export type InformativeMessageProps = InformativeMessageMain &
  InformativeConstructProps;
