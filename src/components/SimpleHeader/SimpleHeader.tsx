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
import {
  SimpleHeaderContainerProps,
  SimpleHeaderProps,
} from "./SimpleHeader.types";
import get from "lodash/get";

const ParentContainer = styled.div<
  HTMLAttributes<HTMLDivElement> & SimpleHeaderContainerProps
>(({ theme, sx }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: 15,
  borderBottom: `1px solid ${get(theme, `borderColor`, "#E5E5E5")}`,
  fontWeight: "bold",
  fontSize: 18,
  color: get(theme, `fontColor`, "#000"),
  margin: "20px 22px",
  ...sx,
}));

const SimpleHeader: FC<SimpleHeaderProps> = ({ label, icon, sx }) => {
  return (
    <ParentContainer className={"simpleHeader-container"} sx={sx}>
      <span>{label}</span>
      {icon}
    </ParentContainer>
  );
};

export default SimpleHeader;
