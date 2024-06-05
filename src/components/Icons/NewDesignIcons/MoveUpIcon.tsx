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

const MoveUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50502 0.838326C7.77839 0.564959 8.22161 0.564959 8.49497 0.838326L11.1616 3.50499C11.435 3.77836 11.435 4.22158 11.1616 4.49494C10.8883 4.76831 10.4451 4.76831 10.1717 4.49494L8.7 3.02325V14.6666C8.7 15.0532 8.3866 15.3666 8 15.3666C7.6134 15.3666 7.3 15.0532 7.3 14.6666V3.02325L5.82831 4.49494C5.55494 4.76831 5.11172 4.76831 4.83836 4.49494C4.56499 4.22158 4.56499 3.77836 4.83836 3.50499L7.50502 0.838326Z"
      fill="currentColor"
    />
  </svg>
);
export default MoveUpIcon;
