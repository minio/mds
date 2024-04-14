import React from "react";
import { CSSObject } from "styled-components";
export interface SearchBoxProps {
  id: string;
  placeholder?: string;
  sx?: CSSObject;
  icon?: React.ReactNode;
}
