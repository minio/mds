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

const MessageSquareDotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.8956 1.89554C2.27692 1.51421 2.79411 1.29999 3.33338 1.29999H7.80005C8.18665 1.29999 8.50005 1.61339 8.50005 1.99999C8.50005 2.38659 8.18665 2.69999 7.80005 2.69999H3.33338C3.16541 2.69999 3.00432 2.76671 2.88555 2.88549C2.76677 3.00426 2.70005 3.16535 2.70005 3.33332V12.31L4.17174 10.8383C4.30302 10.7071 4.48106 10.6333 4.66672 10.6333H12.6667C12.8347 10.6333 12.9958 10.5666 13.1145 10.4478C13.2333 10.329 13.3 10.168 13.3 9.99999V8.19999C13.3 7.81339 13.6135 7.49999 14 7.49999C14.3866 7.49999 14.7 7.81339 14.7 8.19999V9.99999C14.7 10.5393 14.4858 11.0564 14.1045 11.4378C13.7232 11.8191 13.206 12.0333 12.6667 12.0333H4.95666L2.49502 14.495C2.29482 14.6952 1.99374 14.7551 1.73217 14.6467C1.4706 14.5384 1.30005 14.2831 1.30005 14V3.33332C1.30005 2.79405 1.51427 2.27686 1.8956 1.89554ZM12 2.69999C11.2821 2.69999 10.7 3.28202 10.7 3.99999C10.7 4.71796 11.2821 5.29999 12 5.29999C12.718 5.29999 13.3 4.71796 13.3 3.99999C13.3 3.28202 12.718 2.69999 12 2.69999ZM9.30005 3.99999C9.30005 2.50882 10.5089 1.29999 12 1.29999C13.4912 1.29999 14.7 2.50882 14.7 3.99999C14.7 5.49116 13.4912 6.69999 12 6.69999C10.5089 6.69999 9.30005 5.49116 9.30005 3.99999Z"
      fill="currentColor"
    />
  </svg>
);
export default MessageSquareDotIcon;
