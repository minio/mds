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

import React, { FC, useEffect, useState } from "react";
import { MenuProps } from "./Menu.types";
import { breakPoints } from "../../global/utils";
import HorizontalMenu from "./Horizontal/HorizontalMenu";
import VerticalMenu from "./Vertical/VerticalMenu";
import MobileMenu from "./MobileMenu/MobileMenu";
import debounce from "lodash/debounce";

const Menu: FC<MenuProps> = ({
  horizontal = false,
  mobileModeAuto = true,
  ...props
}) => {
  const [mobileMode, setMobileMode] = useState<boolean>(false);

  useEffect(() => {
    const scrollResize = debounce(() => {
      const windowWidth = document.documentElement.offsetWidth;

      setMobileMode(windowWidth <= breakPoints.md);
    }, 400);

    window.addEventListener("resize", scrollResize);
  });

  if (mobileMode && mobileModeAuto) {
    return <MobileMenu {...props} />;
  }

  if (horizontal) {
    return <HorizontalMenu {...props} />;
  }

  if (!!props.middleComponent) {
    console.warn(
      "Middle component is set, this cannot be rendered in Vertical Menu",
    );
  }

  return <VerticalMenu {...props} />;
};

export default Menu;
