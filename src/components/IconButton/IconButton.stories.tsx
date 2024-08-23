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
import IconButton from "./IconButton";
import { IconButtonProps } from "./IconButton.types";

export default {
  title: "MDS/Forms/IconButton",
  component: IconButton,
  argTypes: {},
} as Meta<typeof IconButton>;

const Template: Story<IconButtonProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <IconButton {...args} onClick={() => alert("You clicked me!")}>
      <DownloadIcon />
    </IconButton>
  </StoryThemeProvider>
);

export const SmallButton = Template.bind({});
SmallButton.args = {
  disabled: false,
  size: "small",
};

export const LargeButton = Template.bind({});
LargeButton.args = {
  disabled: false,
  size: "large",
};

export const ButtonVariant = Template.bind({});
ButtonVariant.args = {
  disabled: false,
  variant: "destructive-lighter",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
