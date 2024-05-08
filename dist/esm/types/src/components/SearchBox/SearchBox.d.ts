import React, { FC } from "react";
import { SearchBoxProps } from "./SearchBox.types";
declare const SearchBox: FC<
  SearchBoxProps & React.InputHTMLAttributes<HTMLInputElement>
>;
export default SearchBox;
