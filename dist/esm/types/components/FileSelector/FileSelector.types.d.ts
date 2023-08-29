import { CSSObject } from "styled-components";
import React from "react";
export interface FileSelectorProps {
  label: string;
  onChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    fileName: string,
    data?: string,
  ) => void;
  returnEncodedData?: boolean;
  id: string;
  name: string;
  disabled?: boolean;
  tooltip?: string;
  required?: boolean;
  error?: string;
  accept?: string;
  value: string;
  className?: string;
  noLabelMinWidth?: boolean;
  sx?: CSSObject;
}
export interface FileSelectorConstructorProps {
  children?: React.ReactNode;
  sx?: CSSObject;
  error?: boolean;
  startIcon?: React.ReactNode;
  className?: string;
}
