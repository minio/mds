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

const ChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.495 3.50502C10.7683 3.77839 10.7683 4.22161 10.495 4.49497L6.98994 8L10.495 11.505C10.7683 11.7784 10.7683 12.2216 10.495 12.495C10.2216 12.7683 9.77838 12.7683 9.50501 12.495L5.50501 8.49497C5.23165 8.22161 5.23165 7.77839 5.50501 7.50502L9.50501 3.50502C9.77838 3.23166 10.2216 3.23166 10.495 3.50502Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronLeftIcon;
