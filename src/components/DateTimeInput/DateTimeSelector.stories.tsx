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

import { useState } from "react";
import { Meta, Story } from "@storybook/react";

import DateTimeSelector from "./DateTimeSelector";
import { DateTimeSelectorProps } from "./DateTimeInput.types";

import StoryThemeProvider from "../../utils/StoryThemeProvider";
import GlobalStyles from "../GlobalStyles/GlobalStyles";
import FormLayout from "../FormLayout/FormLayout";
import { DateTime } from "luxon";

export default {
  title: "MDS/Forms/TimeSelector/DateTimeSelector",
  component: DateTimeSelector,
  argTypes: {},
} as Meta<typeof DateTimeSelector>;

const Template: Story<DateTimeSelectorProps> = ({
  mode,
  id,
  usePortal,
  maxDate,
  minDate,
  sx,
  anchorEl,
  timeFormat,
  secondsSelector,
}) => {
  const [newValue, setValue] = useState<DateTime>(DateTime.now());

  return (
    <StoryThemeProvider>
      <GlobalStyles />
      <FormLayout>
        <DateTimeSelector
          id={"story-DateTimeSelector"}
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
        />
      </FormLayout>
    </StoryThemeProvider>
  );
};

export const Default = Template.bind({});
Default.args = {
  id: "DateTimeSelector",
  usePortal: false,
  timeFormat: "12h",
  secondsSelector: true,
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

export const CalendarOnly = Template.bind({});
CalendarOnly.args = {
  id: "DateTimeInput",
  usePortal: false,
  mode: "date",
};
