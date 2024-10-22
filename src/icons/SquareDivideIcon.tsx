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

const SquareDivideIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M5.33336 7.30005C4.94676 7.30005 4.63336 7.61345 4.63336 8.00005C4.63336 8.38665 4.94676 8.70005 5.33336 8.70005H10.6667C11.0533 8.70005 11.3667 8.38665 11.3667 8.00005C11.3667 7.61345 11.0533 7.30005 10.6667 7.30005H5.33336Z"
      fill="currentColor"
    />
    <path
      d="M8.66665 10.6667C8.66665 11.0349 8.36817 11.3333 7.99998 11.3333C7.63179 11.3333 7.33331 11.0349 7.33331 10.6667C7.33331 10.2985 7.63179 10 7.99998 10C8.36817 10 8.66665 10.2985 8.66665 10.6667Z"
      fill="currentColor"
    />
    <path
      d="M7.99998 5.99996C8.36817 5.99996 8.66665 5.70148 8.66665 5.33329C8.66665 4.9651 8.36817 4.66663 7.99998 4.66663C7.63179 4.66663 7.33331 4.9651 7.33331 5.33329C7.33331 5.70148 7.63179 5.99996 7.99998 5.99996Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.33332 1.30005C2.21034 1.30005 1.29999 2.2104 1.29999 3.33338V12.6667C1.29999 13.7897 2.21034 14.7 3.33332 14.7H12.6667C13.7896 14.7 14.7 13.7897 14.7 12.6667V3.33338C14.7 2.2104 13.7896 1.30005 12.6667 1.30005H3.33332ZM2.69999 3.33338C2.69999 2.9836 2.98354 2.70005 3.33332 2.70005H12.6667C13.0164 2.70005 13.3 2.9836 13.3 3.33338V12.6667C13.3 13.0165 13.0164 13.3 12.6667 13.3H3.33332C2.98354 13.3 2.69999 13.0165 2.69999 12.6667V3.33338Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareDivideIcon;
