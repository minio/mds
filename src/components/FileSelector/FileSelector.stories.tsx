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
import { useState } from "@storybook/addons";

import FileSelector from "./";
import { FileSelectorProps } from "./FileSelector.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles";

export default {
  title: "MDS/Forms/FileSelector",
  component: FileSelector,
  argTypes: {},
} as Meta<typeof FileSelector>;

const Template: Story<FileSelectorProps> = ({
  label,
  required,
  disabled,
  tooltip,
  state,
  helper,
  returnEncodedData,
}) => {
  const [value, setValue] = useState<string>("");
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <FileSelector
        label={label}
        id={"fileSelector"}
        required={required}
        disabled={disabled}
        helper={helper}
        state={state}
        tooltip={tooltip}
        name={"fileSelectorName"}
        value={value}
        onChange={(event, fileName, inputData) => {
          setValue(fileName);
          console.log(
            "Event:",
            event,
            "File Name:",
            fileName,
            "Encoded Data in BASE64:",
            inputData,
          );
        }}
        returnEncodedData={returnEncodedData}
      />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Select a File",
  required: true,
};

export const DisabledInput = Template.bind({});
DisabledInput.args = {
  label: "Select a File",
  required: true,
  disabled: true,
};

export const ErrorInput = Template.bind({});
ErrorInput.args = {
  label: "Input with Error",
  required: true,
  helper: "This is an error message",
  state: "error",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "Select a File",
  required: true,
  tooltip: "Tooltip text",
};

export const ReturnBase64Data = Template.bind({});
ReturnBase64Data.args = {
  label: "Select a File",
  required: true,
  tooltip: "Tooltip text",
  returnEncodedData: true,
};
