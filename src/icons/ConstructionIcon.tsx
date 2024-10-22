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

const ConstructionIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66669 1.3C5.05329 1.3 5.36669 1.6134 5.36669 2V3.3H10.6334V2C10.6334 1.6134 10.9468 1.3 11.3334 1.3C11.72 1.3 12.0334 1.6134 12.0334 2V3.3H14C14.7548 3.3 15.3667 3.91188 15.3667 4.66667V8.66667C15.3667 9.42146 14.7548 10.0333 14 10.0333H12.0334V14C12.0334 14.3866 11.72 14.7 11.3334 14.7C10.9468 14.7 10.6334 14.3866 10.6334 14V10.0333H5.36669V14C5.36669 14.3866 5.05329 14.7 4.66669 14.7C4.2801 14.7 3.9667 14.3866 3.9667 14V10.0333H2.00003C1.24524 10.0333 0.633362 9.42146 0.633362 8.66667V4.66667C0.633362 3.91188 1.24524 3.3 2.00003 3.3H3.9667V2C3.9667 1.6134 4.2801 1.3 4.66669 1.3ZM3.02331 4.7L6.95664 8.63334H8.97675L5.04341 4.7H3.02331ZM7.02331 4.7L10.9566 8.63334H12.9767L9.04341 4.7H7.02331ZM11.0233 4.7L13.9667 7.64339V4.7H11.0233ZM4.97675 8.63334L2.03336 5.68995V8.63334H4.97675Z"
      fill="currentColor"
    />
  </svg>
);
export default ConstructionIcon;
