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

import MainContainer from "./MainContainer";
import { MainContainerProps } from "./MainContainer.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";
import Box from "../Box/Box";
import Menu from "../Menu/Menu";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/MainContainer",
  component: MainContainer,
  argTypes: {},
} as Meta<typeof MainContainer>;

const Template: Story<MainContainerProps> = (args) => {
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <MainContainer {...args} />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: <Box>This is a Block simulating the content box</Box>,
  menu: <div>This is where menu goes</div>,
};

export const NoMenu = Template.bind({});

NoMenu.args = {
  children: <Box>This is a Block simulating the content box</Box>,
};

export const HorizontalMenu = Template.bind({});

HorizontalMenu.args = {
  children: <Box>This is a Block simulating the content box</Box>,
  menu: <div>This is where menu goes</div>,
  horizontal: true,
};

export const DisableMobileMode = Template.bind({});

DisableMobileMode.args = {
  children: <Box>This is a Block simulating the content box</Box>,
  menu: (
    <Menu
      isOpen={true}
      displayGroupTitles
      options={[
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
      ]}
      applicationLogo={{ applicationName: "console", subVariant: "AGPL" }}
      callPathAction={(path) => {
        alert(`Called Path "${path}"`);
      }}
      signOutAction={() => {
        alert("Sign Out!");
      }}
      collapseAction={() => {
        console.log("COLLAPSE!");
      }}
      horizontal={false}
      currentPath={"/testPath1"}
    />
  ),
  mobileModeAuto: false,
};
