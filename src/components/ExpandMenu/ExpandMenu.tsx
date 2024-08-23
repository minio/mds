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

import React, { FC, Fragment, useState } from "react";

import Button from "../Button/Button";
import ChevronDownIcon from "../Icons/NewDesignIcons/ChevronDownIcon";
import ChevronUpIcon from "../Icons/NewDesignIcons/ChevronUpIcon";
import ExpandDropdown from "./ExpandDropdown";
import { ExpandMenuProps } from "./ExpandMenu.types";

const ExpandMenu: FC<
  ExpandMenuProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  id,
  icon,
  iconLocation,
  dropMenuPosition,
  variant,
  name,
  sx,
  label,
  children,
  disabled,
  dropArrow = true,
  compact = false,
  forInputOptions = false,
  inButtonGroup,
}) => {
  const [expandedMenu, setExpandedMenu] = useState<boolean>(false);
  const [anchorEl, setAnchorEl] = React.useState<
    (EventTarget & HTMLButtonElement) | null
  >(null);

  let secondary = null;

  if (dropArrow) {
    secondary = expandedMenu ? (
      <ChevronUpIcon style={{ fill: "none" }} />
    ) : (
      <ChevronDownIcon style={{ fill: "none" }} />
    );
  }

  return (
    <Fragment>
      <Button
        id={id}
        icon={icon}
        iconLocation={iconLocation}
        secondaryIcon={secondary}
        variant={variant}
        name={name}
        sx={sx}
        label={label}
        disabled={disabled}
        compact={compact}
        onClick={(e) => {
          setExpandedMenu(!expandedMenu);
          setAnchorEl(e.currentTarget);
        }}
        inButtonGroup={inButtonGroup}
      />

      {expandedMenu && (
        <ExpandDropdown
          open={expandedMenu}
          hideTriggerAction={() => {
            setExpandedMenu(false);
          }}
          anchorOrigin={dropMenuPosition}
          anchorEl={anchorEl}
          forInputOptions={forInputOptions}
        >
          {children}
        </ExpandDropdown>
      )}
    </Fragment>
  );
};

export default ExpandMenu;
