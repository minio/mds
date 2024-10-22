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

const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.14801 1.81467C7.90441 1.05827 8.9303 0.633331 10 0.633331H12C12.3866 0.633331 12.7 0.946732 12.7 1.33333V4C12.7 4.3866 12.3866 4.7 12 4.7H10.0333V5.96666H12C12.2156 5.96666 12.4191 6.06597 12.5518 6.23588C12.6844 6.40578 12.7314 6.62732 12.6791 6.83644L12.0124 9.50311C11.9345 9.81472 11.6545 10.0333 11.3333 10.0333H10.0333V14.6667C10.0333 15.0533 9.71994 15.3667 9.33334 15.3667H6.66667C6.28008 15.3667 5.96667 15.0533 5.96667 14.6667V10.0333H4.66667C4.28008 10.0333 3.96667 9.71993 3.96667 9.33333V6.66666C3.96667 6.28006 4.28008 5.96666 4.66667 5.96666H5.96667V4.66666C5.96667 3.59696 6.39161 2.57106 7.14801 1.81467ZM10 2.03333C9.3016 2.03333 8.63181 2.31077 8.13796 2.80462C7.64411 3.29846 7.36667 3.96826 7.36667 4.66666V6.66666C7.36667 7.05326 7.05327 7.36666 6.66667 7.36666H5.36667V8.63333H6.66667C7.05327 8.63333 7.36667 8.94673 7.36667 9.33333V13.9667H8.63334V9.33333C8.63334 8.94673 8.94674 8.63333 9.33334 8.63333H10.7868L11.1035 7.36666H9.33334C8.94674 7.36666 8.63334 7.05326 8.63334 6.66666V4.66666C8.63334 4.3042 8.77733 3.95658 9.03363 3.70029C9.28993 3.44399 9.63755 3.3 10 3.3H11.3V2.03333H10Z"
      fill="currentColor"
    />
  </svg>
);
export default FacebookIcon;
