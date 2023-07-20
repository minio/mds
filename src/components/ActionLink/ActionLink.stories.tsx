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

import ActionLink from "./ActionLink";
import { ActionLinkProps } from "./ActionLink.types";

import TestIcon from "../../utils/TestIcon";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Forms/ActionLink",
  component: ActionLink,
  argTypes: {},
} as Meta<typeof ActionLink>;

const Template: Story<ActionLinkProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <span>
      Some Text that can be combined with an{" "}
      <ActionLink
        {...args}
        label={"Action Link"}
        onClick={() => alert("You clicked me!")}
      />
      , this text can continue after it.
    </span>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const LoadingLink = Template.bind({});
LoadingLink.args = {
  isLoading: true,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  sx: {
    backgroundColor: "#f87",
    color: "#fff",
  },
};
