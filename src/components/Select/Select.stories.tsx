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
import { useState } from "@storybook/addons";
import { SelectOption } from "../../global/global.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import TestIcon from "../../utils/TestIcon";
import Select from "./";
import { SelectProps } from "./Select.types";
import DownloadIcon from "../../icons/DownloadIcon";
import UploadIcon from "../../icons/UploadIcon";
import UsersIcon from "../../icons/UsersIcon";

export default {
  title: "MDS/Forms/Select",
  component: Select,
  argTypes: {},
} as Meta<typeof Select>;

const Template: StoryFn<SelectProps> = ({
  label,
  required,
  tooltip,
  disabled,
  options,
  placeholder,
  sx,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>(
    placeholder ? "" : "value1",
  );

  let useOpts: SelectOption[] = [
    { label: "Option 1", value: "value1" },
    { label: "Option 2", value: "value2" },
    {
      label: "Option 3",
      value: "value3",
    },
    {
      label: "Disabled Option",
      value: "value4",
      disabled: true,
    },
  ];

  if (options && options.length > 0) {
    useOpts = options;
  }

  return (
    <StoryThemeProvider>
      <Select
        id={"story-select"}
        options={useOpts}
        value={selectedValue}
        onChange={(newValue, extraValue) => {
          setSelectedValue(newValue);

          console.log(extraValue);

          if (extraValue) {
            alert(`Extra Value ${JSON.stringify(extraValue)}`);
          }
        }}
        label={label}
        required={required}
        tooltip={tooltip}
        disabled={disabled}
        placeholder={placeholder}
        sx={sx}
      />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "A Select box",
};

export const RequiredTag = Template.bind({});
RequiredTag.args = {
  label: "A Select box",
  required: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "A Select box",
  required: true,
  tooltip: "Tooltip example",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "A Select box",
  disabled: true,
};

export const OptionsWithIcons = Template.bind({});
OptionsWithIcons.args = {
  options: [
    { label: "Option 1", value: "value1", icon: <DownloadIcon /> },
    { label: "Option 2", value: "value2", icon: <UploadIcon /> },
    { label: "Option 3", value: "value3", icon: <UsersIcon /> },
  ],
};

export const ExtraReturnOption = Template.bind({});
ExtraReturnOption.args = {
  options: [
    {
      label: "Option 1",
      value: "value1",
      icon: <DownloadIcon />,
      extraValue: { anotherVar: "test1" },
    },
    {
      label: "Option 2",
      value: "value2",
      icon: <UploadIcon />,
      extraValue: { anotherVar: "test2" },
    },
    {
      label: "Option 3",
      value: "value3",
      icon: <UsersIcon />,
      extraValue: { anotherVar: "test3" },
    },
    { label: "No Extra Value", value: "value4", icon: <UsersIcon /> },
  ],
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "This Select has placeholder",
  options: [
    {
      label: "Option 1",
      value: "value1",
      icon: <DownloadIcon />,
      extraValue: { anotherVar: "test1" },
    },
    {
      label: "Option 2",
      value: "value2",
      icon: <UploadIcon />,
      extraValue: { anotherVar: "test2" },
    },
    {
      label: "Option 3",
      value: "value3",
      icon: <UsersIcon />,
      extraValue: { anotherVar: "test3" },
    },
    { label: "No Extra Value", value: "value4", icon: <UsersIcon /> },
  ],
};

export const IndicatorInLabel = Template.bind({});
IndicatorInLabel.args = {
  placeholder: "This Select has placeholder",
  options: [
    {
      label: "Option with indicator",
      value: "value1",
      icon: <DownloadIcon />,
      extraValue: { anotherVar: "test1" },
      indicator: <TestIcon style={{ fill: "#080" }} />,
    },
    {
      label: "Option 2",
      value: "value2",
      icon: <UploadIcon />,
      extraValue: { anotherVar: "test2" },
    },
    {
      label: "Option 3",
      value: "value3",
      icon: <UsersIcon />,
      extraValue: { anotherVar: "test3" },
    },
    { label: "No Extra Value", value: "value4", icon: <UsersIcon /> },
  ],
};

export const LongLabels = Template.bind({});
LongLabels.args = {
  placeholder: "This Select has placeholder",
  options: [
    {
      label:
        "Super long label for an Option with indicator, this label is very long to display how it will look with ellipsis, Super long label for an Option with indicator, this label is very long to display how it will look with ellipsis",
      value: "value1",
      icon: <DownloadIcon />,
      indicator: <TestIcon style={{ fill: "#080" }} />,
    },
    {
      label: "Common size label",
      value: "value2",
      icon: <DownloadIcon />,
      indicator: <TestIcon style={{ fill: "#080" }} />,
    },
    {
      label:
        "Super long label for an Option without indicator, this label is very long to display how it will look with ellipsis, Super long label for an Option with indicator, this label is very long to display how it will look with ellipsis",
      value: "value3",
      icon: <UploadIcon />,
    },
    {
      label:
        "Super long label for an Option without indicator and icon, this label is very long to display how it will look with ellipsis, Super long label for an Option with indicator, this label is very long to display how it will look with ellipsis",
      value: "value4",
    },
  ],
  sx: {
    maxWidth: 300,
  },
};
