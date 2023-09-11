import React from "react";
import { CSSObject } from "styled-components";
export interface CodeEditorProps {
  value: string;
  label?: string;
  mode?: string;
  tooltip?: string;
  editorHeight?: string | number;
  onChange: (value: string) => any;
  className?: string;
  helpTools?: React.ReactNode;
  sx?: CSSObject;
  helpTip?: any;
  helpTipPlacement?: "top" | "bottom" | "left" | "right";
}
export interface CodeEditorBaseProps {
  editorHeight: string | number;
  sx?: CSSObject;
  className?: string;
}
