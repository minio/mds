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

const BarChartHorizontalBigIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.00005 1.3C2.38665 1.3 2.70005 1.6134 2.70005 2V13.3H14C14.3866 13.3 14.7 13.6134 14.7 14C14.7 14.3866 14.3866 14.7 14 14.7H2.00005C1.61345 14.7 1.30005 14.3866 1.30005 14V2C1.30005 1.6134 1.61345 1.3 2.00005 1.3ZM5.36672 4.03334V5.3H11.9667V4.03334H5.36672ZM3.96672 4C3.96672 3.24521 4.57859 2.63334 5.33338 2.63334H12C12.7548 2.63334 13.3667 3.24521 13.3667 4V5.33334C13.3667 6.08813 12.7548 6.7 12 6.7H5.33338C4.57859 6.7 3.96672 6.08813 3.96672 5.33334V4ZM5.36672 9.36667V10.6333H8.63338V9.36667H5.36672ZM3.96672 9.33334C3.96672 8.57855 4.57859 7.96667 5.33338 7.96667H8.66672C9.4215 7.96667 10.0334 8.57855 10.0334 9.33334V10.6667C10.0334 11.4215 9.4215 12.0333 8.66672 12.0333H5.33338C4.57859 12.0333 3.96672 11.4215 3.96672 10.6667V9.33334Z"
      fill="currentColor"
    />
  </svg>
);
export default BarChartHorizontalBigIcon;
