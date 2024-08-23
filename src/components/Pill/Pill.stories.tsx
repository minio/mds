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

import React from "react";
import { Meta, Story } from "@storybook/react";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Pill from "./Pill";
import { PillProps } from "./Pill.types";

export default {
  title: "MDS/Information/Pill",
  component: Pill,
  argTypes: {},
} as Meta<typeof Pill>;

const Template: Story<PillProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Pill {...args}>Pill Content</Pill>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  type: "default",
};

export const Secondary = Template.bind({});
Secondary.args = {
  type: "secondary",
};

export const Current = Template.bind({});
Current.args = {
  type: "current",
};
