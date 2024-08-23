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

import { lightColors } from "../../global/themes";
import { overridePropsParse } from "../../global/utils";
import { TableComponentsExtraProps } from "./Table.types";

const TableRowMain = styled.tr<TableComponentsExtraProps>(({ theme, sx }) => ({
  color: "inherit",
  display: "table-row",
  verticalAlign: "middle",
  outline: 0,
  cursor: "pointer",
  borderLeft: 0,
  borderRight: 0,
  backgroundColor: get(theme, "bgColor", lightColors.white),
  ...overridePropsParse(sx, theme),
}));

const TableRow: FC<
  TableComponentsExtraProps & React.HTMLAttributes<HTMLTableRowElement>
> = ({ children, sx, ...restProps }) => {
  return (
    <TableRowMain sx={sx} {...restProps}>
      {children}
    </TableRowMain>
  );
};

export default TableRow;
