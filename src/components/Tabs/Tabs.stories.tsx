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

import Tabs from "./Tabs";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { TabsProps } from "./Tabs.types";
import Box from "../Box/Box";
import TestIcon from "../../utils/TestIcon";
import UsersIcon from "../Icons/UsersIcon";
import ConsoleIcon from "../Icons/ConsoleIcon";
import SearchIcon from "../Icons/SearchIcon";
import CollapseMenuIcon from "../Icons/CollapseMenuIcon";

export default {
  title: "MDS/Layout/Tabs",
  component: Tabs,
  argTypes: {},
} as Meta<typeof Tabs>;

const TestComponent = ({ page }: { page: string }) => {
  return <Box>{page}</Box>;
};

const Template: Story<TabsProps> = ({
  useRouteTabs = false,
  horizontal,
  options,
  optionsEndComponent,
  optionsInitialComponent,
  horizontalBarBackground = false,
  sx,
}) => {
  const [currentTab, setCurrentTab] = useState<string>(
    useRouteTabs ? "/page1" : "tab1",
  );

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Tabs
        options={options}
        horizontal={horizontal}
        currentTabOrPath={currentTab}
        onTabClick={(idTab) => {
          setCurrentTab(idTab);
        }}
        useRouteTabs={useRouteTabs}
        sx={sx}
        routes={<TestComponent page={currentTab} />}
        optionsEndComponent={optionsEndComponent}
        optionsInitialComponent={optionsInitialComponent}
        horizontalBarBackground={horizontalBarBackground}
      />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { content: <div>Tab1</div>, tabConfig: { label: "Tab1", id: "tab1" } },
    {
      content: <div>Tab2</div>,
      tabConfig: { label: "Tab2", id: "tab2" },
    },
    { content: <div>Tab3</div>, tabConfig: { label: "Tab3", id: "tab3" } },
    {
      content: <div>Some content for Tab 4</div>,
      tabConfig: { label: "Tab4", id: "tab4" },
    },
  ],
};

export const OptionDisabled = Template.bind({});
OptionDisabled.args = {
  options: [
    {
      content: (
        <div>
          <p>
            My computer-- disassembled is a maze of cables, drives chips and
            ports--an array of connections, silver solderings, twisting wires.
          </p>
          <p>
            But when the satiny case is latched in place coils and cables
            disappear. The smallest particle of matter is not an atom, but a
            byte-- a particle of magic that combines and multiplies unseen
            inside the blinking box.
          </p>
          <p>
            Creation occurs inside my computer-- friends, family rest behind the
            pressing of selected keys. Words and faces form; smiles and frowns
            become feelings. Attraction becomes addiction.
          </p>
          <p>
            Inside my computer merchants buy and sell-- musicians sing, artists
            train pictures into pixels, poets recollect emotion in tranquillity.
          </p>
          <p>
            Inside my computer dreams are imagined into reality-- inventions,
            hopes, ideas are born and nurtured into happenings. Strangers share
            a table, touch hands across the world.
          </p>
          <p>
            Inside my computer the pulse of human hearts waxes and wanes as
            people fall in and out of love.
          </p>
          <div style={{ textAlign: "right" }}>Karen Ruff - 2014</div>
        </div>
      ),
      tabConfig: { label: "Tab1", id: "tab1" },
    },
    {
      content: <div>Tab2</div>,
      tabConfig: { label: "Tab2", id: "tab2", disabled: true },
    },
    { content: <div>Tab3</div>, tabConfig: { label: "Tab3", id: "tab3" } },
    { content: <div>Tab4</div>, tabConfig: { label: "Tab4", id: "tab4" } },
  ],
};

export const TabsWithIcons = Template.bind({});
TabsWithIcons.args = {
  options: [
    {
      content: <div>Tab1</div>,
      tabConfig: { label: "Tab1", id: "tab1", icon: <ConsoleIcon /> },
    },
    {
      content: <div>Tab2</div>,
      tabConfig: {
        label: "Tab2",
        id: "tab2",
        icon: <SearchIcon />,
        disabled: true,
      },
    },
    {
      content: <div>Tab3</div>,
      tabConfig: { label: "Tab3", id: "tab3", icon: <CollapseMenuIcon /> },
    },
    {
      content: <div>Some content for Tab 4</div>,
      tabConfig: { label: "Tab4", id: "tab4", icon: <UsersIcon /> },
    },
  ],
};

export const UseRoutes = Template.bind({});
UseRoutes.args = {
  options: [
    { tabConfig: { label: "Tab1", id: "tab1", to: "/page1" } },
    {
      tabConfig: { label: "Tab2", id: "tab2", to: "/page2" },
    },
    { tabConfig: { label: "Tab3", id: "tab3", to: "/page3" } },
    { tabConfig: { label: "Tab4", id: "tab4", to: "/page4" } },
  ],
  useRouteTabs: true,
};

export const Horizontal = Template.bind({});
Horizontal.args = {
  options: [
    {
      content: <div>Tab1</div>,
      tabConfig: { label: "Tab1", id: "tab1", icon: <TestIcon /> },
    },
    {
      content: <div>Tab2</div>,
      tabConfig: {
        label: "Tab2",
        id: "tab2",
        icon: <TestIcon />,
        disabled: true,
      },
    },
    {
      content: <div>Tab3</div>,
      tabConfig: { label: "Tab3", id: "tab3", icon: <TestIcon /> },
    },
    {
      content: <div>Some content for Tab 4</div>,
      tabConfig: { label: "Tab4", id: "tab4", icon: <UsersIcon /> },
    },
  ],
  horizontal: true,
};

export const HorizontalWithExtraComponents = Template.bind({});
HorizontalWithExtraComponents.args = {
  options: [
    {
      content: <div>Tab1</div>,
      tabConfig: { label: "Tab1", id: "tab1", icon: <TestIcon /> },
    },
    {
      content: <div>Tab2</div>,
      tabConfig: {
        label: "Tab2",
        id: "tab2",
        icon: <TestIcon />,
        disabled: true,
      },
    },
    {
      content: <div>Tab3</div>,
      tabConfig: { label: "Tab3", id: "tab3", icon: <TestIcon /> },
    },
    {
      content: <div>Some content for Tab 4</div>,
      tabConfig: { label: "Tab4", id: "tab4", icon: <UsersIcon /> },
    },
  ],
  horizontal: true,
  optionsInitialComponent: (
    <span style={{ padding: "0 15px" }}>
      <TestIcon />
    </span>
  ),
  optionsEndComponent: (
    <span style={{ padding: "0 15px" }}>
      <TestIcon />
    </span>
  ),
};

export const HorizontalWithBackground = Template.bind({});
HorizontalWithBackground.args = {
  options: [
    {
      content: <div>Tab1</div>,
      tabConfig: { label: "Tab1", id: "tab1", icon: <TestIcon /> },
    },
    {
      content: <div>Tab2</div>,
      tabConfig: {
        label: "Tab2",
        id: "tab2",
        icon: <TestIcon />,
        disabled: true,
      },
    },
    {
      content: <div>Tab3</div>,
      tabConfig: { label: "Tab3", id: "tab3", icon: <TestIcon /> },
    },
    {
      content: <div>Some content for Tab 4</div>,
      tabConfig: { label: "Tab4", id: "tab4", icon: <UsersIcon /> },
    },
  ],
  horizontal: true,
  optionsInitialComponent: (
    <span style={{ padding: "0 15px" }}>
      <TestIcon />
    </span>
  ),
  optionsEndComponent: (
    <span style={{ padding: "0 15px" }}>
      <TestIcon />
    </span>
  ),
  horizontalBarBackground: true,
};
