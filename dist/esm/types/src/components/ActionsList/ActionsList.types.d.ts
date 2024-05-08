import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface ActionItem {
  action: () => void;
  label: string;
  disabled: boolean;
  icon: React.ReactNode;
  tooltip: string;
}
export interface ActionsListProps {
  sx?: OverrideTheme;
  items: ActionItem[];
  title: React.ReactNode;
}
export interface ActionsListPanelProps {
  sx?: OverrideTheme;
}
export interface ActionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon: React.ReactNode;
}
