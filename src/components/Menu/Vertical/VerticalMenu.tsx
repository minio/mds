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
import CollapseMenuIcon from "../../Icons/CollapseMenuIcon";
import MenuItem from "./MenuItem";
import MenuSectionHeader from "./MenuSectionHeader";
import LogoutIcon from "../../Icons/LogoutIcon";
import Tooltip from "../../Tooltip/Tooltip";
import MinIOTierIconXs from "../../Icons/MinIOTierIconXs";

const VerticalMenuDrawer = styled.div<MenuConstructProps>(({ theme, sx }) => {
  return {
    width: 250,
    maxWidth: 250,
    minWidth: 250,
    height: "100vh",
    overflow: "auto",
    position: "relative",
    scrollbarWidth: "none",
    msOverflowStyle: "none",
    "&::-webkit-scrollbar": {
      width: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      background: get(
        theme,
        "menu.vertical.sectionDividerColor",
        lightColors.menuColorDivider,
      ),
      borderRadius: 0,
    },

    "&::-webkit-scrollbar-track": {
      background: get(theme, "borderColor", lightColors.borderColor),
      boxShadow: `inset 0px 0px 0px 0px ${get(
        theme,
        "borderColor",
        lightColors.borderColor,
      )}`,
      borderRadius: 0,
    },

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
        right: 11,
        top: 10,
        "& > svg": {
          width: 12,
          height: 12,
          fill: get(
            theme,
            "menu.vertical.menuCollapseColor",
            lightColors.menuCollapseColor,
          ),
        },
      },
    },
    "& .menuLogoContainer": {
      position: "relative",
      margin: "20px 30px 0",
      paddingBottom: 20,
      borderBottom: `${get(
        theme,
        "menu.vertical.sectionDividerColor",
        lightColors.menuColorDivider,
      )} 1px solid`,
    },
    "& .collapsedMenuHeader": {
      display: "none",
    },
    "& .menuItems": {
      display: "flex",
      flexDirection: "column",
      flexGrow: 1,
    },
    "& .menuHeaderContainer": {
      cursor: "pointer",
    },
    "&.collapsed": {
      width: 80,
      minWidth: 80,
      boxSizing: "content-box",
      "& .collapseButton, & .menuLogoContainer": {
        display: "none",
      },
      "& .labelHeader": {
        display: "none",
      },
      "& .collapsedMenuHeader": {
        display: "flex",
        position: "relative",
        alignItems: "center",
        justifyContent: "center",
        width: 43,
        height: 43,
        minWidth: 43,
        minHeight: 43,
        border: `${get(
          theme,
          "menu.vertical.iconBorderColor",
          lightColors.menuIconBorder,
        )} 1px solid`,
        backgroundColor: get(
          theme,
          "menu.vertical.iconBGColor",
          lightColors.menuIconBG,
        ),
        borderRadius: "100%",
        margin: "25px 0",
        "&:hover": {
          borderColor: get(
            theme,
            "menu.vertical.hoverSelectedIconBorder",
            lightColors.white,
          ),
        },
        "& .collapsedIcon": {
          display: "inline-flex",
          color: get(
            theme,
            "menu.vertical.menuCollapseColor",
            lightColors.menuCollapseColor,
          ),
          "& svg": {
            width: 30,
            height: 30,
          },
        },
        "& svg": {
          width: 36,
          height: 36,
        },
      },
      "& .menuHeader": {
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
      },
      "& .labelContainer": {
        display: "none",
      },
      "& .subItemsBox": {
        padding: 0,
      },
      "& span": {
        display: "flex",
        padding: 0,
        justifyContent: "center",
      },
      "& .menuItemButton": {
        padding: 0,
        display: "flex",
        justifyContent: "center",
        position: "relative",
      },
      "& .menuHeaderContainer": {
        display: "flex",
        justifyContent: "center",
      },
      "& .statusArrow": {
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translateX(50%) translateY(20%)",
      },
    },
    ...sx,
  };
});

const VerticalMenu: FC<MenuProps> = ({
  applicationLogo,
  options,
  displayGroupTitles,
  signOutAction,
  callPathAction,
  isOpen,
  collapseAction,
  currentPath,
  endComponent,
  sx,
}) => {
  let currTitle = "";

  return (
    <VerticalMenuDrawer
      sx={sx}
      className={`menuBox ${!isOpen ? "collapsed" : ""}`}
    >
      <Box className={"menuContainer"}>
        <Box className={"menuHeaderContainer"} onClick={collapseAction}>
          <Box className={"collapseButton"}>
            <CollapseMenuIcon />
          </Box>
          <Box className={"menuLogoContainer"}>
            <ApplicationLogo inverse {...applicationLogo} />
          </Box>
          <Box className={"collapsedMenuHeader"}>
            <Tooltip tooltip={"Expand Menu"} placement={"right"}>
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
                  return;
                }

                callPathAction(path);
              };

              return (
                <Fragment
                  key={`menu-section-${option.group || "common"}-${
                    option.id || option.name
                  }`}
                >
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
                    visibleTooltip={!isOpen}
                  />
                </Fragment>
              );
            })}
          {signOutAction && (
            <Box sx={{ marginTop: "auto" }}>
              {endComponent}
              <MenuSectionHeader label={""} />
              <MenuItem
                id="sign-out"
                group={"common"}
                name={"Sign Out"}
                icon={<LogoutIcon />}
                onClick={signOutAction}
                visibleTooltip={!isOpen}
              />
            </Box>
          )}
        </Box>
      </Box>
    </VerticalMenuDrawer>
  );
};

export default VerticalMenu;
