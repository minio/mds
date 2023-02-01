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
import { ConstructProps, SectionTitleCommon } from "./SectionTitle.types";
import Grid from "../Grid/Grid";

const SectionTitleContainer = styled.div<ConstructProps>(
  ({ theme, separator, sx }) => ({
    display: "flex",
    borderBottom: separator
      ? `${get(theme, "borderColor", "#eaeaea")} 1px solid`
      : 0,
    alignItems: "center",
    justifyContent: "space-between",
    ...sx,
  })
);

const SectionTitle: FC<SectionTitleCommon> = ({
  separator,
  icon,
  children,
  actions,
  sx,
}) => {
  return (
    <SectionTitleContainer separator={separator} sx={sx}>
      <Grid item xs={12}>
        <h3
          style={{
            margin: 0,
            marginBottom: 10,
          }}
        >
          {icon && (
            <Grid
              container
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                borderSpacing: 1,
                "& svg, &.min-icon": {
                  marginRight: 10,
                },
              }}
            >
              <Grid
                item
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {icon}
              </Grid>
              <Grid item>{children}</Grid>
            </Grid>
          )}
          {!icon && children}
        </h3>
      </Grid>
      {actions && <Grid item> {actions}</Grid>}
    </SectionTitleContainer>
  );
};

export default SectionTitle;
