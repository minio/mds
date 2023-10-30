import React, { FC } from "react";
import { TableComponentsExtraProps } from "./Table.types";
declare const TableCell: FC<
  TableComponentsExtraProps &
    React.TableHTMLAttributes<HTMLTableDataCellElement>
>;
export default TableCell;
