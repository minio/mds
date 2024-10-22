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

const ArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50502 2.83836C7.77839 2.56499 8.22161 2.56499 8.49497 2.83836L13.1616 7.50502C13.435 7.77839 13.435 8.22161 13.1616 8.49497L8.49497 13.1616C8.22161 13.435 7.77839 13.435 7.50502 13.1616C7.23166 12.8883 7.23166 12.4451 7.50502 12.1717L10.9767 8.7H3.33333C2.94673 8.7 2.63333 8.3866 2.63333 8C2.63333 7.6134 2.94673 7.3 3.33333 7.3H10.9767L7.50502 3.82831C7.23166 3.55494 7.23166 3.11172 7.50502 2.83836Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowRightIcon;
