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

const MessageSquareMoreIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.69999C3.16541 2.69999 3.00432 2.76671 2.88555 2.88549C2.76677 3.00426 2.70005 3.16535 2.70005 3.33332V12.31L4.17174 10.8383C4.30302 10.7071 4.48106 10.6333 4.66672 10.6333H12.6667C12.8347 10.6333 12.9958 10.5666 13.1145 10.4478C13.2333 10.329 13.3 10.168 13.3 9.99999V3.33332C13.3 3.16535 13.2333 3.00426 13.1145 2.88549C12.9958 2.76671 12.8347 2.69999 12.6667 2.69999H3.33338ZM1.8956 1.89554C2.27692 1.51421 2.79411 1.29999 3.33338 1.29999H12.6667C13.206 1.29999 13.7232 1.51421 14.1045 1.89554C14.4858 2.27686 14.7 2.79405 14.7 3.33332V9.99999C14.7 10.5393 14.4858 11.0564 14.1045 11.4378C13.7232 11.8191 13.206 12.0333 12.6667 12.0333H4.95666L2.49502 14.495C2.29482 14.6952 1.99374 14.7551 1.73217 14.6467C1.4706 14.5384 1.30005 14.2831 1.30005 14V3.33332C1.30005 2.79405 1.51427 2.27686 1.8956 1.89554ZM4.63338 6.66665C4.63338 6.28006 4.94678 5.96665 5.33338 5.96665H5.34005C5.72665 5.96665 6.04005 6.28006 6.04005 6.66665C6.04005 7.05325 5.72665 7.36665 5.34005 7.36665H5.33338C4.94678 7.36665 4.63338 7.05325 4.63338 6.66665ZM7.30005 6.66665C7.30005 6.28006 7.61345 5.96665 8.00005 5.96665H8.00672C8.39331 5.96665 8.70672 6.28006 8.70672 6.66665C8.70672 7.05325 8.39331 7.36665 8.00672 7.36665H8.00005C7.61345 7.36665 7.30005 7.05325 7.30005 6.66665ZM9.96672 6.66665C9.96672 6.28006 10.2801 5.96665 10.6667 5.96665H10.6734C11.06 5.96665 11.3734 6.28006 11.3734 6.66665C11.3734 7.05325 11.06 7.36665 10.6734 7.36665H10.6667C10.2801 7.36665 9.96672 7.05325 9.96672 6.66665Z"
      fill="currentColor"
    />
  </svg>
);
export default MessageSquareMoreIcon;
