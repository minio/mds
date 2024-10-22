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

import { css, keyframes, Theme } from "@emotion/react";

import { CssProperties } from "../../../styled-system/types";
import { ProgressState } from "./ProgressBar.types";

const colorVariants = (theme: Theme, state: ProgressState) => {
  const variants = {
    progress: theme.colors["Color/Dataviz/1"],
    success: theme.colors["Color/Brand/Success/colorPrimary"],
    error: theme.colors["Color/Brand/Error/colorPrimary"],
    paused: theme.colors["Color/Brand/Neutral/colorPrimary"],
  };

  return variants[state];
};

const progressAnimation = keyframes`0% {
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

export const indeterminateStyles = (
  theme: Theme,
  barHeight: CssProperties["height"],
  state: ProgressState,
) => {
  const stateColor = colorVariants(theme, state);

  return css({
    width: 100,
    height: barHeight,
    display: "block",
    position: "absolute",
    borderRadius: barHeight,
    animation: `${progressAnimation} 1000ms linear infinite normal forwards`,
    backgroundColor: stateColor,
  });
};

export const progressBasicStyles = (
  theme: Theme,
  transparentBG: boolean,
  barHeight: CssProperties["height"],
  state: ProgressState,
) => {
  const stateColor = colorVariants(theme, state);

  return css({
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
        : theme.colors["Color/Dataviz/none"],
      borderRadius: barHeight,
      overflow: "hidden",
    },
    "& .notificationLabel": {
      fontSize: 12,
      color: stateColor,
    },
    "& .percentageBar": {
      display: "block",
      height: barHeight,
      backgroundColor: stateColor,
      transitionDuration: "0.1s",
      borderRadius: barHeight,
    },
  });
};
