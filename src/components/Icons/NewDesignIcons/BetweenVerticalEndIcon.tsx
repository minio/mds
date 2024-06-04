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

const BetweenVerticalEndIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.69999 2.7V9.96667H5.96665V2.7H2.69999ZM1.29999 2.66667C1.29999 1.91188 1.91187 1.3 2.66665 1.3H5.99999C6.75478 1.3 7.36665 1.91188 7.36665 2.66667V10C7.36665 10.7548 6.75478 11.3667 5.99999 11.3667H2.66665C1.91187 11.3667 1.29999 10.7548 1.29999 10V2.66667ZM10.0333 2.7V9.96667H13.3V2.7H10.0333ZM8.63332 2.66667C8.63332 1.91188 9.2452 1.3 9.99999 1.3H13.3333C14.0881 1.3 14.7 1.91188 14.7 2.66667V10C14.7 10.7548 14.0881 11.3667 13.3333 11.3667H9.99999C9.2452 11.3667 8.63332 10.7548 8.63332 10V2.66667ZM7.50501 12.1717C7.77838 11.8983 8.2216 11.8983 8.49496 12.1717L10.495 14.1717C10.7683 14.4451 10.7683 14.8883 10.495 15.1616C10.2216 15.435 9.77838 15.435 9.50501 15.1616L7.99999 13.6566L6.49496 15.1616C6.2216 15.435 5.77838 15.435 5.50501 15.1616C5.23165 14.8883 5.23165 14.4451 5.50501 14.1717L7.50501 12.1717Z"
      fill="currentColor"
    />
  </svg>
);
export default BetweenVerticalEndIcon;
