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

import ScreenTitle from "./ScreenTitle";
import { ScreenTitleProps } from "./ScreenTitle.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";
import SectionTitle from "../SectionTitle/SectionTitle";
import Button from "../Button/Button";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Layout/ScreenTitle",
  component: ScreenTitle,
  argTypes: {},
} as Meta<typeof ScreenTitle>;

const Template: Story<ScreenTitleProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ScreenTitle {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  title: "Object Title",
  subTitle: (
    <Fragment>
      <span>
        Some Variable: <strong>Variable value</strong>
      </span>
      <span>
        Some Variable: <strong>Variable value</strong>
      </span>
      <span>
        Some Variable: <strong>Variable value</strong>
      </span>
    </Fragment>
  ),
  actions: (
    <Fragment>
      <Button id={"testButton1"}>Button1</Button>
      <Button id={"testButton2"} variant={"callAction"}>
        Button2
      </Button>
      <Button id={"testButton3"} variant={"secondary"}>
        Button3
      </Button>
    </Fragment>
  ),
  icon: <TestIcon />,
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  title: "Object Title",
  subTitle: (
    <Fragment>
      <span>
        Some Variable: <strong>Variable value</strong>
      </span>
    </Fragment>
  ),
  actions: (
    <Fragment>
      <Button id={"testButton1"}>Button1</Button>
      <Button id={"testButton2"} variant={"callAction"}>
        Button2
      </Button>
      <Button id={"testButton3"} variant={"secondary"}>
        Button3
      </Button>
    </Fragment>
  ),
};

export const NoBottomBorder = Template.bind({});
NoBottomBorder.args = {
  title: "Object Title",
  subTitle: (
    <Fragment>
      <span>
        Some Variable: <strong>Variable value</strong>
      </span>
    </Fragment>
  ),
  actions: (
    <Fragment>
      <Button id={"testButton1"}>Button1</Button>
      <Button id={"testButton2"} variant={"callAction"}>
        Button2
      </Button>
      <Button id={"testButton3"} variant={"secondary"}>
        Button3
      </Button>
    </Fragment>
  ),
  icon: <TestIcon />,
  bottomBorder: false,
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  title: "Object Title",
  subTitle: (
    <Fragment>
      <span>
        Some Variable: <strong>Variable value</strong>
      </span>
    </Fragment>
  ),
  actions: (
    <Fragment>
      <Button id={"testButton1"}>Button1</Button>
      <Button id={"testButton2"} variant={"callAction"}>
        Button2
      </Button>
      <Button id={"testButton3"} variant={"secondary"}>
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
