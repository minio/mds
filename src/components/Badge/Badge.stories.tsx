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

import Badge from "./Badge";
import { BadgeProps } from "./Badge.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import DownloadIcon from "../Icons/DownloadIcon";

export default {
  title: "MDS/Information/Badge",
  component: Badge,
  argTypes: {},
} as Meta<typeof Badge>;

const Template: Story<BadgeProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Badge {...args} onClick={() => alert("You clicked me!")}>
      <DownloadIcon />
    </Badge>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  badgeContent: 5,
};

export const DotOnly = Template.bind({});
DotOnly.args = {
  badgeContent: 5,
  dotOnly: true,
};

export const Warn = Template.bind({});
Warn.args = { badgeContent: 5, color: "warn" };

export const Secondary = Template.bind({});
Secondary.args = {
  badgeContent: 5,
  color: "secondary",
};

export const Alert = Template.bind({});
Alert.args = {
  badgeContent: 5,
  color: "alert",
};

export const Ok = Template.bind({});
Ok.args = {
  badgeContent: 5,
  color: "ok",
};

export const Grey = Template.bind({});
Grey.args = {
  badgeContent: 5,
  color: "grey",
};
