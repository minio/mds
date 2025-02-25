import React, { FC } from "react";
import { TableComponentsExtraProps } from "./Table.types";
declare const Table: FC<
  TableComponentsExtraProps & React.TableHTMLAttributes<HTMLTableElement>
>;
export default Table;
