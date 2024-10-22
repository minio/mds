import React from "react";
import { OverrideTheme } from "../../global/global.types";
import { InputBoxOrientation, InputBoxState } from "../InputBox/InputBox.types";
export interface TextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  fullWidth?: boolean;
  label?: string;
  tooltip?: string;
  sx?: OverrideTheme;
  index?: number;
  noLabelMinWidth?: boolean;
  required?: boolean;
  className?: string;
  helper?: string;
  state?: InputBoxState;
  orientation?: InputBoxOrientation;
}
