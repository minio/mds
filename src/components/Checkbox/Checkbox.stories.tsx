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

import Checkbox from "./";
import { CheckboxProps } from "./Checkbox.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles";

export default {
  title: "MDS/Forms/Checkbox",
  component: Checkbox,
  argTypes: {},
} as Meta<typeof Checkbox>;

const Template: Story<CheckboxProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Checkbox {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Click to confirm",
  id: "checkbox",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
  helper: "Check this box if you want to continue",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Click to confirm",
  id: "checkbox",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
  checked: true,
  disabled: true,
};

export const UncheckedDisabled = Template.bind({});
UncheckedDisabled.args = {
  label: "Click to confirm",
  id: "checkbox",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
  checked: false,
  disabled: true,
};

export const LabelNoMinWidth = Template.bind({});
LabelNoMinWidth.args = {
  label: "Click to confirm",
  id: "checkbox",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
  checked: false,
  disabled: true,
  noLabelMinWidth: true,
};
