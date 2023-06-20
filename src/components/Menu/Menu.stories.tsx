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

import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import Menu from "./Menu";
import { MenuProps } from "./Menu.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";
import Box from "../Box/Box";
import TestIcon from "../../utils/TestIcon";
import ChatIcon from "../Icons/ChatIcon";
import LambdaIcon from "../Icons/LambdaIcon";
import LambdaBalloonIcon from "../Icons/LambdaBalloonIcon";
import LambdaNotificationsIcon from "../Icons/LambdaNotificationsIcon";

export default {
  title: "MDS/Layout/Menu",
  component: Menu,
  argTypes: {},
} as Meta<typeof Menu>;

const Template: Story<MenuProps> = ({ options, horizontal }) => {
  const [menuCollapsed, setMenuCollapsed] = useState<boolean>(false);

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Menu
        isOpen={menuCollapsed}
        displayGroupTitles
        options={options}
        applicationLogo={{ applicationName: "console", subVariant: "AGPL" }}
        callPathAction={(path) => {
          alert(`Called Path "${path}"`);
        }}
        signOutAction={() => {
          alert("Sign Out!");
        }}
        collapseAction={() => {
          setMenuCollapsed(!menuCollapsed);
          console.log("COLLAPSE!");
        }}
        horizontal={horizontal}
        currentPath={"/testPath1"}
      />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});

const options = [
  {
    icon: <TestIcon />,
    path: "/testPath1",
    name: "Test 1",
    group: "Group 1",
    id: "test1",
    onClick: (path) => {
      console.log("Custom Click Action", path);
    },
  },
  {
    icon: <TestIcon />,
    name: "Test X",
    group: "Group 1",
    id: "testX",
    onClick: (path) => {
      console.log("Custom Click Action NO PATH", path);
    },
  },
  {
    icon: <TestIcon />,
    path: "/testPath2",
    name: "Test 2",
    group: "Group 1",
    id: "test2",
    badge: true,
  },
  {
    icon: <TestIcon />,
    path: "/testPath3",
    name: "Test 3",
    group: "Group 1",
    id: "tes3",
  },
  {
    icon: <TestIcon />,
    path: "/testPath4",
    name: "Test 4",
    group: "Group 2",
    id: "tes4",
  },
  {
    icon: <TestIcon />,
    name: "Test 5",
    group: "Group 2",
    id: "test5",
    children: [
      {
        icon: <TestIcon />,
        path: "/subPath1",
        name: "Sublevel 1",
        group: "Group 2",
        id: "testl1",
      },
      {
        icon: <TestIcon />,
        path: "/subPath2",
        name: "Sublevel 2",
        group: "Group 2",
        id: "testl2",
      },
      {
        icon: <TestIcon />,
        path: "/subPath3",
        name: "Sublevel 3",
        group: "Group 2",
        id: "testl3",
      },
    ],
  },
  {
    icon: <TestIcon />,
    path: "https://min.io/",
    name: "External URL",
    group: "Group 2",
    id: "testl1",
  },
  {
    icon: <TestIcon />,
    name: "Hidden",
    group: "Group 2",
    id: "test5",
    children: [],
  },
];

Default.args = {
  children: <Box>This is a Block simulating the content box</Box>,
  options,
};

export const SubpathSelected = Template.bind({});

SubpathSelected.args = {
  children: <Box>This is a Block simulating the content box</Box>,
  options,
};

export const Horizontal = Template.bind({});

Horizontal.args = {
  children: <Box>This is a Block simulating the content box</Box>,
  horizontal: true,
  options: [
    {
      icon: <ChatIcon />,
      path: "/testPath1",
      name: "Test 1",
      group: "Group 1",
      id: "test1",
      onClick: (path) => {
        console.log("Custom Click Action", path);
      },
    },
    {
      icon: <LambdaNotificationsIcon />,
      name: "Test 5",
      group: "Group 2",
      id: "test5",
      children: [
        {
          icon: <TestIcon />,
          path: "/subPath1",
          name: "Sublevel 1",
          group: "Group 2",
          id: "testl1",
        },
        {
          icon: <TestIcon />,
          path: "/subPath2",
          name: "Sublevel 2",
          group: "Group 2",
          id: "testl2",
        },
        {
          icon: <TestIcon />,
          path: "/subPath3",
          name: "Sublevel 3",
          group: "Group 2",
          id: "testl3",
        },
      ],
    },
  ],
};

export const MobileAutoDisabled = Template.bind({});

MobileAutoDisabled.args = {
  children: <Box>This is a Block simulating the content box</Box>,
  mobileModeAuto: false,
  options,
};
