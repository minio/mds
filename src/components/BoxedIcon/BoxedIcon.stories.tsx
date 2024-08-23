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

import React, { useEffect, useRef } from "react";
import { Meta, Story } from "@storybook/react";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import TestIcon from "../../utils/TestIcon";
import { GlobalStyles } from "../index";
import BoxedIcon from "./BoxedIcon";
import { IBoxedIconProps } from "./BoxedIcon.types";

export default {
  title: "MDS/Layout/BoxedIcon",
  component: BoxedIcon,
  argTypes: {},
} as Meta<typeof BoxedIcon>;

const Template: Story<IBoxedIconProps> = (args) => {
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <BoxedIcon {...args}>
        <TestIcon />
      </BoxedIcon>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {};
