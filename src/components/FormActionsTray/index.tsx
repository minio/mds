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

import React, { FC, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import { formActionsTrayMainStyles } from "./FormActionsTray.styles";
import { FormActionsTrayProps } from "./FormActionsTray.types";

const FormActionsTray: FC<FormActionsTrayProps> = ({
  sx,
  marginTop = 40,
  separator = false,
  children,
  ...restProps
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const formActionsTray = formActionsTrayMainStyles(
    theme,
    marginTop,
    separator,
  );

  return (
    <div css={[formActionsTray, overrideThemes]} {...restProps}>
      {children}
    </div>
  );
};

export default FormActionsTray;
