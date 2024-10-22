import React from "react";
import { OverrideTheme } from "../../global/global.types";
export interface TabProps {
  label: React.ReactNode;
  icon?: React.ReactNode;
  disabled?: boolean;
  to?: string;
  id: string;
}
export type TabItemProps =
  | {
      tabConfig?: never;
      content?: never;
      separator: true;
    }
  | {
      tabConfig: TabProps;
      content?: React.ReactNode;
      separator?: never;
    };
export interface TabsProps {
  horizontal?: boolean;
  options: TabItemProps[];
  currentTabOrPath: string;
  useRouteTabs?: boolean;
  routes?: React.ReactElement | null;
  onTabClick: (selectedItem: string) => void;
  optionsInitialComponent?: React.ReactNode;
  optionsEndComponent?: React.ReactNode;
  sx?: OverrideTheme;
}
export interface TabButtonProps {
  id: string;
  horizontal?: boolean;
  label: React.ReactNode;
  onClick: () => void;
  disabled: boolean;
  icon?: React.ReactNode;
  selected?: boolean;
}
export interface TabPanelProps {
  id: string;
  selectedTab?: string;
  useRouteTabs: boolean;
  children: React.ReactNode;
}
