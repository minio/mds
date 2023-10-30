import React, { FC } from "react";
import { TableComponentsExtraProps } from "./Table.types";
declare const TableHeadCell: FC<
  TableComponentsExtraProps &
    React.TableHTMLAttributes<HTMLTableHeaderCellElement>
>;
export default TableHeadCell;
