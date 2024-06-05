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

const CircleDollarSignIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.03333C4.7047 2.03333 2.03333 4.7047 2.03333 8C2.03333 11.2953 4.7047 13.9667 8 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8C13.9667 4.7047 11.2953 2.03333 8 2.03333ZM0.633331 8C0.633331 3.9315 3.9315 0.633331 8 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8 15.3667C3.9315 15.3667 0.633331 12.0685 0.633331 8ZM8 3.3C8.3866 3.3 8.7 3.6134 8.7 4V4.63333H10.6667C11.0533 4.63333 11.3667 4.94673 11.3667 5.33333C11.3667 5.71993 11.0533 6.03333 10.6667 6.03333H8.7V7.3H9.33333C9.8726 7.3 10.3898 7.51422 10.7711 7.89555C11.1524 8.27687 11.3667 8.79406 11.3667 9.33333C11.3667 9.8726 11.1524 10.3898 10.7711 10.7711C10.3898 11.1524 9.8726 11.3667 9.33333 11.3667H8.7V12C8.7 12.3866 8.3866 12.7 8 12.7C7.6134 12.7 7.3 12.3866 7.3 12V11.3667H5.33333C4.94673 11.3667 4.63333 11.0533 4.63333 10.6667C4.63333 10.2801 4.94673 9.96666 5.33333 9.96666H7.3V8.7H6.66666C6.12739 8.7 5.6102 8.48577 5.22888 8.10445C4.84756 7.72312 4.63333 7.20594 4.63333 6.66666C4.63333 6.12739 4.84756 5.6102 5.22888 5.22888C5.6102 4.84756 6.12739 4.63333 6.66666 4.63333H7.3V4C7.3 3.6134 7.6134 3.3 8 3.3ZM7.3 6.03333H6.66666C6.49869 6.03333 6.3376 6.10006 6.21883 6.21883C6.10006 6.3376 6.03333 6.49869 6.03333 6.66666C6.03333 6.83463 6.10006 6.99572 6.21883 7.1145C6.3376 7.23327 6.49869 7.3 6.66666 7.3H7.3V6.03333ZM8.7 8.7V9.96666H9.33333C9.5013 9.96666 9.66239 9.89994 9.78116 9.78116C9.89994 9.66239 9.96666 9.5013 9.96666 9.33333C9.96666 9.16536 9.89994 9.00427 9.78116 8.8855C9.66239 8.76672 9.5013 8.7 9.33333 8.7H8.7Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleDollarSignIcon;
