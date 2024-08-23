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
import Button from "../Button/Button";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import FormActionsTray from "./FormActionsTray";
import { FormActionsTrayProps } from "./FormActionsTray.types";

export default {
  title: "MDS/Forms/FormActionsTray",
  component: FormActionsTray,
  argTypes: {},
} as Meta<typeof FormActionsTray>;

const Template: Story<FormActionsTrayProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <FormActionsTray {...args}>
      <Button id={"test"} variant={"secondary"}>
        Cancel
      </Button>
      <Button id={"test"} variant={"primary"}>
        Accept
      </Button>
    </FormActionsTray>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const WithSeparator = Template.bind({});
WithSeparator.args = {
  separator: true,
};

export const CustomMarginTop = Template.bind({});
CustomMarginTop.args = {
  separator: true,
  marginTop: 10,
};
