// This file is part of MinIO Design System
// Copyright (c) 2024 MinIO, Inc.
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

import React, { FC, useMemo } from "react";
import { css, useTheme } from "@emotion/react";

import { overridePropsParse } from "../../global/utils";
import SearchIcon from "../../icons/SearchIcon";
import {
  searchBoxBaseStyles,
  searchBoxContainerStyles,
} from "./SearchBox.styles";
import { SearchBoxProps } from "./SearchBox.types";

const SearchBox: FC<
  SearchBoxProps & React.InputHTMLAttributes<HTMLInputElement>
> = ({ id, icon, sx, placeholder, ...restProps }) => {
  const theme = useTheme();

  const overrideThemes = useMemo(() => {
    if (sx) {
      return css({ ...overridePropsParse(sx, theme) });
    }

    return {};
  }, [sx, theme]);

  const searchBoxContainer = searchBoxContainerStyles(theme);
  const searchBoxBase = searchBoxBaseStyles(theme);

  return (
    <div css={[searchBoxContainer]}>
      {!icon ? <SearchIcon /> : icon}
      <input
        css={[searchBoxBase, overrideThemes]}
        id={id}
        placeholder={placeholder}
        {...restProps}
      />
    </div>
  );
};

export default SearchBox;
