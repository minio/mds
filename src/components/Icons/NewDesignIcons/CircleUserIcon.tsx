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

const CircleUserIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.99997 2.03333C4.70467 2.03333 2.0333 4.7047 2.0333 8C2.0333 9.74798 2.78496 11.3204 3.98268 12.4117C4.03895 11.9664 4.24146 11.5496 4.56218 11.2289C4.94351 10.8476 5.46069 10.6333 5.99997 10.6333H9.99997C10.5392 10.6333 11.0564 10.8476 11.4377 11.2289C11.7585 11.5496 11.961 11.9664 12.0173 12.4117C13.215 11.3204 13.9666 9.74798 13.9666 8C13.9666 4.7047 11.2953 2.03333 7.99997 2.03333ZM10.6333 13.3556V12.6667C10.6333 12.4987 10.5666 12.3376 10.4478 12.2188C10.329 12.1001 10.1679 12.0333 9.99997 12.0333H5.99997C5.832 12.0333 5.67091 12.1001 5.55213 12.2188C5.43336 12.3376 5.36663 12.4987 5.36663 12.6667V13.3556C6.16086 13.7469 7.05475 13.9667 7.99997 13.9667C8.94519 13.9667 9.83907 13.7469 10.6333 13.3556ZM0.633301 8C0.633301 3.9315 3.93147 0.633331 7.99997 0.633331C12.0685 0.633331 15.3666 3.9315 15.3666 8C15.3666 12.0685 12.0685 15.3667 7.99997 15.3667C3.93147 15.3667 0.633301 12.0685 0.633301 8ZM7.99997 5.36666C7.282 5.36666 6.69997 5.94869 6.69997 6.66666C6.69997 7.38463 7.282 7.96666 7.99997 7.96666C8.71794 7.96666 9.29997 7.38463 9.29997 6.66666C9.29997 5.94869 8.71794 5.36666 7.99997 5.36666ZM5.29997 6.66666C5.29997 5.1755 6.5088 3.96666 7.99997 3.96666C9.49114 3.96666 10.7 5.1755 10.7 6.66666C10.7 8.15783 9.49114 9.36666 7.99997 9.36666C6.5088 9.36666 5.29997 8.15783 5.29997 6.66666Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleUserIcon;
