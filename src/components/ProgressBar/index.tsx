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

import { FC, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import { indeterminateStyles, progressBasicStyles } from "./ProgressBar.styles";
import { ProgressBarProps } from "./ProgressBar.types";

const ProgressBar: FC<ProgressBarProps> = ({
  progressLabel = false,
  sx,
  value = 0,
  maxValue = 100,
  variant = "indeterminate",
  notificationLabel = "",
  state = "progress",
  barHeight = 4,
  transparentBG = false,
}) => {
  const theme = useTheme();

  const baseThemes = progressBasicStyles(
    theme,
    transparentBG,
    barHeight,
    state,
  );

  const indeterminateTheme = indeterminateStyles(theme, barHeight, state);

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const calcPerc = (value * 100) / maxValue;

  return (
    <div css={[baseThemes, overrideThemes]} className={"progressBar"}>
      <div className={"progBlock"}>
        <div className={"progressContainer"}>
          {variant === "indeterminate" ? (
            <div css={indeterminateTheme} />
          ) : (
            <div
              className={"percentageBar"}
              style={{ width: `${calcPerc}%` }}
            />
          )}
        </div>
        {progressLabel && variant !== "indeterminate" && (
          <span className={"progressPercentage"}>{Math.floor(calcPerc)}%</span>
        )}
      </div>
      {notificationLabel !== "" && (
        <span className={"notificationLabel"}>{notificationLabel}</span>
      )}
    </div>
  );
};

export default ProgressBar;
