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

import InputBox from "./InputBox";
import { InputBoxProps } from "./InputBox.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import FormLayout from "../FormLayout/FormLayout";
import TestIcon from "../../utils/TestIcon";
import Box from "../Box/Box";
import UsersIcon from "../Icons/UsersIcon";
import PasswordKeyIcon from "../Icons/PasswordKeyIcon";
import EyeIcon from "../Icons/EyeIcon";

export default {
  title: "UI Kit/Forms & Inputs/Input Text",
  component: InputBox,
  argTypes: {},
} as Meta<typeof InputBox>;

const Template: Story<InputBoxProps> = (args: InputBoxProps) => (
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
      <InputBox {...args} size={"small"} />
      <InputBox {...args} size={"large"} />

      <InputBox {...args} disabled size={"small"} />
      <InputBox {...args} disabled size={"large"} />

      <InputBox {...args} readOnly size={"small"} />
      <InputBox {...args} readOnly size={"large"} />

      <InputBox {...args} size={"small"} state={"error"} />
      <InputBox {...args} size={"large"} state={"error"} />
      <InputBox {...args} size={"small"} state={"warning"} />
      <InputBox {...args} size={"large"} state={"warning"} />
      <InputBox {...args} size={"small"} state={"success"} />
      <InputBox {...args} size={"large"} state={"success"} />
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
      <InputBox {...args} orientation={"vertical"} size={"small"} />
      <InputBox {...args} orientation={"vertical"} size={"large"} />
      <InputBox {...args} orientation={"vertical"} disabled size={"small"} />
      <InputBox {...args} orientation={"vertical"} disabled size={"large"} />
      <InputBox {...args} orientation={"vertical"} readOnly size={"small"} />
      <InputBox {...args} orientation={"vertical"} readOnly size={"large"} />
      <InputBox
        {...args}
        orientation={"vertical"}
        size={"small"}
        state={"error"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        size={"large"}
        state={"error"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        size={"small"}
        state={"warning"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        size={"large"}
        state={"warning"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        size={"small"}
        state={"success"}
      />
      <InputBox
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
      <InputBox {...args} type={"password"} size={"small"} />
      <InputBox {...args} type={"password"} size={"large"} />

      <InputBox {...args} type={"password"} disabled size={"small"} />
      <InputBox {...args} type={"password"} disabled size={"large"} />

      <InputBox {...args} type={"password"} readOnly size={"small"} />
      <InputBox {...args} type={"password"} readOnly size={"large"} />

      <InputBox {...args} type={"password"} size={"small"} state={"error"} />
      <InputBox {...args} type={"password"} size={"large"} state={"error"} />
      <InputBox {...args} type={"password"} size={"small"} state={"warning"} />
      <InputBox {...args} type={"password"} size={"large"} state={"warning"} />
      <InputBox {...args} type={"password"} size={"small"} state={"success"} />
      <InputBox {...args} type={"password"} size={"large"} state={"success"} />
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
      <InputBox
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"small"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"large"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        type={"password"}
        disabled
        size={"small"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        type={"password"}
        disabled
        size={"large"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        type={"password"}
        readOnly
        size={"small"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        type={"password"}
        readOnly
        size={"large"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"small"}
        state={"error"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"large"}
        state={"error"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"small"}
        state={"warning"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"large"}
        state={"warning"}
      />
      <InputBox
        {...args}
        orientation={"vertical"}
        type={"password"}
        size={"small"}
        state={"success"}
      />
      <InputBox
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
};
