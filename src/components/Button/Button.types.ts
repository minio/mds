// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

import { MouseEventHandler, ReactNode } from "react";

import { OverrideTheme } from "../../global/global.types";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "destructive"
  | "primary-lighter"
  | "secondary-lighter"
  | "destructive-lighter"
  | "primary-ghost"
  | "secondary-ghost"
  | "destructive-ghost";

export interface ButtonProps {
  id: string;
  name?: string;
  label?: string;
  variant?: ButtonVariant;
  icon?: ReactNode;
  iconLocation?: "start" | "end";
  secondaryIcon?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  collapseOnSmall?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children?: ReactNode | string;
  compact?: boolean;
  inButtonGroup?: boolean;
  sx?: OverrideTheme;
  isLoading?: boolean;
}

export interface ConstructProps {
  parentChildren: ReactNode | string | undefined;
}
