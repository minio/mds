import React from "react";
import { CSSObject } from "styled-components";
import { HelpTipPlacement } from "../../global/global.types";
export interface ReadBoxProps {
  label?: string;
  children: React.ReactNode;
  multiLine?: boolean;
  actionButton?: React.ReactNode;
  sx?: CSSObject;
  helpTip?: React.ReactNode;
  helpTipPlacement?: HelpTipPlacement;
}
export interface ReadBoxBaseProps {
  label?: string;
  sx?: CSSObject;
  multiLine?: boolean;
}
