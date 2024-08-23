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
import { IBoxedIconProps } from "./BoxedIcon.types";

const IconContainer = styled.div<IBoxedIconProps>(({ theme, sx }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxSizing: "border-box",
  padding: 16,
  width: 60,
  height: 60,
  minHeight: 60,
  minWidth: 60,
  borderRadius: 12,
  backgroundColor: get(
    theme,
    "boxedIcon.bgColor",
    themeColors["Color/Neutral/Bg/colorBgSections"].lightMode,
  ),
  "& svg": {
    color: get(
      theme,
      "boxedIcon.iconColor",
      themeColors["Color/Neutral/Icon/colorIcon"].lightMode,
    ),
    width: 24,
    height: 24,
    minWidth: 24,
    minHeight: 24,
  },
  ...overridePropsParse(sx, theme),
}));

const BoxedIcon: FC<IBoxedIconProps> = ({ sx, children }) => {
  return <IconContainer sx={sx}>{children}</IconContainer>;
};

export default BoxedIcon;
