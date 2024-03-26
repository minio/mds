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

import Button from "./Button";
import { ButtonProps } from "./Button.types";

import TestIcon from "../../utils/TestIcon";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";

export default {
  title: "MDS/Forms/Button",
  component: Button,
  argTypes: {},
} as Meta<typeof Button>;

const Template: Story<ButtonProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Button {...args} onClick={() => alert("You clicked me!")} />
    <br />
    <Button {...args}>With Children</Button>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  label: "Test Button",
  variant: "regular",
};

export const CallToAction = Template.bind({});
CallToAction.args = {
  disabled: false,
  label: "Call to Action",
  variant: "callAction",
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  label: "Secondary",
  variant: "secondary",
};

export const Text = Template.bind({});
Text.args = {
  disabled: false,
  label: "Text Button",
  variant: "text",
};

export const SubAction = Template.bind({});
SubAction.args = {
  disabled: false,
  label: "Text Button",
  variant: "subAction",
};

export const DefaultIcon = Template.bind({});
DefaultIcon.args = {
  disabled: false,
  label: "Test Button",
  variant: "regular",
  icon: <TestIcon />,
};

export const CallToActionIcon = Template.bind({});
CallToActionIcon.args = {
  disabled: false,
  label: "Call to Action",
  variant: "callAction",
  icon: <TestIcon />,
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  disabled: false,
  label: "Secondary",
  variant: "secondary",
  icon: <TestIcon />,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  disabled: false,
  label: "Test Button",
  variant: "regular",
  fullWidth: true,
  icon: <TestIcon />,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  disabled: false,
  variant: "regular",
  icon: <TestIcon />,
};
