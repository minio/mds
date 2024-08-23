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

import React, { FC } from "react";
import styled from "styled-components";

import { expandMenuOptionStyles } from "../../utils/GlobalUtils";
import {
  ExpandMenuConstructProps,
  ExpandMenuOptionProps,
} from "./ExpandMenu.types";

const ExpandMenuOptionBase = styled.button<
  ExpandMenuOptionProps & ExpandMenuConstructProps
>(({ theme, inButtonGroup = false, icon, parentChildren }) =>
  expandMenuOptionStyles(theme, inButtonGroup, icon, parentChildren),
);

const ExpandMenuOption: FC<
  ExpandMenuOptionProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({
  children,
  icon,
  sx,
  variant = "regular",
  id,
  inButtonGroup = false,
  ...restProps
}) => {
  return (
    <ExpandMenuOptionBase
      id={id}
      sx={sx}
      variant={variant}
      className={`option-element ${variant}`}
      inButtonGroup={inButtonGroup}
      icon={icon}
      parentChildren={children}
      {...restProps}
    >
      {icon && <span className={"menu-icon"}>{icon}</span>}
      <span className={"menu-option"}>{children}</span>
    </ExpandMenuOptionBase>
  );
};

export default ExpandMenuOption;
