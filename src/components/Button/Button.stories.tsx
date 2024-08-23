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

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import TestIcon from "../../utils/TestIcon";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Button from "./Button";
import { ButtonProps } from "./Button.types";

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
    <Button id={"random_btn1"} variant={args.variant}>
      Content
    </Button>{" "}
    -- CHILDREN BUTTON
    <Button id={"random_btn2"} label={"Content"} variant={args.variant} /> --
    LABEL BUTTON
    <Button id={"random_btn1"} icon={<TestIcon />} variant={args.variant}>
      Content
    </Button>{" "}
    -- CHILDREN BUTTON (W/Icon)
    <Button
      id={"random_btn2"}
      label={"Content"}
      icon={<TestIcon />}
      variant={args.variant}
    />{" "}
    -- LABEL BUTTON (W/Icon)
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  label: "Test Button",
  variant: "secondary",
};

export const Compact = Template.bind({});
Compact.args = {
  disabled: false,
  label: "Test Button",
  variant: "secondary",
  compact: true,
};

export const CallToAction = Template.bind({});
CallToAction.args = {
  disabled: false,
  label: "Call to Action",
  variant: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  disabled: false,
  label: "Destructive",
  variant: "destructive",
};
export const DestructiveBare = Template.bind({});
DestructiveBare.args = {
  disabled: false,
  label: "Destructive Bare",
  variant: "destructive-bare",
};

export const Text = Template.bind({});
Text.args = {
  disabled: false,
  label: "Text Button",
  variant: "secondary-ghost",
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
  variant: "secondary",
  icon: <TestIcon />,
};

export const CallToActionIcon = Template.bind({});
CallToActionIcon.args = {
  disabled: false,
  label: "Call to Action",
  variant: "primary",
  icon: <TestIcon />,
};

export const SecondaryIcon = Template.bind({});
SecondaryIcon.args = {
  disabled: false,
  label: "Destructive",
  variant: "destructive",
  icon: <TestIcon />,
};

export const FullWidth = Template.bind({});
FullWidth.args = {
  disabled: false,
  label: "Test Button",
  variant: "secondary",
  fullWidth: true,
  icon: <TestIcon />,
};

export const IconOnly = Template.bind({});
IconOnly.args = {
  disabled: false,
  variant: "secondary",
  icon: <TestIcon />,
};

export const IconOnlyCompact = Template.bind({});
IconOnlyCompact.args = {
  disabled: false,
  variant: "secondary",
  icon: <TestIcon />,
  compact: true,
};
