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

import React, { MouseEventHandler, ReactNode } from "react";

import { OverrideTheme } from "../../global/global.types";

export interface BreadcrumbsProps {
  sx?: OverrideTheme;
  options: BreadcrumbsOption[];
  goBackFunction?: () => void;
  displayLastItems?: false | number;
  onClickOption?: (to?: string) => void;
  children?: React.ReactNode;
  markCurrentItem?: boolean;
}

export interface BreadcrumbsOption {
  label?: string;
  to?: string;
  onClick?: (to?: string) => void;
  icon?: ReactNode;
  subOptions?: BreadcrumbsOption[];
  disabled?: boolean;
}

export interface BreadcrumbsContainerProps {
  sx?: OverrideTheme;
}

export interface BreadcrumbsOptionProps {
  id: string;
  name?: string;
  label?: string;
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  disabled?: boolean;
  current?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  onClickOption?: (to?: string) => void;
  children?: ReactNode | string;
  sx?: OverrideTheme;
  subOptions?: BreadcrumbsOption[];
}
