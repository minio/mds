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

const SquareMIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM5.0655 4.68667C5.32708 4.57832 5.62816 4.63821 5.82836 4.83841L8.00005 7.0101L10.1717 4.83841C10.3719 4.63821 10.673 4.57832 10.9346 4.68667C11.1962 4.79501 11.3667 5.05026 11.3667 5.33338V10.6667C11.3667 11.0533 11.0533 11.3667 10.6667 11.3667C10.2801 11.3667 9.96672 11.0533 9.96672 10.6667V7.02333L8.49502 8.49502C8.22166 8.76839 7.77844 8.76839 7.50507 8.49502L6.03338 7.02333V10.6667C6.03338 11.0533 5.71998 11.3667 5.33338 11.3667C4.94678 11.3667 4.63338 11.0533 4.63338 10.6667V5.33338C4.63338 5.05026 4.80393 4.79501 5.0655 4.68667Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareMIcon;
