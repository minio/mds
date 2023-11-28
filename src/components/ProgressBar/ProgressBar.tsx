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

import React, { FC } from "react";
import styled, { keyframes } from "styled-components";
import get from "lodash/get";
import { CommonProgressBar, ProgressBarProps } from "./ProgressBar.types";
import { lightColors } from "../../global/themes";
import Box from "../Box/Box";

const colorItems = {
  blue: "main",
  red: "danger",
  green: "good",
  orange: "warning",
  grey: "disabled",
};

const ProgressBase = styled.div<CommonProgressBar>(
  ({ theme, sx, color, barHeight, transparentBG }) => ({
    "& .progBlock": {
      display: "flex",
      alignItems: "center",
      gap: 10,
    },
    "& .progressContainer": {
      position: "relative",
      width: "100%",
      height: barHeight,
      backgroundColor: transparentBG
        ? "transparent"
        : get(theme, "boxBackground", lightColors.boxBackground),
      borderRadius: barHeight,
      overflow: "hidden",
    },
    "& .notificationLabel": {
      fontSize: 12,
      color: get(
        theme,
        `signalColors.${colorItems[color || "blue"]}`,
        lightColors.mainBlue,
      ),
    },
    "& .percentageBar": {
      display: "block",
      height: barHeight,
      backgroundColor: get(
        theme,
        `signalColors.${colorItems[color || "blue"]}`,
        lightColors.mainBlue,
      ),
      transitionDuration: "0.1s",
      borderRadius: barHeight,
    },
    ...sx,
  }),
);

export const innerAnimation = keyframes`0% {
                                          left: -100px;
                                          visibility: visible;
                                          width: 100px;
                                        }
                                          60% {
                                            width: 300px
                                          }
                                          99% {
                                            left: calc(100% + 300px);
                                          }
                                          100% {
                                            visibility: hidden;
                                            width: 100px;
                                          }`;

const IndeterminateItem = styled.div<CommonProgressBar>`
  width: 100px;
  height: ${(props) => get(props, "barHeight", 8)}px;
  display: block;
  position: absolute;
  border-radius: ${(props) => get(props, "barHeight", 8)}px;
  animation: ${innerAnimation} 1000ms linear infinite normal forwards;
  background-color: ${(props) =>
    get(
      props.theme,
      `signalColors.${colorItems[props.color || "blue"]}`,
      lightColors.mainBlue,
    )};
`;

const ProgressBar: FC<ProgressBarProps> = ({
  progressLabel = false,
  sx,
  value = 0,
  maxValue = 100,
  variant = "indeterminate",
  notificationLabel = "",
  color = "blue",
  barHeight = 6,
  transparentBG = false,
}) => {
  const calcPerc = (value * 100) / maxValue;

  return (
    <ProgressBase
      color={color}
      sx={sx}
      barHeight={barHeight}
      transparentBG={transparentBG}
    >
      <Box className={"progBlock"}>
        <Box className={"progressContainer"}>
          {variant === "indeterminate" ? (
            <IndeterminateItem color={color} barHeight={barHeight} />
          ) : (
            <Box
              className={"percentageBar"}
              style={{ width: `${calcPerc}%` }}
            />
          )}
        </Box>
        {progressLabel && variant !== "indeterminate" && (
          <span className={"progressPercentage"}>{Math.floor(calcPerc)}%</span>
        )}
      </Box>
      {notificationLabel !== "" && (
        <span className={"notificationLabel"}>{notificationLabel}</span>
      )}
    </ProgressBase>
  );
};

export default ProgressBar;
