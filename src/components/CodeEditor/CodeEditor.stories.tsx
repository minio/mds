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

import CodeEditor from "./CodeEditor";
import { CodeEditorProps } from "./CodeEditor.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Button from "../Button/Button";
import CopyIcon from "../Icons/CopyIcon";

export default {
  title: "MDS/Forms/CodeEditor",
  component: CodeEditor,
  argTypes: {},
} as Meta<typeof CodeEditor>;

const Template: Story<CodeEditorProps> = (args) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <CodeEditor {...args} />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Some Code to Edit",
};

export const WithHelpTools = Template.bind({});
WithHelpTools.args = {
  label: "Some Code to Edit",
  helpTools: (
    <Fragment>
      <Button
        id={"copy-demo"}
        onClick={() => alert("CLICKED!")}
        icon={<CopyIcon />}
      />
    </Fragment>
  ),
  mode: "js",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "Some Code to Edit",
  helpTools: (
    <Fragment>
      <Button
        id={"copy-demo"}
        onClick={() => alert("CLICKED!")}
        icon={<CopyIcon />}
      />
    </Fragment>
  ),
  tooltip: "This is a code editor",
};

export const WithCustomStyles = Template.bind({});
WithCustomStyles.args = {
  label: "Some Code to Edit",
  helpTools: (
    <Fragment>
      <Button
        id={"copy-demo"}
        onClick={() => alert("CLICKED!")}
        icon={<CopyIcon />}
      />
    </Fragment>
  ),
  sx: {
    "& .editor": {
      backgroundColor: "#090",
    },
  },
};
