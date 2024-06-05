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

const SquareArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM7.50507 4.83841C7.77844 4.56504 8.22166 4.56504 8.49502 4.83841L11.1617 7.50507C11.4351 7.77844 11.4351 8.22166 11.1617 8.49502L8.49502 11.1617C8.22166 11.4351 7.77844 11.4351 7.50507 11.1617C7.23171 10.8883 7.23171 10.4451 7.50507 10.1717L8.97677 8.70005H5.33338C4.94678 8.70005 4.63338 8.38665 4.63338 8.00005C4.63338 7.61345 4.94678 7.30005 5.33338 7.30005H8.97677L7.50507 5.82836C7.23171 5.55499 7.23171 5.11177 7.50507 4.83841Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareArrowRightIcon;
