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

import React, { FC, Fragment, useState } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { MenuConstructProps, MenuProps } from "../Menu.types";
import Box from "../../Box/Box";
import ApplicationLogo from "../../ApplicationLogo/ApplicationLogo";
import CollapseIcon from "../../Icons/CollapseIcon";
import IconButton from "../../IconButton/IconButton";
import MobileMenuList from "./MobileMenuList";
import { createPortal } from "react-dom";
import { lightColors } from "../../../global/themes";

const MobileMenuContainer = styled.div<MenuConstructProps>(({ theme, sx }) => {
  return {
    "& .headerBar": {
      padding: 15,
      display: "flex",
      justifyContent: "space-between",
      background: get(
        theme,
        "menu.horizontal.menuHeaderBackground",
        lightColors.menuBackground,
      ),
      alignItems: "center",
      "& svg": {
        width: 150,
      },
    },
    "& .sections": {
      backgroundColor: "#ff0",
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
});

const MobileMenu: FC<MenuProps> = ({
  applicationLogo,
  options,
  displayGroupTitles,
  signOutAction,
  callPathAction,
  horizontal,
  currentPath,
  endComponent,
  sx,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Fragment>
      <MobileMenuContainer className={"menuBox"} sx={sx}>
        <Box className={"headerBar"}>
          <ApplicationLogo inverse {...applicationLogo} />
          <IconButton
            id={"menu-open"}
            onClick={() => {
              setOpen(true);
            }}
          >
            <CollapseIcon />
          </IconButton>
        </Box>
        {horizontal && <Box>middleComponent</Box>}
        <Box className={"menuOpen"}></Box>
      </MobileMenuContainer>
      {open &&
        createPortal(
          <MobileMenuList
            options={options}
            applicationLogo={applicationLogo}
            callPathAction={callPathAction}
            isOpen={open}
            collapseAction={() => {
              setOpen(false);
            }}
            signOutAction={signOutAction}
            displayGroupTitles={displayGroupTitles}
            currentPath={currentPath}
            endComponent={endComponent}
          />,
          document.body,
        )}
    </Fragment>
  );
};

export default MobileMenu;
