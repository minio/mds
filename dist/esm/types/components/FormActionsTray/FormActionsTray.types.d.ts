import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface FormActionsTrayProps
  extends React.HTMLAttributes<HTMLDivElement> {
  marginTop?: number;
  separator?: boolean;
  sx?: OverrideTheme;
}
