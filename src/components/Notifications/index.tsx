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

import React, { useEffect, useState } from "react";

import NotificationAlert from "../NotificationAlert";
import NotificationManager from "./NotificationManager";
import {
  animatedNotificationStyles,
  notificationsContainerStyles,
} from "./Notifications.styles";
import { Notification, NotificationsProps } from "./Notifications.types";

const positions = [
  "top-left",
  "top-right",
  "bottom-left",
  "bottom-right",
  "top-center",
  "bottom-center",
];

const Notifications: React.FC<NotificationsProps> = ({
  maxNotifications = 5,
}) => {
  const [notificationsByPosition, setNotificationsByPosition] = useState<
    Record<string, Notification[]>
  >({});

  useEffect(() => {
    // Set the max number of notifications
    NotificationManager.setMaxNotifications(maxNotifications);

    const handleNotifications = (notifications: Notification[]) => {
      const grouped = positions.reduce(
        (acc, position) => {
          acc[position] = notifications.filter(
            (notification) =>
              (notification.options.position ?? "top-center") === position,
          );
          return acc;
        },
        {} as Record<string, Notification[]>,
      );
      setNotificationsByPosition(grouped);
    };

    // Subscribe to NotificationManager
    NotificationManager.subscribe(handleNotifications);

    // Cleanup on unmount
    return () => {
      NotificationManager.unsubscribe(handleNotifications);
    };
  }, [maxNotifications]);

  return (
    <>
      {positions.map((position) => {
        const notifications = notificationsByPosition[position];
        if (!notifications || notifications.length === 0) {
          return null;
        }

        return (
          <div css={[notificationsContainerStyles(position)]} key={position}>
            {notifications.map((notification) => {
              const {
                children,
                wrapText = true,
                shadow = true,
              } = notification.options;

              const title = children ? notification.message : undefined;
              const content = children || notification.message;

              return (
                <div
                  css={animatedNotificationStyles(
                    notification.isExiting,
                    position,
                  )}
                  key={notification.id}
                >
                  <NotificationAlert
                    title={title}
                    variant={notification.variant}
                    onClose={() =>
                      NotificationManager.removeNotification(notification.id)
                    }
                    wrapText={wrapText}
                    shadow={shadow}
                    {...notification.options}
                  >
                    {content}
                  </NotificationAlert>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};

export default Notifications;
