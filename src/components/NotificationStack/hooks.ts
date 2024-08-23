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

import { useCallback, useState } from "react";

import { NotificationAlertPrp } from "../NotificationAlert/NotificationAlert.types";
import { NotificationStackProps } from "./NotificationStack.types";

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<NotificationStackProps[]>(
    [],
  );

  const addNotification = useCallback(
    (message: NotificationAlertPrp, durationSeconds: 0 | 3 | 5 | 10) => {
      const id = Date.now();
      const duration = durationSeconds * 1000;

      const newNotification: NotificationStackProps = {
        id,
        duration,
        hovered: false,
        timeoutId: undefined,
        notificationInfo: message,
      };
      setNotifications((prevState) => [...prevState, newNotification]);

      let timeoutId = undefined;

      if (duration !== 0) {
        timeoutId = setTimeout(() => {
          setNotifications((prev) => {
            const notification = prev.find((notif) => notif.id === id);
            if (notification && !notification.hovered) {
              return prev.filter((notif) => notif.id !== id);
            }
            return prev;
          });
        }, duration);
      }

      setNotifications((prev) =>
        prev.map((notif) =>
          notif.id === id ? { ...notif, timeoutId } : notif,
        ),
      );

      return () => clearTimeout(timeoutId);
    },
    [],
  );

  const removeNotification = useCallback((id: number) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id),
    );
  }, []);

  const setHovered = useCallback((id: number, hovered: boolean) => {
    setNotifications((prev) =>
      prev.map((notifElement) => {
        if (notifElement.id === id && notifElement.duration !== 0) {
          if (hovered) {
            clearTimeout(notifElement.timeoutId); // We clear the timeout when the notification is hovered
          } else {
            const timeoutId = setTimeout(() => {
              // We add a new timeout when the notification is not hovered
              setNotifications((prev) => prev.filter((n) => n.id !== id));
            }, notifElement.duration);
            return { ...notifElement, hovered, timeoutId };
          }
          return { ...notifElement, hovered };
        }
        return notifElement;
      }),
    );
  }, []);

  return {
    notifications,
    addNotification,
    removeNotification,
    setHovered,
  };
};
