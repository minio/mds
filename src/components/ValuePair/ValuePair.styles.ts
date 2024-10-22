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

import { Theme } from "@emotion/react";

import { breakPoints } from "../../global/utils";
import { ValuePairDirection } from "./ValuePair.types";

export const valuePairBaseStyles = (
  theme: Theme,
  direction: ValuePairDirection,
) => ({
  display: "flex",
  flexDirection: direction,
  gap: direction === "row" ? 5 : 2,
  "& .label": {
    fontWeight: 600,
    fontSize: 14,
    color: theme.colors["Color/Neutral/Text/colorTextLabel"],
  },
  "& .value": {
    fontWeight: "normal",
    color: theme.colors["Color/Neutral/Text/colorTextHeading"],
    fontSize: 14,
    "& a": {
      color: theme.colors["Color/Neutral/Text/colorTextHeading"],
    },
  },
  [`@media (max-width: ${breakPoints.md}px)`]: {
    flexDirection: "column",
  },
});
