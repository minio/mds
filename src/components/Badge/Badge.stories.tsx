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
import Box from "../Box/Box";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import PlusIcon from "../Icons/NewDesignIcons/PlusIcon";
import Badge from "./Badge";
import { BadgeProps } from "./Badge.types";

export default {
  title: "MDS/Information/Badge",
  component: Badge,
  argTypes: {},
} as Meta<typeof Badge>;

const Template: Story<BadgeProps> = ({ label, id, sx, color }) => {
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Badge label={label} color={color} id={id} sx={sx} />

        <Badge
          label={label}
          color={color}
          id={id}
          badgeStyle={"minimal"}
          sx={sx}
        >
          {" "}
          Style Minimal
        </Badge>

        <Badge label={label} color={color} id={id} badgeStyle={"bold"} sx={sx}>
          {" "}
          Style Bold
        </Badge>

        <Badge label={label} color={color} id={id} sx={sx} icon={<PlusIcon />}>
          {" "}
          With an Icon
        </Badge>

        <Badge label={label} color={color} id={id} sx={sx} icon={<PlusIcon />}>
          {" "}
          Minimal an Icon
        </Badge>

        <Badge
          label={label}
          color={color}
          id={id}
          sx={sx}
          icon={<PlusIcon />}
          badgeStyle={"bold"}
        >
          {" "}
          Bold an Icon
        </Badge>

        <Badge
          label={label}
          color={color}
          id={id}
          sx={sx}
          badgeStyle={"subtle"}
          icon={true}
        >
          {" "}
          Default Icon
        </Badge>

        <Badge
          label={label}
          color={color}
          id={id}
          sx={sx}
          badgeStyle={"subtle"}
          size={"small"}
        >
          {" "}
          Small Subtle
        </Badge>

        <Badge
          label={label}
          color={color}
          id={id}
          sx={sx}
          badgeStyle={"bold"}
          size={"small"}
        >
          {" "}
          Small Bold
        </Badge>

        <Badge
          label={label}
          color={color}
          id={id}
          sx={sx}
          badgeStyle={"minimal"}
          size={"small"}
        >
          {" "}
          Small Minimal
        </Badge>

        <Badge
          label={"9"}
          color={color}
          id={id}
          sx={sx}
          badgeStyle={"bold"}
          isNumber
        />

        <Badge
          label={"9"}
          color={color}
          id={id}
          sx={sx}
          badgeStyle={"bold"}
          size={"small"}
          isNumber
        />

        <Badge
          label={"9"}
          color={color}
          id={id}
          sx={sx}
          badgeStyle={"subtle"}
          isNumber
        />

        <Badge
          label={"9"}
          color={color}
          id={id}
          sx={sx}
          badgeStyle={"subtle"}
          size={"small"}
          isNumber
        />

        <Badge
          label={"9"}
          color={color}
          id={id}
          sx={sx}
          badgeStyle={"minimal"}
          isNumber
        />

        <Badge
          label={"9"}
          color={color}
          id={id}
          sx={sx}
          badgeStyle={"minimal"}
          size={"small"}
          isNumber
        />

        <Badge
          label={"Dot Icon"}
          color={color}
          id={id}
          sx={sx}
          badgeStyle={"subtle"}
          size={"normal"}
          icon={"dot"}
        />

        <Badge
          label={"Dot Icon"}
          color={color}
          id={id}
          sx={sx}
          badgeStyle={"minimal"}
          size={"small"}
          icon={"dot"}
        />
      </Box>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "A Badge",
  id: "Badge-test",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
};

export const CustomStyles = Template.bind({});
CustomStyles.args = {
  label: "A Badge",
  id: "Badge-test",
  onDelete: () => {
    alert("Clicked Delete Button!");
  },
  sx: {
    backgroundColor: "#080",
    color: "#ff0",
  },
};
