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

import { useState } from "react";
import { Meta, Story } from "@storybook/react";

import Autocomplete from "./Autocomplete";
import { AutocompleteProps } from "./Autocomplete.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import FormLayout from "../FormLayout/FormLayout";
import DownloadIcon from "../Icons/DownloadIcon";
import UploadIcon from "../Icons/UploadIcon";
import UsersIcon from "../Icons/UsersIcon";
import { SelectorType } from "../../global/global.types";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Forms/Autocomplete",
  component: Autocomplete,
  argTypes: {},
} as Meta<typeof Autocomplete>;

const Template: Story<AutocompleteProps> = ({
  label,
  required,
  tooltip,
  disabled,
  options,
  placeholder,
  displayDropArrow,
}) => {
  const [AutocompleteedValue, setAutocompleteedValue] = useState<string>(
    placeholder ? "" : "value1",
  );

  let useOpts: SelectorType[] = [
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
      <GlobalStyles />
      <FormLayout>
        <Autocomplete
          id={"story-Autocomplete"}
          options={useOpts}
          value={AutocompleteedValue}
          onChange={(newValue, extraValue) => {
            setAutocompleteedValue(newValue);

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
          displayDropArrow={displayDropArrow}
        />
      </FormLayout>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "An Autocomplete box",
};

export const RequiredTag = Template.bind({});
RequiredTag.args = {
  label: "An Autocomplete box",
  required: true,
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "An Autocomplete box",
  required: true,
  tooltip: "Tooltip example",
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "An Autocomplete box",
  disabled: true,
};

export const FixedLabel = Template.bind({});
FixedLabel.args = {
  fixedLabel: "Autocomplete an option to trigger an action",
  disabled: false,
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
  placeholder: "This Autocomplete has placeholder",
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

export const NoDropArrow = Template.bind({});
NoDropArrow.args = {
  options: [
    {
      label: "Option 1",
      value: "value1",
      extraValue: { anotherVar: "test1" },
    },
    {
      label: "Option 2",
      value: "value2",
      extraValue: { anotherVar: "test2" },
    },
    {
      label: "Option 3",
      value: "value3",
      extraValue: { anotherVar: "test3" },
    },
    { label: "No Extra Value", value: "value4", icon: <UsersIcon /> },
  ],
  displayDropArrow: false,
};

export const IndicatorInLabel = Template.bind({});
IndicatorInLabel.args = {
  options: [
    {
      label: "Option with Indicator",
      value: "value1",
      indicator: <TestIcon style={{ fill: "#080" }} />,
    },
    {
      label: "Option 2",
      value: "value2",
    },
    {
      label: "Option 3",
      value: "value3",
    },
    { label: "No Extra Value", value: "value4", icon: <UsersIcon /> },
  ],
};
