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

const CodeXmlIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.87543 1.99853C10.2444 2.11384 10.4501 2.50645 10.3348 2.87546L7.00144 13.5421C6.88612 13.9111 6.49351 14.1168 6.12451 14.0015C5.75551 13.8862 5.54985 13.4935 5.66516 13.1245L8.9985 2.45787C9.11381 2.08887 9.50642 1.88321 9.87543 1.99853ZM4.49494 4.83836C4.76831 5.11172 4.76831 5.55494 4.49494 5.8283L2.32325 8L4.49494 10.1717C4.76831 10.4451 4.76831 10.8883 4.49494 11.1616C4.22158 11.435 3.77836 11.435 3.50499 11.1616L0.838326 8.49497C0.564959 8.2216 0.564959 7.77839 0.838326 7.50502L3.50499 4.83836C3.77836 4.56499 4.22158 4.56499 4.49494 4.83836ZM11.505 4.83836C11.7784 4.56499 12.2216 4.56499 12.4949 4.83836L15.1616 7.50502C15.435 7.77839 15.435 8.2216 15.1616 8.49497L12.4949 11.1616C12.2216 11.435 11.7784 11.435 11.505 11.1616C11.2316 10.8883 11.2316 10.4451 11.505 10.1717L13.6767 8L11.505 5.8283C11.2316 5.55494 11.2316 5.11172 11.505 4.83836Z"
      fill="currentColor"
    />
  </svg>
);
export default CodeXmlIcon;
