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

const ChevronUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50501 5.50502C7.77838 5.23166 8.2216 5.23166 8.49496 5.50502L12.495 9.50502C12.7683 9.77839 12.7683 10.2216 12.495 10.495C12.2216 10.7683 11.7784 10.7683 11.505 10.495L7.99999 6.98995L4.49496 10.495C4.2216 10.7683 3.77838 10.7683 3.50501 10.495C3.23165 10.2216 3.23165 9.77839 3.50501 9.50502L7.50501 5.50502Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronUpIcon;
