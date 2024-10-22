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

import React, { FC, Fragment } from "react";
import Calendar from "react-calendar";
import { useTheme } from "@emotion/react";
import { DateTime } from "luxon";

import ChevronLeftIcon from "../../icons/ChevronLeftIcon";
import ChevronRightIcon from "../../icons/ChevronRightIcon";
import { dateSelectorContainerStyles } from "./DateTime.styles";
import { DateSelectorProps } from "./DateTimeInput.types";

const DateSelector: FC<DateSelectorProps> = ({
  value,
  onChange,
  minDate,
  maxDate,
}) => {
  const theme = useTheme();

  const dateTimeStyles = dateSelectorContainerStyles(theme);

  return (
    <div css={[dateTimeStyles]}>
      <Calendar
        onChange={(value) => {
          if (value) {
            onChange(DateTime.fromJSDate(value as Date));
          }
        }}
        value={value?.toJSDate()}
        minDate={minDate?.toJSDate()}
        maxDate={maxDate?.toJSDate()}
        navigationLabel={({ label }) => {
          const labelExplode = label.split(" ");

          return (
            <Fragment>
              {labelExplode.map((item, index) => (
                <span
                  key={`calLabItem-${index}`}
                  className={index === 1 ? "secondaryItem" : ""}
                >
                  {item}
                </span>
              ))}
            </Fragment>
          );
        }}
        next2Label={null}
        prev2Label={null}
        calendarType={"gregory"}
        nextLabel={<ChevronRightIcon />}
        prevLabel={<ChevronLeftIcon />}
      />
    </div>
  );
};

export default DateSelector;
