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

import React, { FC, SVGProps, useEffect, useRef } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { SizeChartConstructProps, SizeChartProps } from "./SizeChart.types";
import { lightColors } from "../../global/themes";
import { calculateBytes } from "../../global/utils";

const SizeChartBase = styled.svg<SVGProps<any> & SizeChartConstructProps>(
  ({ theme, usedBytes, totalBytes, chartLabel, sx }) => {
    const percUsed = (usedBytes * 100) / totalBytes;

    let color = get(theme, "signalColors.main", lightColors.mainBlue);

    if (percUsed >= 90) {
      color = get(theme, "signalColors.danger", lightColors.mainRed);
    } else if (percUsed >= 80) {
      color = get(theme, "signalColors.warning", lightColors.mainOrange);
    }

    return {
      "& .usedSpace": {
        stroke: color,
      },
      "& .availableSpace": {
        stroke: get(theme, "signalColors.disabled", lightColors.disabledGrey),
      },
      "& .chartText": {
        fill: "#000",
        transform: "translateY(0.25em)",
      },
      "& .chartNumber": {
        fontSize: "0.3em",
        lineHeight: 1,
        textAnchor: "middle",
        transform:
          chartLabel !== "" ? "translateY(-0.50em)" : "translateY(-0.25em)",
        fontWeight: "bold",
        fill: get(theme, "fontColor", lightColors.defaultFontColor),
      },
      "& .chartLabel": {
        fontSize: "0.2em",
        textAnchor: "middle",
        transform: "translateY(0.7em)",
        whiteSpace: "normal",
        fontWeight: "bold",
        fill: get(theme, "mutedText", lightColors.mutedText),
      },
      ...sx,
    };
  },
);

const SizeChart: FC<SizeChartProps> = ({
  width = "150",
  height = "150",
  usedBytes,
  totalBytes,
  label,
  chartLabel = "",
  sx,
}) => {
  const val1D = useRef<SVGCircleElement>(null);
  const val2D = useRef<SVGCircleElement>(null);

  useEffect(() => {
    setTimeout(function () {
      if (val1D?.current) {
        val1D.current.style.transition =
          "stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out";
        val1D.current.style.strokeDasharray = "100 0";
      }
    }, 20);
  }, []);

  useEffect(() => {
    const val1 = usedBytes;
    const val2 = totalBytes - usedBytes;

    const total = val1 + val2;

    const per1 = (val1 / total) * 100;
    const per2 = (val2 / total) * 100;
    const offset = 25;

    if (val1D?.current && val2D?.current) {
      val1D.current.style.transition =
        "stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out";
      val1D.current.style.strokeDasharray = per1 + " " + (100 - per1);
      val1D.current.style.strokeDashoffset = `${offset}`;

      val2D.current.style.transition =
        "stroke-dasharray 0.5s ease-in-out, stroke-dashoffset 0.5s ease-in-out";
      val2D.current.style.strokeDasharray = per2 + " " + (100 - per2);
      val2D.current.style.strokeDashoffset = `${100 - per1 + offset}`;
    }
  }, [usedBytes, totalBytes]);

  const usedSizeUnits = calculateBytes(usedBytes);

  return (
    <SizeChartBase
      width={width}
      height={height}
      viewBox="0 0 42 42"
      usedBytes={usedBytes}
      totalBytes={totalBytes}
      sx={sx}
      chartLabel={chartLabel}
    >
      <circle
        className={"usedSpace"}
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        strokeWidth="3"
        strokeDasharray="100 0"
        strokeDashoffset="25"
        ref={val1D}
      />
      <circle
        className={"availableSpace"}
        cx="21"
        cy="21"
        r="15.91549430918954"
        fill="transparent"
        stroke="#ff0000"
        strokeWidth="3"
        strokeDasharray="100 0"
        strokeDashoffset="25"
        ref={val2D}
      />
      {label && (
        <g className="chartText">
          <text x="50%" y="50%" className="chartNumber">
            {usedSizeUnits.total}&nbsp;{usedSizeUnits.unit}
          </text>
          <text x="50%" y="50%" className="chartLabel">
            {chartLabel}
          </text>
        </g>
      )}
    </SizeChartBase>
  );
};

export default SizeChart;
