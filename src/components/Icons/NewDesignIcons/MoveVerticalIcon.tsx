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

const MoveVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50502 0.838326C7.77839 0.564959 8.22161 0.564959 8.49497 0.838326L11.1616 3.50499C11.435 3.77836 11.435 4.22158 11.1616 4.49494C10.8883 4.76831 10.4451 4.76831 10.1717 4.49494L8.7 3.02325V12.9767L10.1717 11.505C10.4451 11.2316 10.8883 11.2316 11.1616 11.505C11.435 11.7784 11.435 12.2216 11.1616 12.4949L8.49497 15.1616C8.22161 15.435 7.77839 15.435 7.50502 15.1616L4.83836 12.4949C4.56499 12.2216 4.56499 11.7784 4.83836 11.505C5.11172 11.2316 5.55494 11.2316 5.82831 11.505L7.3 12.9767V3.02325L5.82831 4.49494C5.55494 4.76831 5.11172 4.76831 4.83836 4.49494C4.56499 4.22158 4.56499 3.77836 4.83836 3.50499L7.50502 0.838326Z"
      fill="currentColor"
    />
  </svg>
);
export default MoveVerticalIcon;
