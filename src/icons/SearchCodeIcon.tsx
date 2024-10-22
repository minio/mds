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

import * as React from "react";
import { SVGProps } from "react";

const SearchCodeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.33338 2.70005C4.77446 2.70005 2.70005 4.77446 2.70005 7.33338C2.70005 9.8923 4.77446 11.9667 7.33338 11.9667C9.8923 11.9667 11.9667 9.8923 11.9667 7.33338C11.9667 4.77446 9.8923 2.70005 7.33338 2.70005ZM1.30005 7.33338C1.30005 4.00126 4.00126 1.30005 7.33338 1.30005C10.6655 1.30005 13.3667 4.00126 13.3667 7.33338C13.3667 8.74722 12.8804 10.0475 12.0659 11.076L14.495 13.5051C14.7684 13.7784 14.7684 14.2217 14.495 14.495C14.2217 14.7684 13.7784 14.7684 13.5051 14.495L11.076 12.0659C10.0475 12.8804 8.74722 13.3667 7.33338 13.3667C4.00126 13.3667 1.30005 10.6655 1.30005 7.33338ZM6.49502 5.50507C6.76839 5.77844 6.76839 6.22166 6.49502 6.49502L5.65667 7.33338L6.49502 8.17174C6.76839 8.44511 6.76839 8.88832 6.49502 9.16169C6.22166 9.43506 5.77844 9.43506 5.50507 9.16169L4.17174 7.82836C3.89837 7.55499 3.89837 7.11177 4.17174 6.83841L5.50507 5.50507C5.77844 5.23171 6.22166 5.23171 6.49502 5.50507ZM8.17174 5.50507C8.44511 5.23171 8.88832 5.23171 9.16169 5.50507L10.495 6.83841C10.7684 7.11177 10.7684 7.55499 10.495 7.82836L9.16169 9.16169C8.88832 9.43506 8.44511 9.43506 8.17174 9.16169C7.89837 8.88832 7.89837 8.44511 8.17174 8.17174L9.0101 7.33338L8.17174 6.49502C7.89837 6.22166 7.89837 5.77844 8.17174 5.50507Z"
      fill="currentColor"
    />
  </svg>
);
export default SearchCodeIcon;
