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

import React, { Fragment, HTMLAttributes } from "react";
import { Meta, Story } from "@storybook/react";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import TestIcon from "../../utils/TestIcon";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import HelpBox from "./HelpBox";
import { HelpBoxProps } from "./HelpBox.types";

export default {
  title: "MDS/Information/HelpBox",
  component: HelpBox,
  argTypes: {},
} as Meta<typeof HelpBox>;

const Template: Story<HelpBoxProps> = (
  args: HelpBoxProps & HTMLAttributes<HTMLDivElement>,
) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <HelpBox {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  icon: <TestIcon />,
  help: "This is the text that will be rendered for help",
  title: "Help Available for this page.",
};

export const NoHelpText = Template.bind({});
NoHelpText.args = {
  icon: <TestIcon />,
  title: "Help Available for this page.",
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  title: "Help Available for this page.",
};
