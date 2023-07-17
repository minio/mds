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
import TestIcon from "../../utils/TestIcon";
import ChatIcon from "../Icons/ChatIcon";
import LambdaNotificationsIcon from "../Icons/LambdaNotificationsIcon";
import Button from "../Button/Button";
import Box from "../Box/Box";

export default {
  title: "MDS/Layout/Menu",
  component: Menu,
  argTypes: {},
} as Meta<typeof Menu>;

const Template: Story<MenuProps> = ({ options, horizontal, endComponent }) => {
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
        endComponent={endComponent}
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
  options,
};

export const SubpathSelected = Template.bind({});

SubpathSelected.args = {
  options,
};

export const Horizontal = Template.bind({});

Horizontal.args = {
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
          path: "/testPath1",
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
  mobileModeAuto: false,
  options,
};

export const VerticalNoOptions = Template.bind({});

VerticalNoOptions.args = {};

export const HorizontalNoOptions = Template.bind({});

HorizontalNoOptions.args = {
  horizontal: true,
};

export const EndComponent = Template.bind({});

EndComponent.args = {
  endComponent: (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        id={"randon-button"}
        icon={<TestIcon />}
        onClick={() => alert("Extra!")}
      />
    </Box>
  ),
};

export const EndComponentHorizontal = Template.bind({});

EndComponentHorizontal.args = {
  horizontal: true,
  endComponent: (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Button
        id={"randon-button"}
        icon={<TestIcon />}
        onClick={() => alert("Extra!")}
      />
    </Box>
  ),
};
