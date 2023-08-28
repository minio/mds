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

import React, { Fragment } from "react";
import { Meta, Story } from "@storybook/react";

import SizeChart from "./SizeChart";
import { SizeChartProps } from "./SizeChart.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { Button, GlobalStyles } from "../index";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Data/SizeChart",
  component: SizeChart,
  argTypes: {},
} as Meta<typeof SizeChart>;

const Template: Story<SizeChartProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <SizeChart {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  usedBytes: 45000,
  totalBytes: 100000,
};

export const WarningSpace = Template.bind({});
WarningSpace.args = {
  usedBytes: 85000,
  totalBytes: 100000,
};

export const DangerSpace = Template.bind({});
DangerSpace.args = {
  usedBytes: 95000,
  totalBytes: 100000,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  usedBytes: 95000,
  totalBytes: 100000,
  label: true,
};

export const WithChartLabel = Template.bind({});
WithChartLabel.args = {
  usedBytes: 9504400,
  totalBytes: 103840000,
  label: true,
  chartLabel: "Reported Usage",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  usedBytes: 95000,
  totalBytes: 100000,
  label: true,
  width: 50,
  height: 50,
};
