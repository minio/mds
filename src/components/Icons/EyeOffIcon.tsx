// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

const EyeOffIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    {...props}
  >
    <g id="eye-off">
      <path
        id="Vector"
        d="M9.88 9.88C9.58525 10.1546 9.34884 10.4859 9.18488 10.8538C9.02091 11.2218 8.93274 11.6191 8.92563 12.0219C8.91853 12.4247 8.99262 12.8248 9.14351 13.1984C9.29439 13.5719 9.51897 13.9113 9.80385 14.1962C10.0887 14.481 10.4281 14.7056 10.8016 14.8565C11.1752 15.0074 11.5753 15.0815 11.9781 15.0744C12.3809 15.0673 12.7782 14.9791 13.1462 14.8151C13.5141 14.6512 13.8454 14.4147 14.12 14.12M10.73 5.08C11.1513 5.02751 11.5754 5.00079 12 5C19 5 22 12 22 12C21.5529 12.9571 20.9922 13.8569 20.33 14.68M6.61 6.61C4.62125 7.96462 3.02987 9.82526 2 12C2 12 5 19 12 19C13.9159 19.0051 15.7908 18.4451 17.39 17.39M2 2L22 22"
        stroke="currentColor"
        fill="none"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </svg>
);

export default EyeOffIcon;
