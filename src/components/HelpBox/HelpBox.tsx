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

import React, { FC, Fragment, HTMLAttributes } from "react";

import Box from "../Box/Box";
import ScreenTitle from "../ScreenTitle/ScreenTitle";
import { HelpBoxProps } from "./HelpBox.types";

const HelpBox: FC<HelpBoxProps & HTMLAttributes<HTMLDivElement>> = ({
  icon,
  title,
  help,
  ...restProps
}) => {
  return (
    <Box className={"help-box"} withBorders sx={{ padding: 8 }} {...restProps}>
      <ScreenTitle
        icon={icon}
        title={title}
        subTitle={help}
        actions={<Fragment />}
      />
    </Box>
  );
};

export default HelpBox;
