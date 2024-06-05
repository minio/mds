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

const ChevronFirstIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66667 3.3C5.05327 3.3 5.36667 3.6134 5.36667 4V12C5.36667 12.3866 5.05327 12.7 4.66667 12.7C4.28008 12.7 3.96667 12.3866 3.96667 12V4C3.96667 3.6134 4.28008 3.3 4.66667 3.3ZM10.8384 3.50502C11.1117 3.23166 11.5549 3.23166 11.8283 3.50502C12.1017 3.77839 12.1017 4.22161 11.8283 4.49497L8.32329 8L11.8283 11.505C12.1017 11.7784 12.1017 12.2216 11.8283 12.495C11.5549 12.7683 11.1117 12.7683 10.8384 12.495L6.83837 8.49497C6.565 8.22161 6.565 7.77839 6.83837 7.50502L10.8384 3.50502Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronFirstIcon;
