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

const MessageSquareShareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.69999C3.16541 2.69999 3.00432 2.76671 2.88555 2.88549C2.76677 3.00426 2.70005 3.16535 2.70005 3.33332V12.31L4.17174 10.8383C4.30302 10.7071 4.48106 10.6333 4.66672 10.6333H12.6667C12.8347 10.6333 12.9958 10.5666 13.1145 10.4478C13.2333 10.329 13.3 10.168 13.3 9.99999V7.99999C13.3 7.61339 13.6135 7.29999 14 7.29999C14.3866 7.29999 14.7 7.61339 14.7 7.99999V9.99999C14.7 10.5393 14.4858 11.0564 14.1045 11.4378C13.7232 11.8191 13.206 12.0333 12.6667 12.0333H4.95666L2.49502 14.495C2.29482 14.6952 1.99374 14.7551 1.73217 14.6467C1.4706 14.5384 1.30005 14.2831 1.30005 14V3.33332C1.30005 2.79405 1.51427 2.27686 1.8956 1.89554C2.27692 1.51421 2.79411 1.29999 3.33338 1.29999H8.00005C8.38665 1.29999 8.70005 1.61339 8.70005 1.99999C8.70005 2.38659 8.38665 2.69999 8.00005 2.69999H3.33338ZM10.6667 2.69999C10.2801 2.69999 9.96672 2.38659 9.96672 1.99999C9.96672 1.61339 10.2801 1.29999 10.6667 1.29999H14C14.3866 1.29999 14.7 1.61339 14.7 1.99999V5.33332C14.7 5.71992 14.3866 6.03332 14 6.03332C13.6135 6.03332 13.3 5.71992 13.3 5.33332V3.68994L11.1617 5.8283C10.8883 6.10166 10.4451 6.10166 10.1717 5.8283C9.89837 5.55493 9.89837 5.11171 10.1717 4.83835L12.3101 2.69999H10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default MessageSquareShareIcon;
