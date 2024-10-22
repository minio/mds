import React from "react";
import { OverrideTheme } from "../../global/global.types";
export type CodeSnippetMode = "inline" | "single" | "multi";
export interface CodeSnippetProps {
  label?: string;
  children: React.ReactNode;
  mode?: CodeSnippetMode;
  actionButton?: React.ReactNode;
  sx?: OverrideTheme;
}
