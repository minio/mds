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

const CircleEllipsisIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00003 2.03333C4.70473 2.03333 2.03336 4.7047 2.03336 8C2.03336 11.2953 4.70473 13.9667 8.00003 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8C13.9667 4.7047 11.2953 2.03333 8.00003 2.03333ZM0.633362 8C0.633362 3.9315 3.93153 0.633331 8.00003 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8.00003 15.3667C3.93153 15.3667 0.633362 12.0685 0.633362 8ZM3.9667 8C3.9667 7.6134 4.2801 7.3 4.66669 7.3H4.67336C5.05996 7.3 5.37336 7.6134 5.37336 8C5.37336 8.3866 5.05996 8.7 4.67336 8.7H4.66669C4.2801 8.7 3.9667 8.3866 3.9667 8ZM7.30003 8C7.30003 7.6134 7.61343 7.3 8.00003 7.3H8.00669C8.39329 7.3 8.70669 7.6134 8.70669 8C8.70669 8.3866 8.39329 8.7 8.00669 8.7H8.00003C7.61343 8.7 7.30003 8.3866 7.30003 8ZM10.6334 8C10.6334 7.6134 10.9468 7.3 11.3334 7.3H11.34C11.7266 7.3 12.04 7.6134 12.04 8C12.04 8.3866 11.7266 8.7 11.34 8.7H11.3334C10.9468 8.7 10.6334 8.3866 10.6334 8Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleEllipsisIcon;
