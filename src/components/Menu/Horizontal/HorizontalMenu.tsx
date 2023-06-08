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

import React, { FC, Fragment } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { MenuConstructProps, MenuProps } from "../Menu.types";
import { lightColors } from "../../../global/themes";
import Box from "../../Box/Box";
import LogoutIcon from "../../Icons/LogoutIcon";
import ApplicationLogo from "../../ApplicationLogo/ApplicationLogo";
import HorizontalMenuItem from "./HorizontalMenuItem";
import IconButton from "../../IconButton/IconButton";

const HorizontalMenuContainer = styled.div<MenuConstructProps>(
  ({ theme, sx }) => {
    return {
      "& .headerBar": {
        padding: 15,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 15,
        background: get(
          theme,
          "menu.horizontal.menuHeaderBackground",
          lightColors.menuBackground
        ),
        borderBottom: `${get(
          theme,
          "menu.horizontal.sectionDividerColor",
          lightColors.menuColorDivider
        )} 1px solid`,
        "& svg": {
          width: 200,
        },
      },
      "& .sections": {
        backgroundColor: get(
          theme,
          "menu.horizontal.barBackground",
          lightColors.mainGrey
        ),
        width: "100%",
        height: 45,
        display: "flex",
        overflowY: "hidden",
        overflowX: "auto",
        scrollbarWidth: "none",
        msOverflowStyle: "none",
        "&::-webkit-scrollbar": {
          width: 0,
          height: 0,
        },
      },
      ...sx,
    };
  }
);

const HorizontalMenu: FC<MenuProps> = ({
  applicationLogo,
  options,
  signOutAction,
  callPathAction,
  middleComponent,
  currentPath,
  sx,
}) => {
  return (
    <HorizontalMenuContainer sx={sx}>
      <Box className={"headerBar"}>
        <ApplicationLogo inverse {...applicationLogo} />
        {middleComponent}
        {signOutAction && (
          <IconButton id="sign-out" onClick={signOutAction}>
            <LogoutIcon />
          </IconButton>
        )}
      </Box>
      <Box className={"sections"}>
        {options.map((option) => {
          const onClickAction = (path: string) => {
            if (option.onClick) {
              option.onClick(path);
            }

            callPathAction(path);
          };

          return (
            <HorizontalMenuItem
              key={`menu-section-${option.group}-${option.id}`}
              onClick={onClickAction}
              icon={option.icon}
              name={option.name}
              group={option.group}
              id={option.id}
              path={option.path}
              currentPath={currentPath}
              badge={option.badge}
              children={option.children}
            />
          );
        })}
      </Box>
    </HorizontalMenuContainer>
  );
};

export default HorizontalMenu;
