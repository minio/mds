import React from "react";
import { CSSObject } from "styled-components";
export interface TabProps {
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  to?: string;
  id: string;
}
export interface TabItemProps {
  tabConfig: TabProps;
  content?: React.ReactNode;
}
export interface TabsProps {
  horizontal?: boolean;
  options: TabItemProps[];
  currentTabOrPath: string;
  useRouteTabs?: boolean;
  routes?: React.ReactElement | null;
  onTabClick: (selectedItem: string) => void;
  optionsInitialComponent?: React.ReactNode;
  optionsEndComponent?: React.ReactNode;
  horizontalBarBackground?: boolean;
  sx?: CSSObject;
}
export interface TabsContainerProps {
  horizontal: boolean;
  horizontalBarBackground: boolean;
  sx?: CSSObject;
}
export interface TabButtonProps {
  id: string;
  horizontal?: boolean;
  label: string;
  onClick: () => void;
  disabled: boolean;
  icon?: React.ReactNode;
  selected?: boolean;
}
export interface TabButtonConstructProps {
  horizontal: boolean;
}
export interface TabPanelProps {
  id: string;
  selectedTab?: string;
  useRouteTabs: boolean;
  children: React.ReactNode;
}
