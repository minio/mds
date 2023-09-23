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

export type CommonHelpTipPlacement = "bottom" | "left" | "right" | "top";

export interface HelpTipProps {
  children: any;
  content: React.ReactNode;
  errorProps?: any;
  placement?: CommonHelpTipPlacement;
}

export interface HelpTipBuild {
  placement: CommonHelpTipPlacement;
}

export interface HelpTipConstructProps {
  placement: CommonHelpTipPlacement;
  content: React.ReactNode;
  anchorEl: (EventTarget & HTMLSpanElement) | null;
}
