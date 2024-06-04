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

const Clock11Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00003 2.03333C4.70473 2.03333 2.03336 4.7047 2.03336 8C2.03336 11.2953 4.70473 13.9667 8.00003 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8C13.9667 4.7047 11.2953 2.03333 8.00003 2.03333ZM0.633362 8C0.633362 3.9315 3.93153 0.633331 8.00003 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8.00003 15.3667C3.93153 15.3667 0.633362 12.0685 0.633362 8ZM8.00003 3.3C8.38663 3.3 8.70003 3.6134 8.70003 4V8C8.70003 8.31227 8.49318 8.58678 8.19301 8.67287C7.89283 8.75896 7.57194 8.63581 7.40643 8.371L5.73976 5.70433C5.53487 5.37649 5.63453 4.94463 5.96236 4.73973C6.2902 4.53484 6.72206 4.6345 6.92696 4.96233L7.30003 5.55924V4C7.30003 3.6134 7.61343 3.3 8.00003 3.3Z"
      fill="currentColor"
    />
  </svg>
);
export default Clock11Icon;
