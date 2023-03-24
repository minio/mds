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
import { MenuProps } from "./Menu.types";
import { breakPoints } from "../../global/utils";
import HorizontalMenu from "./Horizontal/HorizontalMenu";
import VerticalMenu from "./Vertical/VerticalMenu";
import MobileMenu from "./MobileMenu/MobileMenu";

const Menu: FC<MenuProps> = ({ horizontal = false, ...props }) => {
  const windowWidth = document.documentElement.offsetWidth;

  if (windowWidth <= breakPoints.md) {
    return <MobileMenu {...props} />;
  }

  if (horizontal) {
    return <HorizontalMenu {...props} />;
  }

  if (!!props.middleComponent) {
    console.warn(
      "Middle component set, this cannot be rendered in Vertical Menu"
    );
  }

  return <VerticalMenu {...props} />;
};

export default Menu;
