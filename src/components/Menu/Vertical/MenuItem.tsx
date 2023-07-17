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

import React, { FC, useState, useEffect } from "react";
import styled from "styled-components";
import get from "lodash/get";
import { MenuItemProps } from "../Menu.types";
import Box from "../../Box/Box";
import CircleIcon from "../../Icons/CircleIcon";
import CollapseCaret from "../../Icons/CollapseCaret";
import ExpandCaret from "../../Icons/ExpandCaret";
import Tooltip from "../../Tooltip/Tooltip";
import { lightColors } from "../../../global/themes";

const commonStyle = (theme: any) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  cursor: "pointer",
  border: "none",
  width: "100%",
  height: 44,
  padding: "0 25px",
  color: get(theme, "menu.vertical.textColor", lightColors.menuCommonColor),
  "& .iconContainer": {
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
  },
  "&.selected, &:hover": {
    color: get(theme, "menu.vertical.hoverSelectedColor", lightColors.white),
    background: get(
      theme,
      "menu.vertical.hoverSelectedBackground",
      lightColors.menuSelectedOption,
    ),
    "& .iconContainer": {
      border: `${get(
        theme,
        "menu.vertical.hoverSelectedIconBorder",
        lightColors.white,
      )} 1px solid`,
    },
  },
});

const MenuItemContainer = styled.div(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  userSelect: "none",
  cursor: "pointer",
  "& > span": {
    width: "100%",
  },
  "& > .subItemsBox": {
    paddingLeft: 20,
    width: "100%",
  },
  "& .statusArrow": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: get(
      theme,
      "menu.vertical.dropArrowBackground",
      lightColors.menuDropArrowBackground,
    ),
    width: 15,
    height: 15,
    minWidth: 15,
    minHeight: 15,
    borderRadius: 2,
  },
}));

const MenuItemButton = styled.button(({ theme }) => ({
  ...commonStyle(theme),
  "& .subOption": {
    padding: 0,
  },
}));

const AnchorItem = styled.a(({ theme }) => ({
  ...commonStyle(theme),
  textDecoration: "none",
}));

const OptionElement = styled.span(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: 22,
  "& .iconContainer": {
    position: "relative",
    borderRadius: "100%",
    width: 27,
    height: 27,
    minWidth: 27,
    minHeight: 27,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "& svg:not(.badgeIcon)": {
      width: 12,
      height: 12,
    },
    "& svg.badgeIcon": {
      width: 8,
      height: 8,
      fill: get(theme, "menu.vertical.notificationColor", lightColors.mainRed),
      position: "absolute",
      top: 4,
      right: 3,
    },
  },
  "& .labelContainer": {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
  },
}));

const MenuOptionElement = ({
  icon,
  name,
  badge,
}: {
  icon: React.ReactNode;
  name: React.ReactNode;
  badge: boolean;
}) => (
  <OptionElement className={"option"}>
    <span className={"iconContainer"}>
      {icon}
      {badge && <CircleIcon className={"badgeIcon"} />}
    </span>
    <span className={"labelContainer"}>{name}</span>
  </OptionElement>
);

const MenuItem: FC<MenuItemProps> = ({
  children,
  icon,
  id,
  name,
  path,
  onClick,
  badge,
  currentPath,
  visibleTooltip = false,
  isVisible = true,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    if (children && children.length > 0) {
      const selectedIndex = children.findIndex(
        (elem) => elem.path && currentPath?.startsWith(elem.path),
      );

      if (selectedIndex >= 0) {
        setOpen(true);
      }
    }
  }, [currentPath, children]);

  let selected = false;
  if (currentPath && path) {
    if (currentPath.startsWith(path)) {
      selected = true;
    }
  }

  // If Menu has children set but not sub items, then we hide it

  if ((children && children.length === 0) || !isVisible) {
    return null;
  }

  // Menu option with submenus
  if (children && children.length > 0) {
    const filterSubItems = children.filter((item) => item.isVisible !== false);

    if (filterSubItems.length === 0) {
      return null;
    }

    return (
      <MenuItemContainer>
        <Tooltip tooltip={visibleTooltip ? name : ""} placement={"right"}>
          <MenuItemButton
            id={id}
            type={"button"}
            onClick={() => {
              setOpen(!open);
            }}
            className={"menuItemButton"}
          >
            <MenuOptionElement icon={icon} name={name} badge={!!badge} />
            <Box className={"statusArrow"}>
              {open ? <CollapseCaret /> : <ExpandCaret />}
            </Box>
          </MenuItemButton>
        </Tooltip>
        {open && (
          <Box className={"subItemsBox"}>
            {children.map((child) => (
              <Tooltip
                tooltip={visibleTooltip ? child.name : ""}
                placement={"right"}
              >
                <MenuItem
                  onClick={onClick}
                  name={child.name}
                  badge={child.badge}
                  icon={child.icon}
                  id={child.id}
                  path={child.path}
                  group={child.group}
                  currentPath={currentPath}
                />
              </Tooltip>
            ))}
          </Box>
        )}
      </MenuItemContainer>
    );
  }

  // Path is a link, we display an anchor instead of a button, default target _blank
  if (
    path?.match(
      /^(https?:\/\/)?([\da-zа-я\.\-_]+)\.([a-zа-я\._]{2,6})([a-zа-я\d\.\-\?\/&=#%_]*)*/,
    )
  ) {
    return (
      <Tooltip tooltip={visibleTooltip ? name : ""} placement={"right"}>
        <AnchorItem
          className={"menuItemButton"}
          id={id}
          href={path}
          target={"_blank"}
        >
          <MenuOptionElement icon={icon} name={name} badge={!!badge} />
        </AnchorItem>
      </Tooltip>
    );
  }

  const executeOnClick = () => {
    if (onClick) {
      onClick(path || "");
    }
  };

  return (
    <Tooltip tooltip={visibleTooltip ? name : ""} placement={"right"}>
      <MenuItemButton
        className={`menuItemButton ${selected ? "selected" : ""}`}
        type={"button"}
        id={id}
        onClick={executeOnClick}
      >
        <MenuOptionElement icon={icon} name={name} badge={!!badge} />
      </MenuItemButton>
    </Tooltip>
  );
};

export default MenuItem;
