// This file is part of MinIO Design System
// Copyright (c) 2025 MinIO, Inc.
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
import { MainHeaderProps } from "../Menu.types";
import get from "lodash/get";
import { lightColors } from "../../../global/themes";

const Divider = styled.hr<MainHeaderProps>(({ theme }) => ({
  borderBottom: `${get(
    theme,
    "menu.vertical.sectionDividerColor",
    lightColors.menuColorDivider,
  )} 1px solid`,
  margin: "0 25px 0" as const,
}));

const MenuDivider: FC = () => {
  return <Divider />;
};

export default MenuDivider;
