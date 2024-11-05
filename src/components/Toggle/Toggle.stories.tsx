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
import { useState } from "@storybook/addons";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import Toggle from "./index";
import { ToggleProps } from "./Toggle.types";

export default {
  title: "MDS/Forms/Toggle",
  component: Toggle,
  argTypes: {},
} as Meta<typeof Toggle>;

const Template: StoryFn<ToggleProps> = ({
  id,
  label,
  tooltip,
  sx,
  className,
  switchOnly,
  indicatorLabels,
  helper,
  disabled,
  checked,
  inverse,
  labelsOn,
}) => {
  const [stateChecked, setChecked] = useState<boolean>(checked);
  return (
    <StoryThemeProvider>
      <Toggle
        id={id}
        label={label}
        tooltip={tooltip}
        sx={sx}
        className={className}
        toggleOnly={switchOnly}
        indicatorLabels={indicatorLabels}
        helper={helper}
        checked={stateChecked}
        disabled={disabled}
        inverse={inverse}
        labelsOn={labelsOn}
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
  id: "Toggle",
  onClick: () => {
    console.log("click");
  },
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  label: "Click to confirm",
  id: "Toggle",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
};

export const DisabledToggle = Template.bind({});
DisabledToggle.args = {
  label: "Click to confirm",
  id: "Toggle",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
  disabled: true,
  checked: false,
};

export const ActiveDisabledToggle = Template.bind({});
ActiveDisabledToggle.args = {
  label: "Click to confirm",
  id: "Toggle",
  onClick: () => {
    console.log("click");
  },
  tooltip: "test",
  disabled: true,
  checked: true,
};

export const CustomIndicatorLabels = Template.bind({});
CustomIndicatorLabels.args = {
  label: "Click to confirm",
  labelsOn: true,
  id: "Toggle",
  indicatorLabels: ["Active", "Unactive"],
  onClick: () => {
    console.log("click");
  },
  helper: "This text describes what this switch is meant to do",
};

export const WithLabelIndicators = Template.bind({});
WithLabelIndicators.args = {
  label: "Click to confirm",
  labelsOn: true,
  id: "Toggle",
  onClick: () => {
    console.log("click");
  },
};

export const WithDescription = Template.bind({});
WithDescription.args = {
  label: "Click to confirm",
  id: "Toggle",
  onClick: () => {
    console.log("click");
  },
  helper: "This text describes what this switch is meant to do",
};

export const InverseLayout = Template.bind({});
InverseLayout.args = {
  label: "Click to confirm",
  id: "Toggle",
  onClick: () => {
    console.log("click");
  },
  inverse: true,
  helper: "This text describes what this switch is meant to do",
};

export const OnlyToggle = Template.bind({});
OnlyToggle.args = {
  label: "Click to confirm",
  id: "Toggle",
  onClick: () => {
    console.log("click");
  },
  switchOnly: true,
  helper: "This text describes what this switch is meant to do",
};
