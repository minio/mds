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
import { Meta, StoryFn } from "@storybook/react";

import TextArea from "./";
import { TextAreaProps } from "./TextArea.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";

export default {
  title: "MDS/Forms/TextArea",
  component: TextArea,
  argTypes: {},
} as Meta<typeof TextArea>;

const Template: StoryFn<TextAreaProps> = (args) => (
  <StoryThemeProvider>
    <TextArea {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "A Text Area",
  required: true,
  placeholder: "A Placeholder",
};

export const DisabledTextArea = Template.bind({});
DisabledTextArea.args = {
  label: "A Text Area",
  required: true,
  disabled: true,
  value: "Demo Text",
};

export const WithHelper = Template.bind({});
WithHelper.args = {
  label: "A Text Area",
  required: true,
  disabled: true,
  value: "Demo Text",
  helper: "This is a helper text",
};

export const ErrorTextArea = Template.bind({});
ErrorTextArea.args = {
  label: "TextArea with Error",
  required: true,
  helper: "This is an error message",
  state: "error",
};

export const VerticalTextArea = Template.bind({});
VerticalTextArea.args = {
  label: "TextArea Vertical",
  required: true,
  orientation: "vertical",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "A Text Area",
  required: true,
  tooltip: "Tooltip text",
};
