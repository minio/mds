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

import { Meta, Story } from "@storybook/react";

import Slider from "./Slider";
import { SliderProps } from "./Slider.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import FormLayout from "../FormLayout/FormLayout";
import TestIcon from "../../utils/TestIcon";
import Box from "../Box/Box";
import UsersIcon from "../Icons/UsersIcon";
import PasswordKeyIcon from "../Icons/PasswordKeyIcon";
import { useState } from "react";

export default {
  title: "MDS/Forms/Slider",
  component: Slider,
  argTypes: {},
} as Meta<typeof Slider>;

const Template: Story<SliderProps> = (args) => {
  const [value, setValue] = useState<number>(0);
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <FormLayout>
        <Slider
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
          {...args}
        />
      </FormLayout>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Slide to select a value",
  required: true,
};

export const DisabledSlider = Template.bind({});
DisabledSlider.args = {
  label: "Slide to select a value",
  required: true,
  disabled: true,
  value: "Demo Text",
};

export const ErrorSlider = Template.bind({});
ErrorSlider.args = {
  label: "Slider with Error",
  required: true,
  error: "This is an error message",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "Slide to select a value",
  required: true,
  tooltip: "Tooltip text",
};

export const DisplayValue = Template.bind({});
DisplayValue.args = {
  label: "Slide with visible value",
  required: true,
  tooltip: "Tooltip text",
  displayValue: true,
};

export const CustomDisplayFunction = Template.bind({});
CustomDisplayFunction.args = {
  label: "Slide with visible value",
  required: true,
  tooltip: "Tooltip text",
  displayValue: true,
  min: 0,
  max: 10,
  step: 1,
  marks: true,
  displayValueFunction: (value) => {
    return `${value} % Reduction`;
  },
};

export const WithSteps = Template.bind({});
WithSteps.args = {
  label: "Slide with visible value",
  required: true,
  tooltip: "Tooltip text",
  displayValue: true,
  min: 0,
  max: 10,
  step: 1,
  marks: true,
};
