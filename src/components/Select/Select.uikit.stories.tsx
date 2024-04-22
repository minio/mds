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

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Box from "../Box/Box";
import Select from "./Select";
import { SelectProps } from "./Select.types";
import { SelectOption } from "../../global/global.types";

export default {
  title: "UI Kit/Forms & Inputs/Select Input",
  component: Select,
  argTypes: {},
} as Meta<typeof InputBox>;

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

const Template: Story<SelectProps> = (args: SelectProps) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <h1>Horizontal</h1>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2%",
        "& .inputBox": { flex: "49%" },
      }}
    >
      <Select {...args} sizeMode={"small"} />
      <Select {...args} sizeMode={"large"} />

      <Select {...args} disabled sizeMode={"small"} />
      <Select {...args} disabled sizeMode={"large"} />

      <Select {...args} readOnly sizeMode={"small"} />
      <Select {...args} readOnly sizeMode={"large"} />

      <Select {...args} sizeMode={"small"} state={"error"} />
      <Select {...args} sizeMode={"large"} state={"error"} />
      <Select {...args} sizeMode={"small"} state={"warning"} />
      <Select {...args} sizeMode={"large"} state={"warning"} />
      <Select {...args} sizeMode={"small"} state={"success"} />
      <Select {...args} sizeMode={"large"} state={"success"} />
    </Box>
    <h1>Vertical</h1>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2%",
        "& .inputBox": { flex: "49%" },
      }}
    >
      <Select {...args} orientation={"vertical"} sizeMode={"small"} />
      <Select {...args} orientation={"vertical"} sizeMode={"large"} />
      <Select {...args} orientation={"vertical"} disabled sizeMode={"small"} />
      <Select {...args} orientation={"vertical"} disabled sizeMode={"large"} />
      <Select {...args} orientation={"vertical"} readOnly sizeMode={"small"} />
      <Select {...args} orientation={"vertical"} readOnly sizeMode={"large"} />
      <Select
        {...args}
        orientation={"vertical"}
        sizeMode={"small"}
        state={"error"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        sizeMode={"large"}
        state={"error"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        sizeMode={"small"}
        state={"warning"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        sizeMode={"large"}
        state={"warning"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        sizeMode={"small"}
        state={"success"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        sizeMode={"large"}
        state={"success"}
      />
    </Box>
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  value: "Value",
  placeholder: "Placeholder",
  helper: "Helper Text",
  options: useOpts,
};
