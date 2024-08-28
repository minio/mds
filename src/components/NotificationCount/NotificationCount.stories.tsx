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
import { Meta, Story } from "@storybook/react";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import DownloadIcon from "../Icons/NewDesignIcons/DownloadIcon";
import NotificationCount from "./NotificationCount";
import { NotificationCountProps } from "./NotificationCount.types";

export default {
  title: "MDS/Information/NotificationCount",
  component: NotificationCount,
  argTypes: {},
} as Meta<typeof NotificationCount>;

const Template: Story<NotificationCountProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <NotificationCount {...args} onClick={() => alert("You clicked me!")}>
      <DownloadIcon />
    </NotificationCount>
  </StoryThemeProvider>
);

export const None = Template.bind({});
None.args = {
  count: 5,
};

export const WithMaxValue = Template.bind({});
WithMaxValue.args = {
  count: 10,
  max: 9,
};

export const DotOnly = Template.bind({});
DotOnly.args = {
  count: 5,
  dotOnly: true,
};

export const Info = Template.bind({});
Info.args = {
  count: 5,
  color: "info",
};

export const Success = Template.bind({});
Success.args = {
  count: 5,
  color: "success",
};

export const Warning = Template.bind({});
Warning.args = { count: 5, color: "warning" };

export const Danger = Template.bind({});
Danger.args = {
  count: 5,
  color: "danger",
};
