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

import BackLink from "./BackLink";
import { BackLinkProps } from "./BackLink.types";

import TestIcon from "../../utils/TestIcon";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Layout/BackLink",
  component: BackLink,
  argTypes: {},
} as Meta<typeof BackLink>;

const Template: Story<BackLinkProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <BackLink {...args} onClick={() => alert("You clicked me!")} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Click here to go back",
};
