import React, { CSSProperties } from "react";
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
  customContentPadding?: CSSProperties["padding"];
  modalActions?: React.ReactNode;
  customMaxHeight?: CSSProperties["maxHeight"];
  sx?: OverrideTheme;
}
export interface ModalBoxActionsProps {
  children: React.ReactNode;
  stretch?: boolean;
}
