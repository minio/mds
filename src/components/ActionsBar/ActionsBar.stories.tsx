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

import React from "react";
import { Meta, Story } from "@storybook/react";

import ActionsBar from "./ActionsBar";
import { ActionsBarProps } from "./ActionsBar.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Link from "../Link/Link";
import Button from "../Button/Button";
import TestIcon from "../../utils/TestIcon";
import Tooltip from "../Tooltip/Tooltip";

export default {
  title: "MDS/Forms/ActionsBar",
  component: ActionsBar,
  argTypes: {},
} as Meta<typeof ActionsBar>;

const Template: Story<ActionsBarProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ActionsBar {...args}>
      <Button id={"test"} icon={<TestIcon />}>
        Button one
      </Button>
      <Button id={"test"} icon={<TestIcon />}>
        Button one
      </Button>
      <Button id={"test"} icon={<TestIcon />}>
        Button one
      </Button>
      <Tooltip tooltip={"with tooltip"}>
        <Button id={"test"} icon={<TestIcon />}>
          Button one
        </Button>
      </Tooltip>
    </ActionsBar>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const Narrow = Template.bind({});
Narrow.args = {
  narrow: true,
};
