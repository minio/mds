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
import styled, { css, keyframes } from "styled-components";

import NotificationAlert from "../NotificationAlert/NotificationAlert";
import NotificationManager from "./NotificationManager";
import { Notification, positions } from "./Notifications.types";

// Define keyframes for animations
const slideInFromTop = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOutToTop = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
`;

const slideInFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideOutToBottom = keyframes`
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(20px);
  }
`;

const AnimatedNotification = styled.div<{
  isExiting: boolean;
  position: string;
}>`
  width: max-content;
  max-width: 600px;
  pointer-events: auto;
  margin: 0 auto;

  animation: ${({ isExiting, position }) =>
    isExiting
      ? css`
          ${position.startsWith("bottom")
            ? slideOutToBottom
            : slideOutToTop} 0.3s ease forwards
        `
      : css`
          ${position.startsWith("bottom")
            ? slideInFromBottom
            : slideInFromTop} 0.3s ease-out forwards
        `};
`;

const NotificationContainer = styled.div<{ position: string }>`
  position: absolute;
  max-height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: ${({ position }) =>
    position.startsWith("bottom") ? "column-reverse" : "column"};
  padding: 16px;
  gap: 8px;
  z-index: 1000;
  pointer-events: none;

  ${({ position }) => {
    switch (position) {
      case "top-left":
        return "top: 0; left: 0;";
      case "top-right":
        return "top: 0; right: 0;";
      case "bottom-left":
        return "bottom: 0; left: 0;";
      case "bottom-right":
        return "bottom: 0; right: 0;";
      case "top-center":
        return "top: 0; left: 50%; transform: translateX(-50%);";
      case "bottom-center":
        return "bottom: 0; left: 50%; transform: translateX(-50%);";
      default:
        return "";
    }
  }}
`;

interface NotificationsProps {
  maxNotifications?: number;
}

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
          <NotificationContainer key={position} position={position}>
            {notifications.map((notification) => {
              const { children, shadow = true } = notification.options;

              const title = children ? notification.message : undefined;
              const content = children || notification.message;

              return (
                <AnimatedNotification
                  key={notification.id}
                  isExiting={notification.isExiting}
                  position={position}
                >
                  <NotificationAlert
                    title={title}
                    variant={notification.variant}
                    onClose={() =>
                      NotificationManager.removeNotification(notification.id)
                    }
                    shadow={shadow}
                    {...notification.options}
                  >
                    {content}
                  </NotificationAlert>
                </AnimatedNotification>
              );
            })}
          </NotificationContainer>
        );
      })}
    </>
  );
};

export default Notifications;
