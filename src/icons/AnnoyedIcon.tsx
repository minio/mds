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

const AnnoyedIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.03333C4.7047 2.03333 2.03333 4.7047 2.03333 8C2.03333 11.2953 4.7047 13.9667 8 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8C13.9667 4.7047 11.2953 2.03333 8 2.03333ZM0.633331 8C0.633331 3.9315 3.9315 0.633331 8 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8 15.3667C3.9315 15.3667 0.633331 12.0685 0.633331 8ZM4.63333 6C4.63333 5.6134 4.94673 5.3 5.33333 5.3H6.66666C7.05326 5.3 7.36666 5.6134 7.36666 6C7.36666 6.3866 7.05326 6.7 6.66666 6.7H5.33333C4.94673 6.7 4.63333 6.3866 4.63333 6ZM8.63333 6C8.63333 5.6134 8.94673 5.3 9.33333 5.3H10.6667C11.0533 5.3 11.3667 5.6134 11.3667 6C11.3667 6.3866 11.0533 6.7 10.6667 6.7H9.33333C8.94673 6.7 8.63333 6.3866 8.63333 6ZM4.63333 10C4.63333 9.6134 4.94673 9.3 5.33333 9.3H10.6667C11.0533 9.3 11.3667 9.6134 11.3667 10C11.3667 10.3866 11.0533 10.7 10.6667 10.7H5.33333C4.94673 10.7 4.63333 10.3866 4.63333 10Z"
      fill="currentColor"
    />
  </svg>
);
export default AnnoyedIcon;
