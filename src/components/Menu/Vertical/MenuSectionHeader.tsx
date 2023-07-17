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
import get from "lodash/get";
import { MainHeaderProps, SectionHeaderProps } from "../Menu.types";
import { lightColors } from "../../../global/themes";

const Header = styled.div<MainHeaderProps>(({ theme }) => ({
  borderBottom: `${get(
    theme,
    "menu.vertical.sectionDividerColor",
    lightColors.menuColorDivider,
  )} 1px solid`,
  margin: "30px 25px 0",
  paddingBottom: 5,
  userSelect: "none",
  "& > .labelHeader": {
    fontSize: 14,
    color: get(theme, "menu.vertical.sectionLabelColor", lightColors.white),
    paddingBottom: 6,
    display: "block",
  },
}));

const MenuSectionHeader: FC<SectionHeaderProps> = ({ label, divider }) => {
  return (
    <Header className={"menuHeader"} divider={divider}>
      <span className={"labelHeader"}>{label}</span>
    </Header>
  );
};

export default MenuSectionHeader;
