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

import DropdownSelector from "./DropdownSelector";
import { DropdownSelectorProps } from "./DropdownSelector.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import Box from "../Box/Box";
import Button from "../Button/Button";
import TestIcon from "../../utils/TestIcon";

export default {
  title: "MDS/Forms/DropdownSelector",
  component: DropdownSelector,
  argTypes: {},
} as Meta<typeof DropdownSelector>;

const Template: Story<DropdownSelectorProps> = (args) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const openDownloadMenu = Boolean(anchorEl);

  const handleCloseDownload = () => {
    setAnchorEl(null);
  };

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Button
        id={"test-button"}
        onClick={(e) => {
          setAnchorEl(e.currentTarget);
        }}
        icon={<TestIcon />}
      />
      <DropdownSelector
        open={openDownloadMenu}
        anchorEl={anchorEl}
        hideTriggerAction={() => {
          handleCloseDownload();
        }}
        {...args}
      />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  options: [
    { label: "Test Label 1", value: "tl1" },
    { label: "Test Label 2", value: "tl2" },
  ],
};

export const AnchorEnd = Template.bind({});
AnchorEnd.args = {
  options: [
    { label: "Test Label 1", value: "tl1" },
    { label: "Test Label 2", value: "tl2" },
  ],
  anchorOrigin: "end",
};
