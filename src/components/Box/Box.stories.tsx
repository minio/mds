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

import Box from "./Box";
import { BoxProps } from "./Box.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";

export default {
  title: "MDS/Layout/Box",
  component: Box,
  argTypes: {},
} as Meta<typeof Box>;

const Template: Story<BoxProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Box {...args}>Box Content</Box>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const WithBorder = Template.bind({});
WithBorder.args = {
  withBorders: true,
};

export const WithBackgroundColor = Template.bind({});
WithBackgroundColor.args = {
  withBorders: true,
  useBackground: true,
};

export const WithCustomBorderPadding = Template.bind({});
WithCustomBorderPadding.args = {
  withBorders: true,
  customBorderPadding: "5px 100px",
};

export const BoxWithCustomStyles = Template.bind({});
BoxWithCustomStyles.args = {
  withBorders: true,
  sx: {
    color: "#fff",
    backgroundColor: "#460",
    borderColor: "#f9a",
  },
};
