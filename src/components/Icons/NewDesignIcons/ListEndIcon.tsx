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

const ListEndIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.3 3.99999C1.3 3.61339 1.6134 3.29999 2 3.29999H10.6667C11.0533 3.29999 11.3667 3.61339 11.3667 3.99999C11.3667 4.38659 11.0533 4.69999 10.6667 4.69999H2C1.6134 4.69999 1.3 4.38659 1.3 3.99999ZM14 3.29999C14.3866 3.29999 14.7 3.61339 14.7 3.99999V10.6667C14.7 11.2059 14.4858 11.7231 14.1045 12.1044C13.7231 12.4858 13.2059 12.7 12.6667 12.7H11.0233L11.1616 12.8383C11.435 13.1117 11.435 13.5549 11.1616 13.8283C10.8883 14.1017 10.4451 14.1017 10.1717 13.8283L8.83836 12.495C8.70709 12.3637 8.63334 12.1856 8.63334 12C8.63334 11.8143 8.70709 11.6363 8.83836 11.505L10.1717 10.1717C10.4451 9.89831 10.8883 9.89831 11.1616 10.1717C11.435 10.445 11.435 10.8883 11.1616 11.1616L11.0233 11.3H12.6667C12.8346 11.3 12.9957 11.2333 13.1145 11.1145C13.2333 10.9957 13.3 10.8346 13.3 10.6667V3.99999C13.3 3.61339 13.6134 3.29999 14 3.29999ZM1.3 7.99999C1.3 7.61339 1.6134 7.29999 2 7.29999H10.6667C11.0533 7.29999 11.3667 7.61339 11.3667 7.99999C11.3667 8.38659 11.0533 8.69999 10.6667 8.69999H2C1.6134 8.69999 1.3 8.38659 1.3 7.99999ZM1.3 12C1.3 11.6134 1.6134 11.3 2 11.3H6.66667C7.05327 11.3 7.36667 11.6134 7.36667 12C7.36667 12.3866 7.05327 12.7 6.66667 12.7H2C1.6134 12.7 1.3 12.3866 1.3 12Z"
      fill="currentColor"
    />
  </svg>
);
export default ListEndIcon;
