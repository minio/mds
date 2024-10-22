// This file is part of MinIO Design System
// Copyright (c) 2022 MinIO, Inc.
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

import React, { FC, SVGProps } from "react";
import { css, useTheme } from "@emotion/react";

import { LogoBaseProps } from "./LogoBase.types";

const LogoBase: FC<SVGProps<any> & LogoBaseProps> = ({
  inverse,
  ...restProps
}) => {
  const theme = useTheme();

  let mainColor = theme.colors["Color/Base/Black"];

  if (inverse) {
    mainColor = theme.colors["Color/Base/White"];
  }

  const logoStyles = css({
    "& .minioSection": {
      fill: theme.colors["Color/Brand/_minio/Raspberry"],
    },
    "& .minioApplicationName": {
      fill: mainColor,
    },
  });

  return <svg css={logoStyles} {...restProps} />;
};

export default LogoBase;
