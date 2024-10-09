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

import React, { FC, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import Box from "../Box";
import SectionTitle from "../SectionTitle";
import { formLayoutContainerStyles } from "./FormLayout.styles";
import { FormLayoutProps } from "./FormLayout.types";

const FormLayout: FC<FormLayoutProps> = ({
  children,
  title = "",
  helpBox,
  icon,
  sx,
  containerPadding = true,
  withBorders = true,
}) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const formLayoutContainer = formLayoutContainerStyles(
    theme,
    containerPadding,
    !!helpBox,
    withBorders,
  );

  return (
    <div css={[formLayoutContainer, overrideThemes]}>
      <Box>
        {title !== "" && (
          <SectionTitle icon={icon} sx={{ marginBottom: 16 }}>
            {title}
          </SectionTitle>
        )}
        {children}
      </Box>
      {helpBox}
    </div>
  );
};

export default FormLayout;
