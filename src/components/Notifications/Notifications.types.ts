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

import {
  NotificationAlertPrp,
  NotificationVariant,
} from "../NotificationAlert/NotificationAlert.types";

export const positions = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "top-center",
  "bottom-center",
] as const;

export type NotificationPosition = (typeof positions)[number];

export const durations = [0, 3000, 5000, 10000] as const;

export type NotificationDuration = (typeof durations)[number];

export interface NotificationOptions
  extends Omit<
    NotificationAlertPrp,
    "children" | "title" | "variant" | "onClose"
  > {
  children?: React.ReactNode;
  position?: NotificationPosition;
  duration?: NotificationDuration;
}

export interface Notification {
  id: string;
  variant: NotificationVariant;
  message: string;
  options: NotificationOptions;
  isExiting: boolean;
}
