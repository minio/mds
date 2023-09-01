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

import { ReactNode } from "react";
import { CSSObject } from "styled-components";

export interface SnackbarMainProps {
  autoHideDuration?: number;
  message?: ReactNode;
  onClose: () => void;
  closeButton?: boolean;
  mode?: "inline" | "portal";
}

export interface SnackbarConstructProps {
  open: boolean;
  condensed?: boolean;
  variant?: "default" | "success" | "warning" | "error";
  sx?: CSSObject;
}

export interface SnackbarButtonProps {
  variant: "default" | "success" | "warning" | "error";
  condensed: boolean;
}

export type SnackbarProps = SnackbarMainProps & SnackbarConstructProps;
