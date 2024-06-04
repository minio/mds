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

const ArrowRightToLineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M14 2.63333C14.3866 2.63333 14.7 2.94673 14.7 3.33333V12.6667C14.7 13.0533 14.3866 13.3667 14 13.3667C13.6134 13.3667 13.3 13.0533 13.3 12.6667V3.33333C13.3 2.94673 13.6134 2.63333 14 2.63333ZM6.83835 3.50502C7.11171 3.23166 7.55493 3.23166 7.8283 3.50502L11.8283 7.50502C11.9596 7.6363 12.0333 7.81435 12.0333 8C12.0333 8.18565 11.9596 8.3637 11.8283 8.49497L7.8283 12.495C7.55493 12.7683 7.11171 12.7683 6.83835 12.495C6.56498 12.2216 6.56498 11.7784 6.83835 11.505L9.64337 8.7H1.99999C1.61339 8.7 1.29999 8.3866 1.29999 8C1.29999 7.6134 1.61339 7.3 1.99999 7.3H9.64337L6.83835 4.49497C6.56498 4.22161 6.56498 3.77839 6.83835 3.50502Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowRightToLineIcon;
