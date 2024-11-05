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
import { Meta, StoryFn } from "@storybook/react";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import TestIcon from "../../utils/TestIcon";
import CodeSnippet from "./";
import { CodeSnippetProps } from "./CodeSnippet.types";
import Box from "../Box";
import Tooltip from "../Tooltip";
import GlobalStyles from "../GlobalStyles";

export default {
  title: "MDS/Forms/CodeSnippet",
  component: CodeSnippet,
  argTypes: {},
} as Meta<typeof CodeSnippet>;

const Template: StoryFn<CodeSnippetProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <CodeSnippet {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </CodeSnippet>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const withLabel = Template.bind({});
withLabel.args = {
  label: "Share URL",
};

export const multiLine = Template.bind({});
multiLine.args = {
  label: "Share URL",
  mode: "multi",
};

export const inline = Template.bind({});
inline.args = {
  mode: "inline",
};

export const ActionButton = Template.bind({});
ActionButton.args = {
  multiLine: false,
  actionButton: (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "10px",
      }}
    >
      <Tooltip tooltip={"Demo Tooltip for element"} placement={"left"}>
        <TestIcon style={{ width: 20 }} />
      </Tooltip>
    </Box>
  ),
};
