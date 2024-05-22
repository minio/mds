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

import Breadcrumbs from "./Breadcrumbs";
import { BreadcrumbsOption, BreadcrumbsProps } from "./Breadcrumbs.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";
import TestIcon from "../../utils/TestIcon";
import HomeIcon from "../Icons/NewDesignIcons/HomeIcon";

export default {
  title: "MDS/Layout/Breadcrumbs",
  component: Breadcrumbs,
  argTypes: {},
} as Meta<typeof Breadcrumbs>;

const Template: Story<BreadcrumbsProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <Breadcrumbs {...args} />
  </StoryThemeProvider>
);

const brOptions: BreadcrumbsOption[] = [
  { label: "Home", to: "/lol" },
  { label: "Level 1", to: "/lol" },
  { label: "Level 2", to: "/lol" },
  { label: "Level 3", to: "/lol" },
  { label: "Level 4", to: "/lol" },
  { label: "Level 5", to: "/lol" },
  { label: "Level 6", to: "/lol" },
];

const iconOptions: BreadcrumbsOption[] = [
  { icon: <HomeIcon />, to: "/lol" },
  { icon: <TestIcon />, label: "Level 1", to: "/lol" },
  { label: "Level 2", to: "/lol" },
  { label: "Level 3", to: "/lol" },
  { label: "Level 4", to: "/lol" },
  { label: "Level 5", to: "/lol" },
  { label: "Level 6", to: "/lol" },
];

export const Default = Template.bind({});
Default.args = {
  options: brOptions,
};

export const WithBackButton = Template.bind({});
WithBackButton.args = {
  options: brOptions,
  goBackFunction: () => {
    alert("Go back!");
  },
};

export const DisplayLastNItemsOnly = Template.bind({});
DisplayLastNItemsOnly.args = {
  options: brOptions,
  displayLastItems: 2,
};

export const MarkCurrentItem = Template.bind({});
MarkCurrentItem.args = {
  options: brOptions,
  markCurrentItem: true,
  displayLastItems: 2,
};

export const LimitAsListSize = Template.bind({});
LimitAsListSize.args = {
  options: brOptions,
  displayLastItems: 6,
};

export const WithIcons = Template.bind({});
WithIcons.args = {
  options: iconOptions,
  markCurrentItem: true,
};
