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
import { TableComponentsExtraProps } from "./Table.types";
import get from "lodash/get";
import { lightColors } from "../../global/themes";

const TableCellMain = styled.td<TableComponentsExtraProps>(({ theme, sx }) => ({
  fontFamily: "'Inter',sans-serif",
  fontWeight: 400,
  fontSize: 12,
  lineHeight: 1.43,
  display: "table-cell",
  verticalAlign: "inherit",
  borderBottom: `1px solid ${get(
    theme,
    "borderColor",
    lightColors.borderColor,
  )}`,
  textAlign: "left",
  padding: 16,
  color: get(theme, "secondaryText", lightColors.mainGrey),
  ...sx,
}));

const TableCell: FC<
  TableComponentsExtraProps & React.TdHTMLAttributes<HTMLTableDataCellElement>
> = ({ children, sx, ...restProps }) => {
  return (
    <TableCellMain sx={sx} {...restProps}>
      {children}
    </TableCellMain>
  );
};

export default TableCell;
