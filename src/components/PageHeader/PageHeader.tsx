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
import get from "lodash/get";
import styled from "styled-components";

import { overridePropsParse } from "../../global/utils";
import Box from "../Box/Box";
import { PageHeaderConstruct, PageHeaderProps } from "./PageHeader.types";

const ParentContainer = styled.div<
  PageHeaderConstruct & HTMLAttributes<HTMLDivElement>
>(({ theme, sx }) => ({
  display: "flex",
  flexDirection: "row",
  width: "100%",
  left: 0,
  justifyContent: "space-between",
  paddingLeft: 32,
  paddingRight: 32,
  borderBottom: 0,
  paddingTop: 24,
  paddingBottom: 0,
  marginBottom: 0,
  alignItems: "start",
  "& .page-header-label": {
    color: "#21242B",
    fontSize: 24,
    fontStyle: " normal",
    fontWeight: "bold",
    lineHeight: " 28px",
  },
  "& .page-header-label,& .page-header-actions": {
    flexGrow: 1,
  },
  ...overridePropsParse(sx, theme),
}));

const LabelContainer = styled.div<HTMLAttributes<HTMLDivElement>>(
  ({ theme }) => ({
    color: get(theme, `pageHeader.color`, "#000"),
    fontSize: 20,
    paddingLeft: 0,
    display: "flex",
    flexGrow: 1,
    marginRight: 0,
    "& a": {
      color: get(theme, `pageHeader.color`, "#000"),
      textDecoration: "none",
    },
  }),
);

const MiddleContainer = styled.div<HTMLAttributes<HTMLDivElement>>(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexGrow: 1,
  margin: "0 10px",
}));

const ActionsContainer = styled.div<HTMLAttributes<HTMLDivElement>>(() => ({
  display: "flex",
  justifyContent: "flex-end",
  paddingRight: 0,
  flexGrow: 1,
  marginLeft: 10,
  gap: 8,
}));

const PageHeader: FC<PageHeaderProps & HTMLAttributes<HTMLDivElement>> = ({
  label,
  middleComponent,
  actions,
  sx,
  ...restProps
}) => {
  return (
    <ParentContainer {...restProps} sx={sx} className={"page-header"}>
      <Box className={"page-header-label"}>
        <LabelContainer>{label}</LabelContainer>
      </Box>
      {middleComponent && (
        <Box className={"page-header-middle"}>
          <MiddleContainer>{middleComponent}</MiddleContainer>
        </Box>
      )}
      <Box className={"page-header-actions"}>
        <ActionsContainer>{actions}</ActionsContainer>
      </Box>
    </ParentContainer>
  );
};

export default PageHeader;
