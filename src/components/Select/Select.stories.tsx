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

import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";

import Select from "./Select";
import { SelectProps } from "./Select.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import FormLayout from "../FormLayout/FormLayout";
import DownloadIcon from "../Icons/DownloadIcon";
import UploadIcon from "../Icons/UploadIcon";
import UsersIcon from "../Icons/UsersIcon";

export default {
  title: "MDS/Forms/Select",
  component: Select,
  argTypes: {},
} as Meta<typeof Select>;

const Template: Story<SelectProps> = ({
  label,
  required,
  tooltip,
  disabled,
  fixedLabel = "",
  options,
}) => {
  const [selectedValue, setSelectedValue] = useState<string>("value1");

  let useOpts = [
    { label: "Option 1", value: "value1" },
    { label: "Option 2", value: "value2" },
    {
      label: "Option 3",
      value: "value3",
    },
  ];

  if (options && options.length > 0) {
    useOpts = options;
  }

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <FormLayout>
        <Select
          id={"story-select"}
          options={useOpts}
          value={selectedValue}
          onChange={(newValue) => {
            setSelectedValue(newValue);
            if (fixedLabel !== "") {
              alert(`Triggered ${newValue}`);
            }
          }}
          label={label}
          required={required}
          tooltip={tooltip}
          disabled={disabled}
          fixedLabel={fixedLabel}
        />
      </FormLayout>
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

export const FixedLabel = Template.bind({});
FixedLabel.args = {
  fixedLabel: "Select an option to trigger an action",
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
