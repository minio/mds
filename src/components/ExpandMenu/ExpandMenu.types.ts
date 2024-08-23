// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
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

import React, { ReactNode } from "react";

import { OverrideTheme } from "../../global/global.types";
import { ButtonVariant } from "../Button/Button.types";

export interface ExpandMenuProps {
  id: string;
  name?: string;
  label?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  children?: ReactNode | string;
  dropMenuPosition?: "start" | "end" | "middle";
  compact?: boolean;
  dropArrow?: boolean;
  inButtonGroup?: boolean;
  forInputOptions?: boolean;
  sx?: OverrideTheme;
}

export interface ExpandMenuOptionProps {
  id: string;
  variant?: "regular" | "secondary";
  icon?: ReactNode;
  sx?: OverrideTheme;
  inButtonGroup?: boolean;
  children: ReactNode;
}

export interface ExpandDropBaseProps {
  selectedOption?: string;
  hideTriggerAction: () => void;
  open: boolean;
  anchorEl?: (EventTarget & HTMLElement) | null;
  anchorOrigin?: "start" | "end" | "middle";
  dropMinWidth?: boolean;
  children: React.ReactNode;
}

export interface DropdownMainProps {
  forInputOptions?: boolean;
  sx?: OverrideTheme;
}

export interface ExpandMenuConstructProps {
  parentChildren: ReactNode;
}

export type ExpandDropdownProps = DropdownMainProps & ExpandDropBaseProps;
