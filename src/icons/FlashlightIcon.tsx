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

const FlashlightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M7.99992 8.66668C8.36811 8.66668 8.66659 8.3682 8.66659 8.00001C8.66659 7.63182 8.36811 7.33334 7.99992 7.33334C7.63173 7.33334 7.33325 7.63182 7.33325 8.00001C7.33325 8.3682 7.63173 8.66668 7.99992 8.66668Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.30005 1.33333C3.30005 0.946732 3.61345 0.633331 4.00005 0.633331H12C12.3866 0.633331 12.7 0.946732 12.7 1.33333V3.99999C12.7 4.95739 12.1875 5.46953 11.8464 5.81027L11.8284 5.82831C11.5024 6.15428 11.3667 6.30778 11.3667 6.66666V13.3333C11.3667 13.8726 11.1525 14.3898 10.7712 14.7711C10.3898 15.1524 9.87266 15.3667 9.33338 15.3667H6.66672C6.12744 15.3667 5.61026 15.1524 5.22893 14.7711C4.84761 14.3898 4.63338 13.8726 4.63338 13.3333V6.66666C4.63338 6.30778 4.49772 6.15428 4.17174 5.82831L4.15369 5.81027C3.81264 5.46952 3.30005 4.9574 3.30005 4V1.33333ZM11.3 2.03333V3.29999H4.70005V2.03333H11.3ZM10.9744 4.69999H5.02571C5.06674 4.743 5.11201 4.78867 5.16169 4.83836L5.17974 4.85639C5.52079 5.19714 6.03338 5.70926 6.03338 6.66666V13.3333C6.03338 13.5013 6.10011 13.6624 6.21888 13.7812C6.33765 13.8999 6.49875 13.9667 6.66672 13.9667H9.33338C9.50135 13.9667 9.66244 13.8999 9.78122 13.7812C9.89999 13.6624 9.96672 13.5013 9.96672 13.3333V6.66666C9.96672 5.70926 10.4793 5.19714 10.8204 4.85639L10.8384 4.83836C10.8881 4.78867 10.9334 4.743 10.9744 4.69999Z"
      fill="currentColor"
    />
  </svg>
);
export default FlashlightIcon;
