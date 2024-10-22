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

const MessageSquareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33334 2.69999C3.16537 2.69999 3.00428 2.76671 2.8855 2.88549C2.76673 3.00426 2.7 3.16535 2.7 3.33332V12.31L4.17169 10.8383C4.30297 10.7071 4.48102 10.6333 4.66667 10.6333H12.6667C12.8346 10.6333 12.9957 10.5666 13.1145 10.4478C13.2333 10.329 13.3 10.168 13.3 9.99999V3.33332C13.3 3.16535 13.2333 3.00426 13.1145 2.88549C12.9957 2.76671 12.8346 2.69999 12.6667 2.69999H3.33334ZM1.89555 1.89554C2.27688 1.51421 2.79406 1.29999 3.33334 1.29999H12.6667C13.2059 1.29999 13.7231 1.51421 14.1045 1.89554C14.4858 2.27686 14.7 2.79405 14.7 3.33332V9.99999C14.7 10.5393 14.4858 11.0564 14.1045 11.4378C13.7231 11.8191 13.2059 12.0333 12.6667 12.0333H4.95662L2.49498 14.495C2.29478 14.6952 1.9937 14.7551 1.73212 14.6467C1.47055 14.5384 1.3 14.2831 1.3 14V3.33332C1.3 2.79405 1.51423 2.27686 1.89555 1.89554Z"
      fill="currentColor"
    />
  </svg>
);
export default MessageSquareIcon;
