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

import ExpandOptionsButton from "./ExpandOptionsButton";
import { ExpandOptionsButtonProps } from "./ExpandOptionsButton.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Box from "../Box/Box";

export default {
  title: "MDS/Forms/ExpandOptionsButton",
  component: ExpandOptionsButton,
  argTypes: {},
} as Meta<typeof ExpandOptionsButton>;

const Template: Story<ExpandOptionsButtonProps> = (args) => {
  const [open, setOpen] = useState<boolean>(false);

  const extraArgs = {
    ...args,
    open,
    onClick: () => {
      setOpen(!open);
    },
  };

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <ExpandOptionsButton {...extraArgs} />
      {open && (
        <Box withBorders sx={{ marginTop: 10 }}>
          Simulated hidden panel
        </Box>
      )}
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  label: "Click to Expand an Option",
  variant: "regular",
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  label: "Click to Expand an Option",
  variant: "regular",
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: "Click to Expand an Option",
  variant: "regular",
  sx: {
    color: "#000",
    backgroundColor: "#f90",
  },
};
