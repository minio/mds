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

const CircleChevronLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.03333C4.7047 2.03333 2.03333 4.7047 2.03333 8C2.03333 11.2953 4.7047 13.9667 8 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8C13.9667 4.7047 11.2953 2.03333 8 2.03333ZM0.633333 8C0.633333 3.9315 3.9315 0.633331 8 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8 15.3667C3.9315 15.3667 0.633333 12.0685 0.633333 8ZM9.82831 4.83836C10.1017 5.11172 10.1017 5.55494 9.82831 5.82831L7.65662 8L9.82831 10.1717C10.1017 10.4451 10.1017 10.8883 9.82831 11.1616C9.55494 11.435 9.11172 11.435 8.83836 11.1616L6.17169 8.49497C5.89832 8.22161 5.89832 7.77839 6.17169 7.50502L8.83836 4.83836C9.11172 4.56499 9.55494 4.56499 9.82831 4.83836Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleChevronLeftIcon;
