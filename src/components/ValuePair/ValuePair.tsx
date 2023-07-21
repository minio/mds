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
import styled from "styled-components";
import { ValuePairCommon, ValuePairProps } from "./ValuePair.types";
import Box from "../Box/Box";
import get from "lodash/get";
import { breakPoints } from "../../global/utils";

const ValuePairBase = styled.div<ValuePairCommon>(
  ({ theme, sx, direction }) => ({
    display: "flex",
    flexDirection: direction,
    gap: direction === "row" ? 5 : 2,
    "& .label": {
      fontWeight: "bold",
    },
    "& .value": {
      fontWeight: "normal",
    },
    [`@media (max-width: ${get(breakPoints, "md", 0)}px)`]: {
      flexDirection: "column",
    },
    ...sx,
  }),
);

const ValuePair: FC<ValuePairProps> = ({
  value = null,
  label = "-",
  direction = "column",
  sx,
}) => {
  return (
    <ValuePairBase sx={sx} direction={direction}>
      <Box className={"label"}>{label}</Box>
      <Box className={"value"}>{value}</Box>
    </ValuePairBase>
  );
};

export default ValuePair;
