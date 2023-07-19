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

import Tag from "./Tag";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { TagProps } from "./Tag.types";
import AddIcon from "../Icons/AddIcon";

export default {
  title: "MDS/Layout/Tag",
  component: Tag,
  argTypes: {},
} as Meta<typeof Tag>;

const Template: Story<TagProps> = ({ label, id, onDelete, sx, color }) => {
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Tag label={label} color={color} id={id} sx={sx} />
      &nbsp;
      <Tag label={label} color={color} id={id} onDelete={onDelete} sx={sx}>
        {" "}
        with on Delete
      </Tag>
      &nbsp;
      <Tag
        label={label}
        color={color}
        id={id}
        onDelete={onDelete}
        sx={sx}
        variant={"outlined"}
      >
        {" "}
        Outlined
      </Tag>
      &nbsp;
      <Tag label={label} color={color} id={id} sx={sx} icon={<AddIcon />}>
        {" "}
        With an Icon
      </Tag>
      &nbsp;
      <Tag
        label={label}
        color={color}
        id={id}
        sx={sx}
        variant={"outlined"}
        icon={<AddIcon />}
      >
        {" "}
        Outlined With an Icon
      </Tag>
      &nbsp;
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "A Tag",
  id: "tag-test",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: "A Tag",
  id: "tag-test",
  color: "secondary",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
};

export const Alert = Template.bind({});
Alert.args = {
  label: "A Tag",
  id: "tag-test",
  color: "alert",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
};

export const Warn = Template.bind({});
Warn.args = {
  label: "A Tag",
  id: "tag-test",
  color: "warn",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
};

export const Ok = Template.bind({});
Ok.args = {
  label: "A Tag",
  id: "tag-test",
  color: "ok",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: "A Tag",
  id: "tag-test",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
  sx: {
    backgroundColor: "#080",
    color: "#ff0",
  },
};
