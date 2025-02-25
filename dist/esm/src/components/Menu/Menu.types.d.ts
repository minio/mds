import React, { HTMLAttributes } from "react";
import { CSSObject } from "styled-components";
import { ApplicationLogoProps } from "../ApplicationLogo/ApplicationLogo.types";
export interface MenuProps {
  options?: MenuItemProps[];
  sx?: CSSObject;
  applicationLogo: ApplicationLogoProps;
  callPathAction: (path: string) => void;
  horizontal?: boolean;
  isOpen: boolean;
  collapseAction: () => void;
  displayGroupTitles?: boolean;
  signOutAction?: () => void;
  currentPath?: string;
  middleComponent?: React.ReactNode;
  endComponent?: React.ReactNode;
  mobileModeAuto?: boolean;
}
export interface MenuItemProps {
  group?: string;
  path?: string;
  name: string;
  id?: string;
  icon: React.ReactNode;
  onClick?: (path: string) => void;
  children?: MenuItemProps[];
  badge?: boolean;
  currentPath?: string;
  visibleTooltip?: boolean;
  isVisible?: boolean;
}
export interface SectionHeaderProps extends HTMLAttributes<HTMLDivElement> {
  label: string;
  divider?: boolean;
}
export interface MainHeaderProps {
  divider?: boolean;
}
export interface MenuConstructProps {
  sx?: CSSObject;
}
export interface SubItemsBoxProps {
  anchorEl: (EventTarget & HTMLElement) | null;
  hideTriggerAction: () => void;
  children: React.ReactNode;
  open: boolean;
}
