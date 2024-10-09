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

const SquareGanttChartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C2.98354 2.70005 2.69999 2.9836 2.69999 3.33338V12.6667C2.69999 13.0165 2.98354 13.3 3.33332 13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H3.33332ZM1.29999 3.33338C1.29999 2.2104 2.21034 1.30005 3.33332 1.30005H12.6667C13.7896 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7896 14.7 12.6667 14.7H3.33332C2.21034 14.7 1.29999 13.7897 1.29999 12.6667V3.33338ZM5.29999 5.33338C5.29999 4.94678 5.61339 4.63338 5.99999 4.63338H10.6667C11.0533 4.63338 11.3667 4.94678 11.3667 5.33338C11.3667 5.71998 11.0533 6.03338 10.6667 6.03338H5.99999C5.61339 6.03338 5.29999 5.71998 5.29999 5.33338ZM4.63332 8.00005C4.63332 7.61345 4.94672 7.30005 5.33332 7.30005H9.33332C9.71992 7.30005 10.0333 7.61345 10.0333 8.00005C10.0333 8.38665 9.71992 8.70005 9.33332 8.70005H5.33332C4.94672 8.70005 4.63332 8.38665 4.63332 8.00005ZM6.63332 10.6667C6.63332 10.2801 6.94672 9.96672 7.33332 9.96672H10.6667C11.0533 9.96672 11.3667 10.2801 11.3667 10.6667C11.3667 11.0533 11.0533 11.3667 10.6667 11.3667H7.33332C6.94672 11.3667 6.63332 11.0533 6.63332 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareGanttChartIcon;
