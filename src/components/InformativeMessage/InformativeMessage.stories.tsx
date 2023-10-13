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

import InformativeMessage from "./InformativeMessage";
import { InformativeMessageProps } from "./InformativeMessage.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import { GlobalStyles } from "../index";

export default {
  title: "MDS/Information/InformativeMessage",
  component: InformativeMessage,
  argTypes: {},
} as Meta<typeof InformativeMessage>;

const Template: Story<InformativeMessageProps> = ({ ...props }) => {
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <InformativeMessage {...props} />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  variant: "default",
  title: "This is the title for a message",
  message: "This is the content for an informative message",
};

export const Success = Template.bind({});
Success.args = {
  variant: "success",
  title: "This is the title for a message",
  message: "This is the content for a success message",
};

export const Warning = Template.bind({});
Warning.args = {
  variant: "warning",
  title: "This is the title for a message",
  message: "This is the content for an warning message",
};

export const Error = Template.bind({});
Error.args = {
  variant: "error",
  title: "This is the title for a message",
  message: "This is the content for an error message",
};
