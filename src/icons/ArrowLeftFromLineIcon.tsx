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

const ArrowLeftFromLineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 2.63333C14.3866 2.63333 14.7 2.94673 14.7 3.33333V12.6667C14.7 13.0533 14.3866 13.3667 14 13.3667C13.6134 13.3667 13.3 13.0533 13.3 12.6667V3.33333C13.3 2.94673 13.6134 2.63333 14 2.63333ZM6.49497 3.50502C6.76834 3.77839 6.76834 4.22161 6.49497 4.49497L3.68995 7.3H11.3333C11.7199 7.3 12.0333 7.6134 12.0333 8C12.0333 8.3866 11.7199 8.7 11.3333 8.7H3.68995L6.49497 11.505C6.76834 11.7784 6.76834 12.2216 6.49497 12.495C6.22161 12.7683 5.77839 12.7683 5.50502 12.495L1.50502 8.49497C1.37375 8.3637 1.3 8.18565 1.3 8C1.3 7.81435 1.37375 7.6363 1.50502 7.50502L5.50502 3.50502C5.77839 3.23166 6.22161 3.23166 6.49497 3.50502Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowLeftFromLineIcon;
