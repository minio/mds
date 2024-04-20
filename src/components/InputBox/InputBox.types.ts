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

import React from "react";
import { CommonHelpTipPlacement } from "../HelpTip/HelpTip.types";
import { OverrideTheme } from "../../global/global.types";

export interface InputBoxProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  fullWidth?: boolean;
  label?: string;
  tooltip?: string;
  sx?: OverrideTheme;
  index?: number;
  overlayId?: "index";
  overlayIcon?: React.ReactNode;
  overlayAction?: () => void;
  overlayObject?: React.ReactNode;
  noLabelMinWidth?: boolean;
  startIcon?: React.ReactNode;
  required?: boolean;
  className?: string;
  helper?: string;
  state?: "normal" | "error" | "success" | "warning";
  helpTip?: React.ReactNode;
  helpTipPlacement?: CommonHelpTipPlacement;
  size?: "small" | "large";
  orientation?: "horizontal" | "vertical";
}

export interface InputContainerProps {
  children?: React.ReactNode;
  sx?: OverrideTheme;
  error?: boolean;
  startIcon?: React.ReactNode;
  className?: string;
}

export interface ExtraInputProps {
  originType?: string;
}
