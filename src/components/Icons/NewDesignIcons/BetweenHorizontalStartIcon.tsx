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

const BetweenHorizontalStartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.03333 2.7V5.96667H13.3V2.7H6.03333ZM4.63333 2.66667C4.63333 1.91188 5.24521 1.3 6 1.3H13.3333C14.0881 1.3 14.7 1.91188 14.7 2.66667V6C14.7 6.75479 14.0881 7.36667 13.3333 7.36667H6C5.24521 7.36667 4.63333 6.75479 4.63333 6V2.66667ZM0.838357 5.50503C1.11172 5.23166 1.55494 5.23166 1.82831 5.50503L3.82831 7.50503C4.10167 7.7784 4.10167 8.22161 3.82831 8.49498L1.82831 10.495C1.55494 10.7683 1.11172 10.7683 0.838357 10.495C0.56499 10.2216 0.56499 9.7784 0.838357 9.50503L2.34338 8L0.838357 6.49498C0.56499 6.22161 0.56499 5.7784 0.838357 5.50503ZM6.03333 10.0333V13.3H13.3V10.0333H6.03333ZM4.63333 10C4.63333 9.24521 5.24521 8.63334 6 8.63334H13.3333C14.0881 8.63334 14.7 9.24521 14.7 10V13.3333C14.7 14.0881 14.0881 14.7 13.3333 14.7H6C5.24521 14.7 4.63333 14.0881 4.63333 13.3333V10Z"
      fill="currentColor"
    />
  </svg>
);
export default BetweenHorizontalStartIcon;
