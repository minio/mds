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
import styled from "styled-components";

import { overridePropsParse } from "../../global/utils";
import Grid from "../Grid/Grid";
import { PageLayoutProps } from "./PageLayout.types";

const PageLayoutContainer = styled.div<
  HTMLAttributes<HTMLDivElement> & PageLayoutProps
>(({ theme, sx, variant }) => ({
  boxSizing: "content-box",
  maxWidth: variant === "constrained" ? 1220 : "initial",
  padding: 32,
  ...overridePropsParse(sx, theme),
}));

const PageLayout: FC<PageLayoutProps & HTMLAttributes<HTMLDivElement>> = ({
  sx,
  children,
  variant,
  className,
  ...props
}) => {
  return (
    <PageLayoutContainer
      className={"page-layout"}
      sx={sx}
      variant={variant}
      {...props}
    >
      <Grid container>
        <Grid item xs={12} className={className}>
          {children}
        </Grid>
      </Grid>
    </PageLayoutContainer>
  );
};

export default PageLayout;
