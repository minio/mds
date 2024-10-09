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

const CircleEqualIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00003 2.03333C4.70473 2.03333 2.03336 4.7047 2.03336 8C2.03336 11.2953 4.70473 13.9667 8.00003 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8C13.9667 4.7047 11.2953 2.03333 8.00003 2.03333ZM0.633362 8C0.633362 3.9315 3.93153 0.633331 8.00003 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8.00003 15.3667C3.93153 15.3667 0.633362 12.0685 0.633362 8ZM3.9667 6.66666C3.9667 6.28006 4.2801 5.96666 4.66669 5.96666H11.3334C11.72 5.96666 12.0334 6.28006 12.0334 6.66666C12.0334 7.05326 11.72 7.36666 11.3334 7.36666H4.66669C4.2801 7.36666 3.9667 7.05326 3.9667 6.66666ZM3.9667 9.33333C3.9667 8.94673 4.2801 8.63333 4.66669 8.63333H11.3334C11.72 8.63333 12.0334 8.94673 12.0334 9.33333C12.0334 9.71993 11.72 10.0333 11.3334 10.0333H4.66669C4.2801 10.0333 3.9667 9.71993 3.9667 9.33333Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleEqualIcon;
