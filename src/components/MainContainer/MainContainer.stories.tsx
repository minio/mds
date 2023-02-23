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

import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import MainContainer from "./MainContainer";
import { MainContainerProps } from "./MainContainer.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";
import Box from "../Box/Box";

export default {
  title: "MDS/Layout/MainContainer",
  component: MainContainer,
  argTypes: {},
} as Meta<typeof MainContainer>;

const Template: Story<MainContainerProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <MainContainer {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});

Default.args = {
  menu: (
    <Box sx={{ width: 250, backgroundColor: "#fac" }}>
      A Block simulating a menu box
    </Box>
  ),
  children: <Box>This is a Block simulating the content box</Box>,
};

export const NoMenu = Template.bind({});

NoMenu.args = {
  children: <Box>This is a Block simulating the content box</Box>,
};
