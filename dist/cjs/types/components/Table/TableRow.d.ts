import React, { FC } from "react";
import { TableComponentsExtraProps } from "./Table.types";
declare const TableRow: FC<
  TableComponentsExtraProps & React.TableHTMLAttributes<HTMLTableRowElement>
>;
export default TableRow;
