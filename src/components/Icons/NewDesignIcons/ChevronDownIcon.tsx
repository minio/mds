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

const ChevronDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.50501 5.50502C3.77838 5.23166 4.2216 5.23166 4.49496 5.50502L7.99999 9.01005L11.505 5.50502C11.7784 5.23166 12.2216 5.23166 12.495 5.50502C12.7683 5.77839 12.7683 6.22161 12.495 6.49497L8.49496 10.495C8.2216 10.7683 7.77838 10.7683 7.50501 10.495L3.50501 6.49497C3.23165 6.22161 3.23165 5.77839 3.50501 5.50502Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronDownIcon;
