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

import React, { FC } from "react";
import get from "lodash/get";
import styled from "styled-components";

import { themeColors } from "../../global/themeColors";
import { overridePropsParse } from "../../global/utils";
import { PillProps } from "./Pill.types";

const PillBase = styled.span<PillProps>(({ theme, sx, type }) => ({
  backgroundColor: get(
    theme,
    `pill.${type}.bgColor`,
    themeColors["Color/Brand/Neutral/colorPrimaryBg"].lightMode,
  ),
  border: `1px solid ${get(theme, `pill.${type}.borderColor`, themeColors["Color/Brand/Neutral/colorPrimary"].lightMode)}`,
  padding: "2px 4px",
  display: "inline-block",
  color: get(
    theme,
    `pill.${type}.labelColor`,
    themeColors["Color/Brand/Neutral/colorPrimary"].lightMode,
  ),
  fontSize: 12,
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "16px",
  letterSpacing: "0.5px",
  borderRadius: 4,
  whiteSpace: "nowrap",
  userSelect: "none",
  ...overridePropsParse(sx, theme),
}));

const Pill: FC<PillProps & React.HTMLAttributes<HTMLSpanElement>> = ({
  sx,
  type = "default",
  children,
  ...restProps
}) => {
  return (
    <PillBase sx={sx} type={type} {...restProps}>
      {children}
    </PillBase>
  );
};

export default Pill;
