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

const BetweenHorizontalEndIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.69999 2.7V5.96667H9.96665V2.7H2.69999ZM1.29999 2.66667C1.29999 1.91188 1.91187 1.3 2.66665 1.3H9.99999C10.7548 1.3 11.3667 1.91188 11.3667 2.66667V6C11.3667 6.75479 10.7548 7.36667 9.99999 7.36667H2.66665C1.91187 7.36667 1.29999 6.75479 1.29999 6V2.66667ZM14.1717 5.50503C14.445 5.23166 14.8883 5.23166 15.1616 5.50503C15.435 5.7784 15.435 6.22161 15.1616 6.49498L13.6566 8L15.1616 9.50503C15.435 9.7784 15.435 10.2216 15.1616 10.495C14.8883 10.7683 14.445 10.7683 14.1717 10.495L12.1717 8.49498C11.8983 8.22161 11.8983 7.7784 12.1717 7.50503L14.1717 5.50503ZM2.69999 10.0333V13.3H9.96665V10.0333H2.69999ZM1.29999 10C1.29999 9.24521 1.91187 8.63334 2.66665 8.63334H9.99999C10.7548 8.63334 11.3667 9.24521 11.3667 10V13.3333C11.3667 14.0881 10.7548 14.7 9.99999 14.7H2.66665C1.91187 14.7 1.29999 14.0881 1.29999 13.3333V10Z"
      fill="currentColor"
    />
  </svg>
);
export default BetweenHorizontalEndIcon;
