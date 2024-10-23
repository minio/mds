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

import { useCallback, useMemo } from "react";

import NotificationManager from "./NotificationManager";
import { NotificationOptions } from "./Notifications.types";

export const useNotification = () => {
  const success = useCallback(
    (message: string, options?: NotificationOptions) => {
      NotificationManager.addNotification("success", message, options);
    },
    [],
  );

  const danger = useCallback(
    (message: string, options?: NotificationOptions) => {
      NotificationManager.addNotification("danger", message, options);
    },
    [],
  );

  const warning = useCallback(
    (message: string, options?: NotificationOptions) => {
      NotificationManager.addNotification("warning", message, options);
    },
    [],
  );

  const information = useCallback(
    (message: string, options?: NotificationOptions) => {
      NotificationManager.addNotification("information", message, options);
    },
    [],
  );

  const neutral = useCallback(
    (message: string, options?: NotificationOptions) => {
      NotificationManager.addNotification("neutral", message, options);
    },
    [],
  );

  const clear = useCallback(() => {
    NotificationManager.clearNotifications();
  }, []);

  const notification = useMemo(
    () => ({
      success,
      danger,
      warning,
      information,
      neutral,
      clear,
    }),
    [success, danger, warning, information, neutral, clear],
  );

  return notification;
};
