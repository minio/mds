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
import InputBox from "./";
import { InputBoxProps } from "./InputBox.types";
import Box from "../Box";

export default {
  title: "UI Kit/Forms & Inputs/Input Text",
  component: InputBox,
  argTypes: {},
} as Meta<typeof InputBox>;

const Template: StoryFn<InputBoxProps> = (args: InputBoxProps) => {
  return (
    <StoryThemeProvider>
      <h1>Horizontal</h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: "2%",
          "& .inputBox": { flex: "49%" },
        }}
      >
        <InputBox {...args} value={""} sizeMode={"small"} />
        <InputBox {...args} value={""} sizeMode={"large"} />

        <InputBox {...args} sizeMode={"small"} />
        <InputBox {...args} sizeMode={"large"} />

        <InputBox {...args} disabled sizeMode={"small"} />
        <InputBox {...args} disabled sizeMode={"large"} />

        <InputBox {...args} readOnly sizeMode={"small"} />
        <InputBox {...args} readOnly sizeMode={"large"} />

        <InputBox
          {...args}
          sizeMode={"small"}
          state={"error"}
          disableErrorUntilFocus={true}
        />
        <InputBox
          {...args}
          sizeMode={"large"}
          state={"error"}
          disableErrorUntilFocus={true}
        />
        <InputBox {...args} sizeMode={"small"} state={"warning"} />
        <InputBox {...args} sizeMode={"large"} state={"warning"} />
        <InputBox {...args} sizeMode={"small"} state={"success"} />
        <InputBox {...args} sizeMode={"large"} state={"success"} />
        <InputBox
          {...args}
          sizeMode={"small"}
          helper={
            "Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem "
          }
        />
        <InputBox
          {...args}
          sizeMode={"large"}
          helper={
            "Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem Lorem ipsum dolorem "
          }
        />
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
        <InputBox {...args} orientation={"vertical"} sizeMode={"small"} />
        <InputBox {...args} orientation={"vertical"} sizeMode={"large"} />
        <InputBox
          {...args}
          orientation={"vertical"}
          disabled
          sizeMode={"small"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          disabled
          sizeMode={"large"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          readOnly
          sizeMode={"small"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          readOnly
          sizeMode={"large"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          sizeMode={"small"}
          state={"error"}
          disableErrorUntilFocus={true}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          sizeMode={"large"}
          state={"error"}
          disableErrorUntilFocus={true}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          sizeMode={"small"}
          state={"warning"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          sizeMode={"large"}
          state={"warning"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          sizeMode={"small"}
          state={"success"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          sizeMode={"large"}
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
        <InputBox {...args} type={"password"} sizeMode={"small"} />
        <InputBox {...args} type={"password"} sizeMode={"large"} />

        <InputBox {...args} type={"password"} disabled sizeMode={"small"} />
        <InputBox {...args} type={"password"} disabled sizeMode={"large"} />

        <InputBox {...args} type={"password"} readOnly sizeMode={"small"} />
        <InputBox {...args} type={"password"} readOnly sizeMode={"large"} />

        <InputBox
          {...args}
          type={"password"}
          sizeMode={"small"}
          state={"error"}
          disableErrorUntilFocus={true}
        />
        <InputBox
          {...args}
          type={"password"}
          sizeMode={"large"}
          state={"error"}
          disableErrorUntilFocus={true}
        />
        <InputBox
          {...args}
          type={"password"}
          sizeMode={"small"}
          state={"warning"}
        />
        <InputBox
          {...args}
          type={"password"}
          sizeMode={"large"}
          state={"warning"}
        />
        <InputBox
          {...args}
          type={"password"}
          sizeMode={"small"}
          state={"success"}
        />
        <InputBox
          {...args}
          type={"password"}
          sizeMode={"large"}
          state={"success"}
        />
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
          sizeMode={"small"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          type={"password"}
          sizeMode={"large"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          type={"password"}
          disabled
          sizeMode={"small"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          type={"password"}
          disabled
          sizeMode={"large"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          type={"password"}
          readOnly
          sizeMode={"small"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          type={"password"}
          readOnly
          sizeMode={"large"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          type={"password"}
          sizeMode={"small"}
          state={"error"}
          disableErrorUntilFocus={true}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          type={"password"}
          sizeMode={"large"}
          state={"error"}
          disableErrorUntilFocus={true}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          type={"password"}
          sizeMode={"small"}
          state={"warning"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          type={"password"}
          sizeMode={"large"}
          state={"warning"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          type={"password"}
          sizeMode={"small"}
          state={"success"}
        />
        <InputBox
          {...args}
          orientation={"vertical"}
          type={"password"}
          sizeMode={"large"}
          state={"success"}
        />
      </Box>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Label",
  value: "Value",
  placeholder: "Placeholder",
  helper: "Helper Text",
};

export const LongTextInput = Template.bind({});
LongTextInput.args = {
  label: "Label",
  value:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  placeholder: "Placeholder",
  helper: "Helper Text",
};
