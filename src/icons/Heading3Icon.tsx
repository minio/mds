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

const Heading3Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.66667 3.29999C3.05327 3.29999 3.36667 3.61339 3.36667 3.99999V7.29999H7.30001V3.99999C7.30001 3.61339 7.61341 3.29999 8.00001 3.29999C8.38661 3.29999 8.70001 3.61339 8.70001 3.99999V12C8.70001 12.3866 8.38661 12.7 8.00001 12.7C7.61341 12.7 7.30001 12.3866 7.30001 12V8.69999H3.36667V12C3.36667 12.3866 3.05327 12.7 2.66667 12.7C2.28008 12.7 1.96667 12.3866 1.96667 12V3.99999C1.96667 3.61339 2.28008 3.29999 2.66667 3.29999ZM12.9597 7.50809C12.7387 7.40382 12.3997 7.38093 12.0216 7.60334C11.6884 7.79936 11.2593 7.68812 11.0633 7.3549C10.8673 7.02168 10.9785 6.59265 11.3118 6.39663C12.067 5.95238 12.8947 5.92949 13.557 6.24189C14.2138 6.55172 14.7 7.19755 14.7 7.99999C14.7 8.49149 14.5221 8.96465 14.2018 9.33332C14.5221 9.70199 14.7 10.1751 14.7 10.6667C14.7 11.5363 14.2104 12.2896 13.4539 12.63C12.6846 12.9762 11.7494 12.8537 10.9133 12.2267C10.6041 11.9947 10.5414 11.5559 10.7733 11.2467C11.0053 10.9374 11.4441 10.8747 11.7533 11.1067C12.2506 11.4796 12.6487 11.4571 12.8794 11.3533C13.123 11.2437 13.3 10.997 13.3 10.6667C13.3 10.4987 13.2333 10.3376 13.1145 10.2188C12.9957 10.1 12.8346 10.0333 12.6667 10.0333C12.2801 10.0333 11.9667 9.71992 11.9667 9.33332C11.9667 8.94672 12.2801 8.63332 12.6667 8.63332C12.8346 8.63332 12.9957 8.5666 13.1145 8.44782C13.2333 8.32905 13.3 8.16796 13.3 7.99999C13.3 7.80242 13.1862 7.61492 12.9597 7.50809Z"
      fill="currentColor"
    />
  </svg>
);
export default Heading3Icon;
