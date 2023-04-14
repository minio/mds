// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

import ActionsList from "./ActionsList";
import { ActionsListProps } from "./ActionsList.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/ActionsList",
  component: ActionsList,
  argTypes: {},
} as Meta<typeof ActionsList>;

const Template: Story<ActionsListProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ActionsList {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: "Actions Panel Title",
  items: [
    {
      action: () => alert("Action clicked"),
      icon: <TestIcon />,
      label: "Test Action",
      tooltip: "Action tooltip",
      disabled: false,
    },
    {
      action: () => alert("you shouldn't see this"),
      icon: <TestIcon />,
      label: "Disabled Test Action",
      tooltip: "Disabled action tooltip",
      disabled: true,
    },
    {
      action: () => alert("No tooltip clicked"),
      icon: <TestIcon />,
      label: "No Tooltip",
      tooltip: "",
      disabled: false,
    },
  ],
};

export const TitleWithIcon = Template.bind({});
TitleWithIcon.args = {
  title: (
    <span style={{ display: "inline-flex", alignItems: "center" }}>
      <TestIcon style={{ marginRight: 10 }} /> Custom Node Title
    </span>
  ),
  items: [
    {
      action: () => alert("Action clicked"),
      icon: <TestIcon />,
      label: "Test Action",
      tooltip: "Action tooltip",
      disabled: false,
    },
    {
      action: () => alert("you shouldn't see this"),
      icon: <TestIcon />,
      label: "Disabled Test Action",
      tooltip: "Disabled action tooltip",
      disabled: true,
    },
    {
      action: () => alert("No tooltip clicked"),
      icon: <TestIcon />,
      label: "No Tooltip",
      tooltip: "",
      disabled: false,
    },
  ],
};
