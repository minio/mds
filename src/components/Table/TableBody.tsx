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
import styled from "styled-components";

import { overridePropsParse } from "../../global/utils";
import { TableComponentsExtraProps } from "./Table.types";

const TableBodyMain = styled.tbody<TableComponentsExtraProps>(
  ({ theme, sx }) => ({
    display: "table-row-group",
    width: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    ...overridePropsParse(sx, theme),
  }),
);

const TableBody: FC<
  TableComponentsExtraProps & React.HTMLAttributes<HTMLTableSectionElement>
> = ({ children, sx, ...restProps }) => {
  return (
    <TableBodyMain sx={sx} {...restProps}>
      {children}
    </TableBodyMain>
  );
};

export default TableBody;
