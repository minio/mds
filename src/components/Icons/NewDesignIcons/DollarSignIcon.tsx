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

const DollarSignIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00005 0.633331C8.38665 0.633331 8.70005 0.946732 8.70005 1.33333V2.63333H11.3334C11.72 2.63333 12.0334 2.94673 12.0334 3.33333C12.0334 3.71993 11.72 4.03333 11.3334 4.03333H8.70005V7.3H9.66672C10.4712 7.3 11.2427 7.61958 11.8116 8.18844C12.3805 8.7573 12.7 9.52884 12.7 10.3333C12.7 11.1378 12.3805 11.9094 11.8116 12.4782C11.2427 13.0471 10.4712 13.3667 9.66672 13.3667H8.70005V14.6667C8.70005 15.0533 8.38665 15.3667 8.00005 15.3667C7.61345 15.3667 7.30005 15.0533 7.30005 14.6667V13.3667H4.00005C3.61345 13.3667 3.30005 13.0533 3.30005 12.6667C3.30005 12.2801 3.61345 11.9667 4.00005 11.9667H7.30005V8.7H6.33338C5.52889 8.7 4.75735 8.38041 4.18849 7.81155C3.61963 7.24269 3.30005 6.47115 3.30005 5.66666C3.30005 4.86217 3.61963 4.09063 4.18849 3.52177C4.75735 2.95291 5.52889 2.63333 6.33338 2.63333H7.30005V1.33333C7.30005 0.946732 7.61345 0.633331 8.00005 0.633331ZM7.30005 4.03333H6.33338C5.9002 4.03333 5.48475 4.20541 5.17844 4.51172C4.87213 4.81803 4.70005 5.23348 4.70005 5.66666C4.70005 6.09985 4.87213 6.5153 5.17844 6.82161C5.48475 7.12791 5.9002 7.3 6.33338 7.3H7.30005V4.03333ZM8.70005 8.7V11.9667H9.66672C10.0999 11.9667 10.5153 11.7946 10.8217 11.4883C11.128 11.182 11.3 10.7665 11.3 10.3333C11.3 9.90014 11.128 9.4847 10.8217 9.17839C10.5153 8.87208 10.0999 8.7 9.66672 8.7H8.70005Z"
      fill="currentColor"
    />
  </svg>
);
export default DollarSignIcon;
