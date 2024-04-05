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

import React, { FC, HTMLAttributes } from "react";
import Grid from "../Grid/Grid";
import { SectionTitleProps } from "./SectionTitle.types";
import styled from "styled-components";
import get from "lodash/get";

const SectionParent = styled.div<
  HTMLAttributes<HTMLDivElement> & SectionTitleProps
>(({ theme, separator, sx }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-start",
  gap: "10px",
  ...sx,
}));

const SectionTitle: FC<SectionTitleProps & HTMLAttributes<HTMLDivElement>> = ({
  separator,
  icon,
  children,
  actions,
  sx,
  ...restProps
}) => {
  return (
    <SectionParent
      className={"section-title"}
      separator={separator}
      sx={sx}
      {...restProps}
    >
      <Grid
        item
        xs
        sx={{
          display: "flex",
          flexGrow: 1,
          justifyContent: "flex-start",
          alignItems: "center",
          "& svg": { marginRight: "10px" },
          "& h3": {
            fontWeight: "normal",
            fontSize: 20,
          },
        }}
      >
        {icon}
        <h3>{children}</h3>
      </Grid>
      {actions && (
        <Grid
          item
          xs
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            marginRight: "10px",
          }}
        >
          {" "}
          {actions}
        </Grid>
      )}
    </SectionParent>
  );
};

export default SectionTitle;
