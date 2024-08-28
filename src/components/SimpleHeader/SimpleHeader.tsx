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

import { lightV2 } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import {
  SimpleHeaderContainerProps,
  SimpleHeaderProps,
} from "./SimpleHeader.types";

const ParentContainer = styled.div<
  HTMLAttributes<HTMLDivElement> & SimpleHeaderContainerProps
>(({ theme, sx }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  paddingBottom: 15,
  color: get(theme, `fontColor`, lightV2.fontColor),
  margin: "20px 22px",
  fontSize: 14,
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "18px",
  letterSpacing: "0.16px",
  ...overridePropsParse(sx, theme),
}));

const SimpleHeader: FC<SimpleHeaderProps & HTMLAttributes<HTMLDivElement>> = ({
  label,
  icon,
  sx,
  ...restProps
}) => {
  return (
    <ParentContainer className={"simple-header"} sx={sx} {...restProps}>
      <span>{label}</span>
      {icon}
    </ParentContainer>
  );
};

export default SimpleHeader;
