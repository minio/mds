// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

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
