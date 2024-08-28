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

import { ReactNode } from "react";

import { OverrideTheme } from "../../global/global.types";

export type AlertDesignMode = "banner" | "card";
export type NotificationEmphasis = "subtle" | "minimal";
export type NotificationVariant =
  | "neutral"
  | "information"
  | "success"
  | "warning"
  | "danger";

export interface NotificationAlertBase {
  title?: string;
  children: ReactNode;
  action?: ReactNode;
  isLoading?: boolean;
  onClose?: () => void; //If not set, we don't show the close button
}

export interface NotificationAlertConstruct {
  emphasisMode?: NotificationEmphasis;
  variant?: NotificationVariant;
  shadow?: boolean;
  designMode?: AlertDesignMode;
  sx?: OverrideTheme;
}

export type NotificationAlertPrp = NotificationAlertBase &
  NotificationAlertConstruct;
