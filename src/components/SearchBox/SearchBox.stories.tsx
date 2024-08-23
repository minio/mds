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
import TestIcon from "../../utils/TestIcon";
import Box from "../Box/Box";
import FormLayout from "../FormLayout/FormLayout";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import UsersIcon from "../Icons/NewDesignIcons/UsersIcon";
import SearchBox from "./SearchBox";
import { SearchBoxProps } from "./SearchBox.types";

export default {
  title: "MDS/Forms/SearchBox",
  component: SearchBox,
  argTypes: {},
} as Meta<typeof SearchBox>;

const Template: Story<SearchBoxProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <SearchBox {...args} />

    <h2>In Container</h2>
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "1fr 140px 28px",
        gap: 8,
        width: 1200,
      }}
      className={"base"}
    >
      <Box>Random 1</Box>
      <SearchBox {...args} />
      <Box>
        <TestIcon />
      </Box>
    </Box>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Search an item",
  required: true,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  placeholder: "Search an item",
  disabled: true,
  value: "Demo Text",
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: <UsersIcon />,
  placeholder: "Search User",
};
