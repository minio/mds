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
import get from "lodash/get";
import styled from "styled-components";

import { lightV2 } from "../../global/themes";
import { breakPoints, overridePropsParse } from "../../global/utils";
import Box from "../Box/Box";
import SectionTitle from "../SectionTitle/SectionTitle";
import { FormLayoutProps } from "./FormLayout.types";

const FormLayoutContainer = styled.div<FormLayoutProps>(
  ({ theme, sx, containerPadding, helpBox, withBorders }) => {
    let extraBorders = {};

    if (withBorders) {
      extraBorders = {
        border: `${get(theme, "box.border", lightV2.disabledGrey)} 1px solid`,
        borderRadius: 16,
        boxShadow: get(theme, "box.shadow", "none"),
        backgroundColor: get(theme, "box.backgroundColor", lightV2.white),
      };
    }

    return {
      ...extraBorders,
      display: "grid",
      padding: containerPadding ? 25 : 0,
      gap: 25,
      gridTemplateColumns: "1fr",
      "& .inputItem:not(:last-of-type)": {
        marginBottom: 20,
      },
      [`@media (min-width: ${get(breakPoints, "md", 0)}px)`]: {
        gridTemplateColumns: helpBox ? "2fr 1.2fr" : "1fr",
      },
      ...overridePropsParse(sx, theme),
    };
  },
);

const FormLayout: FC<FormLayoutProps> = ({
  children,
  title = "",
  helpBox,
  icon,
  sx,
  containerPadding = true,
  withBorders = true,
}) => {
  return (
    <FormLayoutContainer
      sx={sx}
      containerPadding={containerPadding}
      withBorders={withBorders}
    >
      <Box>
        {title !== "" && (
          <SectionTitle icon={icon} sx={{ marginBottom: 16 }}>
            {title}
          </SectionTitle>
        )}
        {children}
      </Box>
      {helpBox}
    </FormLayoutContainer>
  );
};

export default FormLayout;
