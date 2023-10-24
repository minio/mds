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

import ProgressBar from "./ProgressBar";
import { ProgressBarProps } from "./ProgressBar.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";

export default {
  title: "MDS/Information/ProgressBar",
  component: ProgressBar,
  argTypes: {},
} as Meta<typeof ProgressBar>;

const Template: Story<ProgressBarProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ProgressBar {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  value: 30,
  variant: "determinate",
};

export const WithProgressLabel = Template.bind({});
WithProgressLabel.args = {
  value: 30,
  variant: "determinate",
  progressLabel: true,
};

export const NotificationLabel = Template.bind({});
NotificationLabel.args = {
  value: 30,
  variant: "determinate",
  progressLabel: true,
  notificationLabel:
    "This notification label will change it's color depending on the color state",
};

export const Indeterminate = Template.bind({});
Indeterminate.args = {
  variant: "indeterminate",
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
  variant: "indeterminate",
  barHeight: 3,
};

export const TransparentBackground = Template.bind({});
TransparentBackground.args = {
  variant: "indeterminate",
  barHeight: 5,
  transparentBG: true,
};
