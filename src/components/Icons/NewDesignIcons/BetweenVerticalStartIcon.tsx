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

const BetweenVerticalStartIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.50501 0.838357C5.77838 0.56499 6.2216 0.56499 6.49496 0.838357L7.99999 2.34338L9.50501 0.838357C9.77838 0.56499 10.2216 0.56499 10.495 0.838357C10.7683 1.11172 10.7683 1.55494 10.495 1.82831L8.49496 3.82831C8.2216 4.10167 7.77838 4.10167 7.50501 3.82831L5.50501 1.82831C5.23165 1.55494 5.23165 1.11172 5.50501 0.838357ZM2.69999 6.03333V13.3H5.96665V6.03333H2.69999ZM1.29999 6C1.29999 5.24521 1.91187 4.63333 2.66665 4.63333H5.99999C6.75478 4.63333 7.36665 5.24521 7.36665 6V13.3333C7.36665 14.0881 6.75478 14.7 5.99999 14.7H2.66665C1.91187 14.7 1.29999 14.0881 1.29999 13.3333V6ZM10.0333 6.03333V13.3H13.3V6.03333H10.0333ZM8.63332 6C8.63332 5.24521 9.2452 4.63333 9.99999 4.63333H13.3333C14.0881 4.63333 14.7 5.24521 14.7 6V13.3333C14.7 14.0881 14.0881 14.7 13.3333 14.7H9.99999C9.2452 14.7 8.63332 14.0881 8.63332 13.3333V6Z"
      fill="currentColor"
    />
  </svg>
);
export default BetweenVerticalStartIcon;
