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

import React, { FC, useEffect, useState } from "react";
import { useTheme } from "@emotion/react";

import Box from "../Box";
import { timeSelectorContainerStyles } from "./DateTime.styles";
import { TimeSelectorProps } from "./DateTimeInput.types";
import { Button, ButtonGroup, InputBox } from "../../index";
import { DateTime } from "luxon";

const TimeSelector: FC<TimeSelectorProps> = ({
  value,
  onChange,
  validitySignal,
  secondsSelector = false,
  timeFormat = "24h" as "12h" | "24h",
}) => {
  const theme = useTheme();

  const timeSelectorContainer = timeSelectorContainerStyles(theme);

  const [currentHour, setCurrentHour] = useState<string>(
    value?.toFormat(timeFormat === "12h" ? "hh" : "HH") || "00",
  );
  const [currentMinute, setCurrentMinute] = useState<string>(
    value?.toFormat("mm") || "00",
  );
  const [currentSecond, setCurrentSecond] = useState<string>(
    value?.toFormat("ss") || "00",
  );
  const [meridiem, setMeridiem] = useState<"am" | "pm">(
    (value?.hour || 0) >= 12 ? "pm" : "am",
  );

  useEffect(() => {
    const validHour =
      currentHour.length === 2 &&
      parseInt(currentHour) >= 0 &&
      parseInt(currentHour) <= (timeFormat === "12h" ? 12 : 23);
    const validMinute =
      currentMinute.length === 2 &&
      parseInt(currentMinute) >= 0 &&
      parseInt(currentMinute) <= 59;
    const validSecond =
      !secondsSelector ||
      (currentSecond.length === 2 &&
        parseInt(currentSecond) >= 0 &&
        parseInt(currentSecond) <= 59);

    if (validHour && validMinute && validSecond) {
      let hour = parseInt(currentHour);
      let minute = parseInt(currentMinute);
      let second = parseInt(currentSecond);

      if (timeFormat === "12h") {
        if (meridiem === "am" && hour === 12) {
          hour = 0;
        } else if (meridiem === "pm" && hour < 12) {
          hour += 12;
        }
      }

      const newDate = DateTime.fromObject({
        year: value?.year,
        month: value?.month,
        day: value?.day,
        hour,
        minute,
        second,
      });

      onChange(newDate);

      if (validitySignal) {
        validitySignal(true);
      }

      return;
    }

    if (validitySignal) {
      validitySignal(false);
    }
  }, [currentHour, currentMinute, currentSecond, meridiem]);

  if (!value) {
    return null;
  }

  return (
    <div css={timeSelectorContainer}>
      <Box className={"selectors"}>
        <InputBox
          id={"hour-selector"}
          label={"Hour"}
          sizeMode={"small"}
          orientation={"vertical"}
          sx={{ width: 25 }}
          pattern={"[0-9]*"}
          value={currentHour}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.validity.valid && e.target.value.length <= 2) {
              setCurrentHour(e.target.value);
            }
          }}
          state={
            currentHour.length < 2 ||
            (timeFormat === "24h" && parseInt(currentHour) > 23) ||
            (timeFormat === "12h" && parseInt(currentHour) > 12)
              ? "error"
              : "normal"
          }
        />
        <Box className={"timeDiv"}>:</Box>
        <InputBox
          id={"minutes-selector"}
          label={"Minutes"}
          sizeMode={"small"}
          orientation={"vertical"}
          sx={{ width: 25 }}
          pattern={"[0-9]*"}
          value={currentMinute}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            if (e.target.validity.valid && e.target.value.length <= 2) {
              setCurrentMinute(e.target.value);
            }
          }}
          state={
            currentMinute.length < 2 || parseInt(currentMinute) > 59
              ? "error"
              : "normal"
          }
        />
        {secondsSelector && (
          <>
            <Box className={"timeDiv"}>:</Box>
            <InputBox
              id={"minutes-selector"}
              label={"Seconds"}
              sizeMode={"small"}
              orientation={"vertical"}
              sx={{ width: 25 }}
              pattern={"[0-9]*"}
              value={currentSecond}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.validity.valid && e.target.value.length <= 2) {
                  setCurrentSecond(e.target.value);
                }
              }}
              state={
                currentSecond.length < 2 || parseInt(currentSecond) > 59
                  ? "error"
                  : "normal"
              }
            />
          </>
        )}
      </Box>
      <Box className={"timeContainer"}>
        {timeFormat === "12h" && (
          <ButtonGroup
            sx={{
              width: "100%",
            }}
          >
            <Button
              id={"meridiemAM"}
              className={meridiem == "am" ? "selected" : ""}
              label={"AM"}
              onClick={() => setMeridiem("am")}
              sx={{ width: "100%" }}
            />
            <Button
              id={"meridiemPM"}
              className={meridiem == "pm" ? "selected" : ""}
              label={"PM"}
              onClick={() => setMeridiem("pm")}
              sx={{ width: "100%" }}
            />
          </ButtonGroup>
        )}
      </Box>
    </div>
  );
};

export default TimeSelector;
