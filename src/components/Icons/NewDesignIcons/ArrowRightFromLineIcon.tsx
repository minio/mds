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

const ArrowRightFromLineIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2 2.63333C2.3866 2.63333 2.7 2.94673 2.7 3.33333V12.6667C2.7 13.0533 2.3866 13.3667 2 13.3667C1.6134 13.3667 1.3 13.0533 1.3 12.6667V3.33333C1.3 2.94673 1.6134 2.63333 2 2.63333ZM9.50503 3.50502C9.7784 3.23166 10.2216 3.23166 10.495 3.50502L14.495 7.50502C14.6263 7.6363 14.7 7.81435 14.7 8C14.7 8.18565 14.6263 8.3637 14.495 8.49497L10.495 12.495C10.2216 12.7683 9.7784 12.7683 9.50503 12.495C9.23166 12.2216 9.23166 11.7784 9.50503 11.505L12.3101 8.7H4.66667C4.28007 8.7 3.96667 8.3866 3.96667 8C3.96667 7.6134 4.28007 7.3 4.66667 7.3H12.3101L9.50503 4.49497C9.23166 4.22161 9.23166 3.77839 9.50503 3.50502Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowRightFromLineIcon;
