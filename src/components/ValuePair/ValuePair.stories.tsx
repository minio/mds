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

import ValuePair from "./ValuePair";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { ValuePairProps } from "./ValuePair.types";

export default {
  title: "MDS/Layout/ValuePair",
  component: ValuePair,
  argTypes: {},
} as Meta<typeof ValuePair>;

const Template: Story<ValuePairProps> = ({ sx, direction }) => (
  <StoryThemeProvider>
    <GlobalStyles />
    <ValuePair
      label={"State"}
      value={
        <span>
          "Value"<a href={"#"}>Link</a>
        </span>
      }
      sx={sx}
      direction={direction}
    />
  </StoryThemeProvider>
);

export const Default = Template.bind({});
Default.args = {};

export const Horizontal = Template.bind({});
Horizontal.args = {
  direction: "row",
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  sx: {
    backgroundColor: "#080",
    color: "#fff",
  },
};
