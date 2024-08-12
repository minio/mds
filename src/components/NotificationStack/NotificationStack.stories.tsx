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

import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import { NotificationStackProps } from "./NotificationStack.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { useNotifications } from "./hooks";

export default {
  title: "MDS/Information/NotificationStack",
  component: Fragment,
  argTypes: {},
} as Meta<typeof Fragment>;

const Template: Story<NotificationStackProps> = (args) => {
  const { notifications, addNotification, removeNotification } =
    useNotifications();

  return (
    <StoryThemeProvider>
      <GlobalStyles />

      <div>
        <button
          onClick={() =>
            addNotification(`This is a new Notification ${Math.random()}`, 3000)
          }
        >
          CLICK ME!
        </button>
        <h1>NOTIFICATIONS</h1>
        {notifications.map((notificationElement) => (
          <div key={notificationElement.id}>
            {notificationElement.message}
            <button
              onClick={() => {
                removeNotification(notificationElement.id);
              }}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
