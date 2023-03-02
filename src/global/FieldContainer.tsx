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
import { breakPoints } from "./utils";
import styled, { CSSObject } from "styled-components";

export interface FieldContainerProps {
  children: React.ReactNode;
  className?: string;
  sx?: CSSObject;
}

const MainContainer = styled.div<
  HTMLAttributes<HTMLDivElement> & FieldContainerProps
>(({ sx }) => ({
  position: "relative",
  display: "flex",
  flexWrap: "wrap",
  width: "100%",
  flexBasis: "100%",
  [`@media (max-width: ${breakPoints.sm})`]: {
    flexFlow: "column",
  },
  "& .tooltipContainer": {
    marginLeft: 5,
    display: "flex",
    alignItems: "center",
    "& .min-icon": {
      width: 13,
    },
  },
  ...sx,
}));

export const FieldContainer: FC<FieldContainerProps> = ({
  children,
  sx,
  className,
}) => {
  return (
    <MainContainer sx={sx} className={className}>
      {children}
    </MainContainer>
  );
};

export default FieldContainer;
