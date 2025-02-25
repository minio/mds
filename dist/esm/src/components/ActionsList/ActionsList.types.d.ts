import React from "react";
import { CSSObject } from "styled-components";
export interface ActionItem {
  action: () => void;
  label: string;
  disabled: boolean;
  icon: React.ReactNode;
  tooltip: string;
}
export interface ActionsListProps {
  sx?: CSSObject;
  items: ActionItem[];
  title: React.ReactNode;
}
export interface ActionsListPanelProps {
  sx?: CSSObject;
}
export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: React.ReactNode;
}
