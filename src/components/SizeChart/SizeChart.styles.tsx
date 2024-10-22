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

import { css, Theme } from "@emotion/react";

export const sizeChartBaseStyles = (
  theme: Theme,
  usedBytes: number,
  totalBytes: number,
  chartLabel?: string,
) => {
  const percUsed = (usedBytes * 100) / totalBytes;

  let color = theme.colors["Color/Brand/Primary/colorPrimaryActive"];

  if (percUsed >= 90) {
    color = theme.colors["Color/Brand/Error/colorPrimary"];
  } else if (percUsed >= 80) {
    color = theme.colors["Color/Brand/Warning/colorPrimary"];
  }

  return css({
    "& .usedSpace": {
      stroke: color,
    },
    "& .availableSpace": {
      stroke: theme.colors["Color/Neutral/Bg/colorBgDisabled"],
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
      fill: theme.colors["Color/Neutral/Text/colorTextLabel"],
    },
    "& .chartLabel": {
      fontSize: "0.2em",
      textAnchor: "middle",
      transform: "translateY(0.7em)",
      whiteSpace: "normal",
      fontWeight: "bold",
      fill: theme.colors["Color/Neutral/Text/colorTextSecondary"],
    },
  });
};
