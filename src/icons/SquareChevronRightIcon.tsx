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

const SquareChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33334 2.70005C2.98356 2.70005 2.7 2.9836 2.7 3.33338V12.6667C2.7 13.0165 2.98356 13.3 3.33334 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33334ZM1.3 3.33338C1.3 2.2104 2.21036 1.30005 3.33334 1.30005H12.6667C13.7896 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7896 14.7 12.6667 14.7H3.33334C2.21036 14.7 1.3 13.7897 1.3 12.6667V3.33338ZM6.17169 4.83841C6.44506 4.56504 6.88828 4.56504 7.16164 4.83841L9.82831 7.50507C10.1017 7.77844 10.1017 8.22166 9.82831 8.49502L7.16164 11.1617C6.88828 11.4351 6.44506 11.4351 6.17169 11.1617C5.89833 10.8883 5.89833 10.4451 6.17169 10.1717L8.34339 8.00005L6.17169 5.82836C5.89833 5.55499 5.89833 5.11177 6.17169 4.83841Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareChevronRightIcon;
