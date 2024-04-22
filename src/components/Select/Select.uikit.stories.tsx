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
      <Select {...args} size={"small"} />
      <Select {...args} size={"large"} />

      <Select {...args} disabled size={"small"} />
      <Select {...args} disabled size={"large"} />

      <Select {...args} readOnly size={"small"} />
      <Select {...args} readOnly size={"large"} />

      <Select {...args} size={"small"} state={"error"} />
      <Select {...args} size={"large"} state={"error"} />
      <Select {...args} size={"small"} state={"warning"} />
      <Select {...args} size={"large"} state={"warning"} />
      <Select {...args} size={"small"} state={"success"} />
      <Select {...args} size={"large"} state={"success"} />
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
      <Select {...args} orientation={"vertical"} size={"small"} />
      <Select {...args} orientation={"vertical"} size={"large"} />
      <Select {...args} orientation={"vertical"} disabled size={"small"} />
      <Select {...args} orientation={"vertical"} disabled size={"large"} />
      <Select {...args} orientation={"vertical"} readOnly size={"small"} />
      <Select {...args} orientation={"vertical"} readOnly size={"large"} />
      <Select
        {...args}
        orientation={"vertical"}
        size={"small"}
        state={"error"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        size={"large"}
        state={"error"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        size={"small"}
        state={"warning"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        size={"large"}
        state={"warning"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        size={"small"}
        state={"success"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        size={"large"}
        state={"success"}
      />
    </Box>
    <h1>Horizontal Icons</h1>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2%",
        "& .inputBox": { flex: "49%" },
      }}
    >
      <Select {...args} type={"password"} size={"small"} />
      <Select {...args} type={"password"} size={"large"} />

      <Select {...args} type={"password"} disabled size={"small"} />
      <Select {...args} type={"password"} disabled size={"large"} />

      <Select {...args} type={"password"} readOnly size={"small"} />
      <Select {...args} type={"password"} readOnly size={"large"} />

      <Select {...args} type={"password"} size={"small"} state={"error"} />
      <Select {...args} type={"password"} size={"large"} state={"error"} />
      <Select {...args} type={"password"} size={"small"} state={"warning"} />
      <Select {...args} type={"password"} size={"large"} state={"warning"} />
      <Select {...args} type={"password"} size={"small"} state={"success"} />
      <Select {...args} type={"password"} size={"large"} state={"success"} />
    </Box>
    <h1>Vertical Icons</h1>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: "2%",
        "& .inputBox": { flex: "49%" },
      }}
    >
      <Select
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"small"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"large"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        type={"password"}
        disabled
        size={"small"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        type={"password"}
        disabled
        size={"large"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        type={"password"}
        readOnly
        size={"small"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        type={"password"}
        readOnly
        size={"large"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"small"}
        state={"error"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"large"}
        state={"error"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"small"}
        state={"warning"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"large"}
        state={"warning"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"small"}
        state={"success"}
      />
      <Select
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"large"}
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
