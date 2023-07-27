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

import Switch from "./Switch";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import { SwitchProps } from "./Switch.types";

export default {
  title: "MDS/Forms/Switch",
  component: Switch,
  argTypes: {},
} as Meta<typeof Switch>;

const Template: Story<SwitchProps> = ({
  id,
  label,
  tooltip,
  sx,
  className,
  switchOnly,
  indicatorLabels,
  description,
  disabled,
  checked,
}) => {
  const [stateChecked, setChecked] = useState<boolean>(checked);
  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <Switch
        id={id}
        label={label}
        tooltip={tooltip}
        sx={sx}
        className={className}
        switchOnly={switchOnly}
        indicatorLabels={indicatorLabels}
        description={description}
        checked={stateChecked}
        disabled={disabled}
        onClick={(e) => {
          setChecked(e.target.checked);
        }}
      />
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
};

export const DisabledSwitch = Template.bind({});
DisabledSwitch.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
  disabled: true,
  checked: false,
};

export const ActiveDisabledSwitch = Template.bind({});
ActiveDisabledSwitch.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
  disabled: true,
  checked: true,
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
  description: "This text describes what this switch is meant to do",
};

export const CustomIndicatorLabels = Template.bind({});
CustomIndicatorLabels.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
  description: "This text describes what this switch is meant to do",
  indicatorLabels: ["Enabled", "Disabled"],
};

export const OnlySwitch = Template.bind({});
OnlySwitch.args = {
  label: "Click to confirm",
  id: "Switch",
  onClick: () => {
    console.log("click");
  },
  switchOnly: true,
  description: "This text describes what this switch is meant to do",
};
