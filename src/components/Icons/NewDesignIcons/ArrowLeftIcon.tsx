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

const ArrowLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.49497 2.83836C8.76834 3.11172 8.76834 3.55494 8.49497 3.82831L5.02328 7.3H12.6667C13.0533 7.3 13.3667 7.6134 13.3667 8C13.3667 8.3866 13.0533 8.7 12.6667 8.7H5.02328L8.49497 12.1717C8.76834 12.4451 8.76834 12.8883 8.49497 13.1616C8.22161 13.435 7.77839 13.435 7.50502 13.1616L2.83836 8.49497C2.56499 8.22161 2.56499 7.77839 2.83836 7.50502L7.50502 2.83836C7.77839 2.56499 8.22161 2.56499 8.49497 2.83836Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowLeftIcon;
