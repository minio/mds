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

import React, { FC, useState } from "react";
import styled, { CSSObject } from "styled-components";
import get from "lodash/get";
import { MenuItemProps } from "../Menu.types";
import Box from "../../Box/Box";
import CircleIcon from "../../Icons/CircleIcon";
import CollapseCaret from "../../Icons/CollapseCaret";
import ExpandCaret from "../../Icons/ExpandCaret";
import { createPortal } from "react-dom";
import SubItemsBox from "./SubItemsBox";
import { lightColors } from "../../../global/themes";

const commonStyle = (theme: any) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "transparent",
  cursor: "pointer",
  border: "none",
  height: 45,
  padding: "0 15px",
  whiteSpace: "nowrap",
  color: get(theme, "menu.horizontal.textColor", lightColors.optionTextColor),
  borderBottom: `transparent 2px solid`,
  "& .iconContainer": {
    border: `${get(
      theme,
      "menu.horizontal.iconBorderColor",
      lightColors.menuIconBorder,
    )} 1px solid`,
    backgroundColor: "transparent",
  },
  "&.selected, &:hover": {
    color: get(theme, "menu.horizontal.hoverSelectedColor", lightColors.white),
    borderBottom: `${get(
      theme,
      "menu.horizontal.hoverSelectedBackground",
      lightColors.mainBlue,
    )} 2px solid`,
    "& .iconContainer": {
      border: `${get(
        theme,
        "menu.horizontal.hoverSelectedIconBorder",
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
  position: "relative",
  "& .statusArrow": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: get(
      theme,
      "menu.horizontal.dropArrowBackground",
      lightColors.menuDropArrowBackground,
    ),
    width: 15,
    height: 15,
    minWidth: 15,
    minHeight: 15,
    borderRadius: 2,
    marginLeft: 5,
  },
}));

const MenuItemButton = styled.button(({ theme }) => ({
  ...(commonStyle(theme) as CSSObject),
  "& .subOption": {
    padding: 0,
  },
}));

const AnchorItem = styled.a(({ theme }) => ({
  ...(commonStyle(theme) as CSSObject),
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
      width: 14,
      height: 14,
    },
    "& svg.badgeIcon": {
      width: 8,
      height: 8,
      fill: get(
        theme,
        "menu.horizontal.notificationColor",
        lightColors.mainRed,
      ),
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

const HorizontalMenuItem: FC<MenuItemProps> = ({
  children,
  icon,
  id,
  name,
  path,
  onClick,
  badge,
  currentPath,
  isVisible = true,
}) => {
  const [open, setOpen] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  let selected = false;
  if (currentPath && path) {
    if (currentPath.startsWith(path)) {
      selected = true;
    }
  }

  const closeMenu = () => {
    setOpen(false);
    setAnchorEl(null);
  };

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
        <MenuItemButton
          id={id}
          type={"button"}
          onClick={(e) => {
            e.stopPropagation();

            setOpen(true);
            setAnchorEl(e.currentTarget);
          }}
          className={`menuItemButton ${open ? "selected" : ""}`}
        >
          <MenuOptionElement icon={icon} name={name} badge={!!badge} />
          <Box className={"statusArrow"}>
            {open ? <CollapseCaret /> : <ExpandCaret />}
          </Box>
        </MenuItemButton>
        {open &&
          createPortal(
            <SubItemsBox
              anchorEl={anchorEl}
              hideTriggerAction={closeMenu}
              open={open}
            >
              {children.map((child) => (
                <HorizontalMenuItem
                  key={`sub-menu-opt-${name}-${child.id || child.name}`}
                  onClick={onClick}
                  name={child.name}
                  badge={child.badge}
                  icon={child.icon}
                  id={child.id}
                  path={child.path}
                  group={child.group}
                  currentPath={currentPath}
                />
              ))}
            </SubItemsBox>,
            document.body,
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
      <AnchorItem
        className={"menuItemButton"}
        id={id}
        href={path}
        target={"_blank"}
      >
        <MenuOptionElement icon={icon} name={name} badge={!!badge} />
      </AnchorItem>
    );
  }

  const executeOnClick = () => {
    if (onClick) {
      onClick(path || "");
    }
  };

  return (
    <MenuItemButton
      className={`menuItemButton ${selected ? "selected" : ""}`}
      type={"button"}
      id={id}
      onClick={executeOnClick}
    >
      <MenuOptionElement icon={icon} name={name} badge={!!badge} />
    </MenuItemButton>
  );
};

export default HorizontalMenuItem;
