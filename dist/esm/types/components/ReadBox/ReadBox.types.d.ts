import React from "react";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
import { OverrideTheme } from "../../global/global.types";
export interface ReadBoxProps {
  label?: string;
  children: React.ReactNode;
  multiLine?: boolean;
  actionButton?: React.ReactNode;
  sx?: OverrideTheme;
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
}
export interface ReadBoxBaseProps {
  label?: string;
  sx?: OverrideTheme;
  multiLine?: boolean;
}
