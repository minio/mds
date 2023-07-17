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
import ApplicationLogo from "../../ApplicationLogo/ApplicationLogo";
import Tooltip from "../../Tooltip/Tooltip";
import MinIOTierIconXs from "../../Icons/MinIOTierIconXs";
import MenuSectionHeader from "../Vertical/MenuSectionHeader";
import MenuItem from "../Vertical/MenuItem";
import LogoutIcon from "../../Icons/LogoutIcon";
import AlertCloseIcon from "../../Icons/AlertCloseIcon";

const MobileMenuContainer = styled.div<MenuConstructProps>(({ theme, sx }) => {
  return {
    width: "100vw",
    height: "100vh",
    overflow: "auto",
    position: "fixed",
    top: 0,
    left: 0,
    background: get(
      theme,
      "menu.vertical.background",
      lightColors.menuBackground,
    ),
    transitionDuration: "0.3s",
    "& .menuContainer": {
      height: "inherit",
      position: "relative",
      display: "flex",
      flexDirection: "column",
      "& .collapseButton": {
        position: "absolute",
        right: 15,
        top: 15,
        "& > svg": {
          width: 20,
          height: 20,
          fill: get(
            theme,
            "menu.vertical.menuCollapseColor",
            lightColors.menuCollapseColor,
          ),
        },
      },
    },
    "& .menuLogoContainer": {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      margin: "20px 30px 0",
      "& svg": {
        width: 150,
      },
    },
    "& .collapsedMenuHeader": {
      display: "none",
    },
    "& .menuItems": {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
      height: "100%",
    },
    "& .menuHeaderContainer": {
      cursor: "pointer",
    },
    ...sx,
  };
});

const MobileMenuList: FC<MenuProps> = ({
  applicationLogo,
  options,
  displayGroupTitles,
  signOutAction,
  callPathAction,
  collapseAction,
  currentPath,
  endComponent,
}) => {
  let currTitle = "";

  return (
    <MobileMenuContainer>
      <Box className={"menuContainer"}>
        <Box className={"menuHeaderContainer"} onClick={collapseAction}>
          <Box className={"collapseButton"}>
            <AlertCloseIcon />
          </Box>
          <Box className={"menuLogoContainer"}>
            <ApplicationLogo inverse {...applicationLogo} />
          </Box>
          <Box className={"collapsedMenuHeader"}>
            <Tooltip tooltip={"Expand Menu"}>
              <span className={"collapsedIcon"}>
                <MinIOTierIconXs />
              </span>
            </Tooltip>
          </Box>
        </Box>
        <Box className={"menuItems"}>
          {options &&
            options.map((option) => {
              let extraItem = null;

              if (displayGroupTitles && option.group) {
                if (currTitle !== option.group) {
                  currTitle = option.group;

                  extraItem = <MenuSectionHeader label={option.group} />;
                }
              }

              const onClickAction = (path: string) => {
                if (option.onClick) {
                  option.onClick(path);
                  collapseAction();
                  return;
                }

                callPathAction(path);
                collapseAction();
              };

              return (
                <Fragment key={`menu-section-${option.group}-${option.id}`}>
                  {extraItem}
                  <MenuItem
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
                </Fragment>
              );
            })}
          {signOutAction && (
            <Box sx={{ marginTop: "auto" }}>
              {endComponent}
              <MenuSectionHeader label={""} />
              <MenuItem
                group={"common"}
                name={"Sign Out"}
                icon={<LogoutIcon />}
                onClick={signOutAction}
              />
            </Box>
          )}
        </Box>
      </Box>
    </MobileMenuContainer>
  );
};

export default MobileMenuList;
