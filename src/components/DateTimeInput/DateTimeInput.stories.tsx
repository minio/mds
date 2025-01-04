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
import { useEffect, useState } from "@storybook/addons";
import { DateTime } from "luxon";

import DateTimeInput from "./DateTimeInput";
import { DateTimeInputProps } from "./DateTimeInput.types";
import StoryThemeProvider from "../../utils/StoryThemeProvider";
import CalendarIcon from "../../icons/CalendarIcon";
import GlobalStyles from "../GlobalStyles";
import FormLayout from "../FormLayout";

export default {
  title: "MDS/Forms/TimeSelector/DateTimeInput",
  component: DateTimeInput,
  argTypes: {},
} as Meta<typeof DateTimeInput>;

const Template: StoryFn<DateTimeInputProps> = ({
  mode,
  usePortal,
  maxDate,
  minDate,
  sx,
  timeFormat,
  secondsSelector,
  label,
  tooltip,
  openPickerIcon,
  displayFormat,
  onAcceptDate,
  saveLabel,
}) => {
  const [newValue, setValue] = useState<DateTime>(DateTime.now());

  useEffect(() => {
    console.log("New Value: ", newValue);
  }, [newValue]);

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <FormLayout>
        <DateTimeInput
          id={"story-DateTimeInput"}
          value={newValue}
          onChange={(value) => {
            setValue(value);
          }}
          mode={mode}
          maxDate={maxDate}
          minDate={minDate}
          sx={sx}
          usePortal={usePortal}
          timeFormat={timeFormat}
          secondsSelector={secondsSelector}
          label={label}
          tooltip={tooltip}
          openPickerIcon={openPickerIcon}
          displayFormat={displayFormat}
          saveLabel={saveLabel}
          onAcceptDate={onAcceptDate}
        />
        <DateTimeInput
          id={"story-DateTimeInput"}
          value={newValue}
          onChange={(value) => {
            setValue(value);
          }}
          mode={mode}
          maxDate={maxDate}
          minDate={minDate}
          sx={sx}
          usePortal={usePortal}
          timeFormat={timeFormat}
          secondsSelector={secondsSelector}
          label={label}
          tooltip={tooltip}
          openPickerIcon={openPickerIcon}
          displayFormat={displayFormat}
          sizeMode={"small"}
          saveLabel={saveLabel}
          onAcceptDate={onAcceptDate}
        />
      </FormLayout>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
};

export const Format24H = Template.bind({});
Format24H.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "24h",
};

export const WithSecondsSelector = Template.bind({});
WithSecondsSelector.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
  tooltip: "Please select a date to complete",
};

export const CustomPickerIcon = Template.bind({});
CustomPickerIcon.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
  tooltip: "Please select a date to complete",
  openPickerIcon: <CalendarIcon />,
};

export const CustomDateDisplayFormat = Template.bind({});
CustomDateDisplayFormat.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
  tooltip: "Please select a date to complete",
  openPickerIcon: <CalendarIcon />,
  displayFormat: "DDDD",
};

export const DateOnly = Template.bind({});
DateOnly.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
  tooltip: "Please select a date to complete",
  mode: "date",
};

export const CustomSaveLabel = Template.bind({});
CustomSaveLabel.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
  tooltip: "Please select a date to complete",
  mode: "date",
  saveLabel: "Set This Date",
};

export const OnAcceptDateAction = Template.bind({});
OnAcceptDateAction.args = {
  id: "DateTimeInput",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
  label: "Select a Date",
  tooltip: "Please select a date to complete",
  mode: "date",
  onAcceptDate: () => {
    alert("Accepted Date");
  },
};
