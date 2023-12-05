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

import React, { cloneElement, FC } from "react";
import get from "lodash/get";
import styled from "styled-components";
import {
  CustomMainProps,
  MainContainerProps,
  ParentBoxProps,
} from "./MainContainer.types";
import { breakPoints } from "../../global/utils";

const CustomMain = styled.main<CustomMainProps>(({ theme, horizontal }) => {
  return {
    flexGrow: 1,
    height: !!horizontal ? "initial" : "100vh",
    overflow: "auto",
    position: "relative",
    backgroundColor: get(theme, "bgColor", "#fff"),
    color: get(theme, "fontColor", "#000"),
  };
});

const ParentBox = styled.div<ParentBoxProps>(
  ({ horizontal, mobileModeAuto, sx }) => {
    let breakPoint = {};

    if (mobileModeAuto) {
      breakPoint = {
        [`@media (max-width: ${get(breakPoints, "md", 0)}px)`]: {
          flexDirection: "column",
        },
      };
    }

    return {
      display: "flex",
      flexDirection: !!horizontal ? "column" : "row",
      ...breakPoint,
      ...sx,
    };
  },
);

const MainContainer: FC<MainContainerProps> = ({
  children,
  menu,
  horizontal,
  mobileModeAuto = true,
  sx,
}) => {
  return (
    <ParentBox
      className={"parentBox"}
      horizontal={horizontal}
      mobileModeAuto={mobileModeAuto}
      sx={sx}
    >
      {menu && cloneElement(menu, { mobileModeAuto })}
      <CustomMain horizontal={horizontal} className={"mainPage"}>
        {children}
      </CustomMain>
    </ParentBox>
  );
};

export default MainContainer;
