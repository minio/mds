import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface ModalBoxProps {
  onClose: () => void;
  open: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
  widthLimit?: boolean;
  titleIcon?: React.ReactNode;
  backgroundOverlay?: boolean;
  customMaxWidth?: number | string;
  sx?: OverrideTheme;
}
