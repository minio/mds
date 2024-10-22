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

const BarChartHorizontalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.00005 1.3C2.38665 1.3 2.70005 1.6134 2.70005 2V13.3H14C14.3866 13.3 14.7 13.6134 14.7 14C14.7 14.3866 14.3866 14.7 14 14.7H2.00005C1.61345 14.7 1.30005 14.3866 1.30005 14V2C1.30005 1.6134 1.61345 1.3 2.00005 1.3ZM3.96672 4C3.96672 3.6134 4.28012 3.3 4.66672 3.3H6.66672C7.05331 3.3 7.36672 3.6134 7.36672 4C7.36672 4.3866 7.05331 4.7 6.66672 4.7H4.66672C4.28012 4.7 3.96672 4.3866 3.96672 4ZM3.96672 7.33334C3.96672 6.94674 4.28012 6.63334 4.66672 6.63334H12.6667C13.0533 6.63334 13.3667 6.94674 13.3667 7.33334C13.3667 7.71994 13.0533 8.03334 12.6667 8.03334H4.66672C4.28012 8.03334 3.96672 7.71994 3.96672 7.33334ZM3.96672 10.6667C3.96672 10.2801 4.28012 9.96667 4.66672 9.96667H10C10.3866 9.96667 10.7 10.2801 10.7 10.6667C10.7 11.0533 10.3866 11.3667 10 11.3667H4.66672C4.28012 11.3667 3.96672 11.0533 3.96672 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default BarChartHorizontalIcon;
