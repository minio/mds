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
import { get } from "lodash";
import styled from "styled-components";

import { lightV2 } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import { FormActionsTrayProps } from "./FormActionsTray.types";

const FormActionsTrayMain = styled.div<FormActionsTrayProps>(
  ({ theme, sx, marginTop, separator }) => ({
    display: "flex",
    justifyContent: "flex-end",
    marginTop: marginTop,
    gap: 16,
    paddingTop: separator ? 24 : 0,
    borderTop: separator
      ? `1px solid ${get(theme, "borderColor", lightV2.colorBorderSubtle)}`
      : "0",
    ...overridePropsParse(sx, theme),
  }),
);

const FormActionsTray: FC<FormActionsTrayProps> = ({
  sx,
  marginTop = 40,
  separator,
  children,
  ...restProps
}) => {
  return (
    <FormActionsTrayMain
      sx={sx}
      marginTop={marginTop}
      separator={separator}
      {...restProps}
    >
      {children}
    </FormActionsTrayMain>
  );
};

export default FormActionsTray;
