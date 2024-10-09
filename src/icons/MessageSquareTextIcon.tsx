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

const MessageSquareTextIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.69999C3.16541 2.69999 3.00432 2.76671 2.88555 2.88549C2.76677 3.00426 2.70005 3.16535 2.70005 3.33332V12.31L4.17174 10.8383C4.30302 10.7071 4.48106 10.6333 4.66672 10.6333H12.6667C12.8347 10.6333 12.9958 10.5666 13.1145 10.4478C13.2333 10.329 13.3 10.168 13.3 9.99999V3.33332C13.3 3.16535 13.2333 3.00426 13.1145 2.88549C12.9958 2.76671 12.8347 2.69999 12.6667 2.69999H3.33338ZM1.8956 1.89554C2.27692 1.51421 2.79411 1.29999 3.33338 1.29999H12.6667C13.206 1.29999 13.7232 1.51421 14.1045 1.89554C14.4858 2.27686 14.7 2.79405 14.7 3.33332V9.99999C14.7 10.5393 14.4858 11.0564 14.1045 11.4378C13.7232 11.8191 13.206 12.0333 12.6667 12.0333H4.95666L2.49502 14.495C2.29482 14.6952 1.99374 14.7551 1.73217 14.6467C1.4706 14.5384 1.30005 14.2831 1.30005 14V3.33332C1.30005 2.79405 1.51427 2.27686 1.8956 1.89554ZM3.96672 5.33332C3.96672 4.94672 4.28012 4.63332 4.66672 4.63332H8.66672C9.05331 4.63332 9.36672 4.94672 9.36672 5.33332C9.36672 5.71992 9.05331 6.03332 8.66672 6.03332H4.66672C4.28012 6.03332 3.96672 5.71992 3.96672 5.33332ZM3.96672 7.99999C3.96672 7.61339 4.28012 7.29999 4.66672 7.29999H11.3334C11.72 7.29999 12.0334 7.61339 12.0334 7.99999C12.0334 8.38659 11.72 8.69999 11.3334 8.69999H4.66672C4.28012 8.69999 3.96672 8.38659 3.96672 7.99999Z"
      fill="currentColor"
    />
  </svg>
);
export default MessageSquareTextIcon;
