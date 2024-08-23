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

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import TestIcon from "../../utils/TestIcon";
import EyeIcon from "../Icons/NewDesignIcons/EyeIcon";
import HomeIcon from "../Icons/NewDesignIcons/HomeIcon";
import { GlobalStyles } from "../index";
import Breadcrumbs from "./Breadcrumbs";
import { BreadcrumbsOption, BreadcrumbsProps } from "./Breadcrumbs.types";

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

const subMenuOptions: BreadcrumbsOption[] = [
  { icon: <HomeIcon />, to: "/lol" },
  {
    icon: <EyeIcon />,
    label: "Level 1",
    to: "/lol",
    subOptions: [
      {
        label: "SubLevel 1",
        to: "/lolsb1",
        onClick: (dt) => {
          console.log("clicked", dt);
        },
      },
      { label: "SubLevel 2", to: "/lolsb2" },
      { label: "SubLevel 3", to: "/lolsb3" },
      { label: "SubLevel 4", to: "/lolsb4" },
      { label: "SubLevel 5", to: "/lolsb5" },
    ],
  },
  { label: "Level 2", to: "/lol" },
  {
    label: "Level 3",
    to: "/lol",
    subOptions: [
      {
        label: "SubLevel 1",
        to: "/lolsb21",
        onClick: (dt) => {
          console.log("clicked", dt);
        },
      },
      {
        label: "SubLevel 2",
        to: "/lolbs22",
        icon: <TestIcon />,
        disabled: true,
      },
      { label: "SubLevel 3", to: "/lolsb23", disabled: true },
      { label: "SubLevel 4", to: "/lolsb24", icon: <TestIcon /> },
      { label: "SubLevel 5", to: "/lolsb25" },
    ],
  },
  { label: "Level 4", to: "/lol" },
  { label: "Level 5", to: "/lol" },
  {
    label: "Level 6",
    to: "/lol",
    subOptions: [
      {
        label: "SubLevel 1",
        to: "/lola1",
        onClick: (dt) => {
          console.log("clicked", dt);
        },
      },
      { label: "SubLevel 2", to: "/lola2" },
      { label: "SubLevel 3", to: "/lola3" },
      { label: "SubLevel 4", to: "/lola4" },
      { label: "SubLevel 5", to: "/lol5" },
    ],
  },
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

export const WithSubMenus = Template.bind({});
WithSubMenus.args = {
  options: subMenuOptions,
  markCurrentItem: true,
  onClickOption: (to: string) => {
    console.log(`CLICKED OPTION`, to);
  },
};
