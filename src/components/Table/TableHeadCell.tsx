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

const TableHeadCellMain = styled.th<TableComponentsExtraProps>(
  ({ theme, sx }) => ({
    fontFamily: "'Geist',sans-serif",
    fontSize: 12,
    lineHeight: 1.43,
    display: "table-cell",
    verticalAlign: "inherit",
    borderBottom: `2px solid ${get(
      theme,
      "borderColor",
      lightColors.borderColor,
    )}`,
    textAlign: "left",
    padding: 16,
    fontWeight: "bold",
    color: get(theme, "secondaryText", lightColors.mainGrey),
    ...overridePropsParse(sx, theme),
  }),
);

const TableHeadCell: FC<
  TableComponentsExtraProps & React.ThHTMLAttributes<HTMLTableHeaderCellElement>
> = ({ children, sx, ...restProps }) => {
  return (
    <TableHeadCellMain sx={sx} {...restProps}>
      {children}
    </TableHeadCellMain>
  );
};

export default TableHeadCell;
