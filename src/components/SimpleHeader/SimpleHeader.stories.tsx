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

import SimpleHeader from "./SimpleHeader";
import { SimpleHeaderProps } from "./SimpleHeader.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/SimpleHeader",
  component: SimpleHeader,
  argTypes: {},
} as Meta<typeof SimpleHeader>;

const Template: Story<SimpleHeaderProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <SimpleHeader {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Simple Header",
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  label: "Simple Header",
  icon: <TestIcon />,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: "Label and Search",
  icon: <TestIcon />,
  sx: {
    borderBottom: "#0f0 1px solid",
    color: "#f0f",
  },
};
