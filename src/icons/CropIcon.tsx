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

const CropIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4 0.633331C4.3866 0.633331 4.7 0.946732 4.7 1.33333V3.3H10.6667C11.2059 3.3 11.7231 3.51422 12.1044 3.89555C12.4858 4.27687 12.7 4.79406 12.7 5.33333V11.3H14.6667C15.0533 11.3 15.3667 11.6134 15.3667 12C15.3667 12.3866 15.0533 12.7 14.6667 12.7H12.7V14.6667C12.7 15.0533 12.3866 15.3667 12 15.3667C11.6134 15.3667 11.3 15.0533 11.3 14.6667V12.7H5.33333C4.79406 12.7 4.27687 12.4858 3.89555 12.1044C3.51422 11.7231 3.3 11.2059 3.3 10.6667V4.7H1.33333C0.946732 4.7 0.633331 4.3866 0.633331 4C0.633331 3.6134 0.946732 3.3 1.33333 3.3H3.3V1.33333C3.3 0.946732 3.6134 0.633331 4 0.633331ZM4.7 4.7V10.6667C4.7 10.8346 4.76672 10.9957 4.8855 11.1145C5.00427 11.2333 5.16536 11.3 5.33333 11.3H11.3V5.33333C11.3 5.16536 11.2333 5.00427 11.1145 4.8855C10.9957 4.76672 10.8346 4.7 10.6667 4.7H4.7Z"
      fill="currentColor"
    />
  </svg>
);
export default CropIcon;
