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

const BarChartBigIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.00005 1.3C2.38665 1.3 2.70005 1.6134 2.70005 2V13.3H14C14.3866 13.3 14.7 13.6134 14.7 14C14.7 14.3866 14.3866 14.7 14 14.7H2.00005C1.61345 14.7 1.30005 14.3866 1.30005 14V2C1.30005 1.6134 1.61345 1.3 2.00005 1.3ZM10.7 4.03334V10.6333H11.9667V4.03334H10.7ZM9.30005 4C9.30005 3.24521 9.91193 2.63334 10.6667 2.63334H12C12.7548 2.63334 13.3667 3.24521 13.3667 4V10.6667C13.3667 11.4215 12.7548 12.0333 12 12.0333H10.6667C9.91193 12.0333 9.30005 11.4215 9.30005 10.6667V4ZM5.36672 7.36667V10.6333H6.63338V7.36667H5.36672ZM3.96672 7.33334C3.96672 6.57855 4.57859 5.96667 5.33338 5.96667H6.66672C7.4215 5.96667 8.03338 6.57855 8.03338 7.33334V10.6667C8.03338 11.4215 7.4215 12.0333 6.66672 12.0333H5.33338C4.57859 12.0333 3.96672 11.4215 3.96672 10.6667V7.33334Z"
      fill="currentColor"
    />
  </svg>
);
export default BarChartBigIcon;
