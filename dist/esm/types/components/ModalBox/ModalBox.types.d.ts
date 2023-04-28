import React from "react";
import { CSSObject } from "styled-components";
export interface ModalBoxProps {
  onClose: () => void;
  open: boolean;
  title: React.ReactNode;
  children: React.ReactNode;
  widthLimit?: boolean;
  titleIcon?: React.ReactNode;
  backgroundOverlay?: boolean;
  iconColor?: "accept" | "delete" | "default";
  customMaxWidth?: number | string;
  sx?: CSSObject;
}
export interface ModalBoxContainerProps {
  backgroundOverlay?: boolean;
  widthLimit?: boolean;
  iconColor?: "accept" | "delete" | "default";
  customMaxWidth?: number | string;
  sx?: CSSObject;
}
