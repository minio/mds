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

const CircleChevronRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.03333C4.7047 2.03333 2.03333 4.7047 2.03333 8C2.03333 11.2953 4.7047 13.9667 8 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8C13.9667 4.7047 11.2953 2.03333 8 2.03333ZM0.633331 8C0.633331 3.9315 3.9315 0.633331 8 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8 15.3667C3.9315 15.3667 0.633331 12.0685 0.633331 8ZM6.17169 4.83836C6.44506 4.56499 6.88827 4.56499 7.16164 4.83836L9.82831 7.50502C10.1017 7.77839 10.1017 8.22161 9.82831 8.49497L7.16164 11.1616C6.88827 11.435 6.44506 11.435 6.17169 11.1616C5.89832 10.8883 5.89832 10.4451 6.17169 10.1717L8.34338 8L6.17169 5.82831C5.89832 5.55494 5.89832 5.11172 6.17169 4.83836Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleChevronRightIcon;
