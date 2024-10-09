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

import { NotificationVariant } from "../NotificationAlert/NotificationAlert.types";
import { Notification, NotificationOptions } from "./Notifications.types";

type NotificationCallback = (notifications: Notification[]) => void;

class NotificationManager {
  private static instance: NotificationManager;
  private notifications: Notification[] = [];
  private subscribers: NotificationCallback[] = [];
  private maxNotifications: number = 5;
  private defaultDuration: number = 5000;

  private constructor() {}

  public static getInstance(): NotificationManager {
    if (!NotificationManager.instance) {
      NotificationManager.instance = new NotificationManager();
    }
    return NotificationManager.instance;
  }

  // Method to set maxNotifications
  public setMaxNotifications(max: number) {
    this.maxNotifications = max;
    this.notifySubscribers();
  }

  // Subscribe to notifications
  public subscribe(callback: NotificationCallback) {
    this.subscribers.push(callback);
    // Immediately call the callback with current notifications
    callback(this.notifications);
  }

  // Unsubscribe from notifications
  public unsubscribe(callback: NotificationCallback) {
    this.subscribers = this.subscribers.filter((cb) => cb !== callback);
  }

  // Notify all subscribers about the current notifications
  private notifySubscribers() {
    this.subscribers.forEach((cb) => cb(this.notifications));
  }

  // Add a new notification
  public addNotification(
    variant: NotificationVariant,
    message: string,
    options: NotificationOptions = {},
  ) {
    const id = Math.random().toString(36).substring(2, 11);
    const newNotification: Notification = {
      id,
      variant,
      message,
      options,
      isExiting: false,
    };

    // Enforce maxNotifications
    const activeNotifications = this.notifications.filter((n) => !n.isExiting);
    if (activeNotifications.length >= this.maxNotifications) {
      // Remove the oldest active notification
      const oldestNotification = activeNotifications[0];
      this.removeNotification(oldestNotification.id);
    }

    // Add the new notification
    this.notifications.push(newNotification);
    this.notifySubscribers();

    // Auto-remove the notification after the specified duration
    const duration = options.duration ?? this.defaultDuration;
    setTimeout(() => {
      this.removeNotification(id);
    }, duration);
  }

  // Remove a notification by id
  public removeNotification(id: string) {
    const notification = this.notifications.find((n) => n.id === id);
    if (notification && !notification.isExiting) {
      // Mark as exiting to trigger exit animation
      notification.isExiting = true;
      this.notifySubscribers();

      // Remove from the list after the animation duration
      setTimeout(() => {
        this.notifications = this.notifications.filter((n) => n.id !== id);
        this.notifySubscribers();
      }, 300);
    }
  }
}

export default NotificationManager.getInstance();
