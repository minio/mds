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

const SquareMenuIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM3.96672 5.33338C3.96672 4.94678 4.28012 4.63338 4.66672 4.63338H11.3334C11.72 4.63338 12.0334 4.94678 12.0334 5.33338C12.0334 5.71998 11.72 6.03338 11.3334 6.03338H4.66672C4.28012 6.03338 3.96672 5.71998 3.96672 5.33338ZM3.96672 8.00005C3.96672 7.61345 4.28012 7.30005 4.66672 7.30005H11.3334C11.72 7.30005 12.0334 7.61345 12.0334 8.00005C12.0334 8.38665 11.72 8.70005 11.3334 8.70005H4.66672C4.28012 8.70005 3.96672 8.38665 3.96672 8.00005ZM3.96672 10.6667C3.96672 10.2801 4.28012 9.96672 4.66672 9.96672H11.3334C11.72 9.96672 12.0334 10.2801 12.0334 10.6667C12.0334 11.0533 11.72 11.3667 11.3334 11.3667H4.66672C4.28012 11.3667 3.96672 11.0533 3.96672 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareMenuIcon;
