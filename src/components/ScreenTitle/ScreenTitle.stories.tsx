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

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import TestIcon from "../../utils/TestIcon";
import Box from "../Box/Box";
import Button from "../Button/Button";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { GlobalStyles } from "../index";
import ScreenTitle from "./ScreenTitle";
import { ScreenTitleProps } from "./ScreenTitle.types";

export default {
  title: "MDS/Layout/ScreenTitle",
  component: ScreenTitle,
  argTypes: {},
} as Meta<typeof ScreenTitle>;

const Template: Story<ScreenTitleProps> = (args: ScreenTitleProps) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ScreenTitle id={"screen-title-demo"} {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: "Object Title",
  titleOptions: [
    { title: "Created", value: "Wed, Feb 28 2024 · 23:56:02" },
    { title: "Access", value: "PUBLIC" },
    { title: "Size", value: "1,2024 MiB - 2 Objects" },
  ],
  actions: (
    <Fragment>
      <ButtonGroup>
        <Button id={"testButton1"}>Button1</Button>
        <Button id={"testButton3"}>Button3</Button>
      </ButtonGroup>
      <Button id={"testButton2"} variant={"primary"} compact>
        Button2
      </Button>
    </Fragment>
  ),
  icon: <TestIcon />,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  title: "Object Title",
  titleOptions: [
    { title: "Created", value: "Wed, Feb 28 2024 · 23:56:02" },
    { title: "Access", value: "PUBLIC" },
    { title: "Size", value: "1,2024 MiB - 2 Objects" },
  ],
  actions: (
    <Fragment>
      <Button id={"testButton1"}>Button1</Button>
      <Button id={"testButton2"} variant={"primary"}>
        Button2
      </Button>
      <Button id={"testButton3"} variant={"descructive"}>
        Button3
      </Button>
    </Fragment>
  ),
};

export const CustomSubElement = Template.bind({});
CustomSubElement.args = {
  title: "Object Title",
  titleOptions: [
    { title: "Created", value: "Wed, Feb 28 2024 · 23:56:02" },
    { title: "Access", value: "PUBLIC" },
    { title: "Size", value: "1,2024 MiB - 2 Objects" },
  ],
  actions: (
    <Fragment>
      <ButtonGroup>
        <Button id={"testButton1"}>Button1</Button>
        <Button id={"testButton3"}>Button3</Button>
      </ButtonGroup>
      <Button id={"testButton2"} variant={"primary"} compact>
        Button2
      </Button>
    </Fragment>
  ),
  icon: <TestIcon />,
  subTitle: (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color: "#080",
        fontSize: 12,
        gap: 6,
        "& svg": { width: 12, height: 12, minWidth: 12, minHeight: 12 },
      }}
    >
      <TestIcon /> <span>Online</span>
    </Box>
  ),
};

export const NoSubItems = Template.bind({});
NoSubItems.args = {
  title: "Object Title",
  actions: (
    <Fragment>
      <ButtonGroup>
        <Button id={"testButton1"}>Button1</Button>
        <Button id={"testButton3"}>Button3</Button>
      </ButtonGroup>
      <Button id={"testButton2"} variant={"primary"} compact>
        Button2
      </Button>
    </Fragment>
  ),
  icon: <TestIcon />,
};

export const NoActions = Template.bind({});
NoActions.args = {
  title: "Object Title",
  icon: <TestIcon />,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: "Object Title",
  actions: (
    <Fragment>
      <Button id={"testButton1"}>Button1</Button>
      <Button id={"testButton2"} variant={"primary"}>
        Button2
      </Button>
      <Button id={"testButton3"} variant={"descructive"}>
        Button3
      </Button>
    </Fragment>
  ),
  icon: <TestIcon />,
  sx: {
    backgroundColor: "#090",
    "& .headerBarSubheader": {
      color: "#ff0",
    },
    "& .headerBarIcon .min-icon": {
      fill: "#fff",
    },
  },
};
