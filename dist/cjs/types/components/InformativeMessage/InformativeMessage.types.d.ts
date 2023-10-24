import React from "react";
import { CSSObject } from "styled-components";
export interface InformativeMessageMain {
  title: React.ReactNode;
  message: React.ReactNode;
}
export interface InformativeConstructProps {
  variant?: "default" | "success" | "warning" | "error";
  sx?: CSSObject;
}
export type InformativeMessageProps = InformativeMessageMain &
  InformativeConstructProps;
