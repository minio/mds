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

const ArrowDownAZIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66672 1.96667C5.05331 1.96667 5.36672 2.28008 5.36672 2.66667V11.6434L6.83841 10.1717C7.11177 9.89833 7.55499 9.89833 7.82836 10.1717C8.10172 10.4451 8.10172 10.8883 7.82836 11.1616L5.16169 13.8283C5.03041 13.9596 4.85237 14.0333 4.66672 14.0333C4.48106 14.0333 4.30302 13.9596 4.17174 13.8283L1.50507 11.1616C1.23171 10.8883 1.23171 10.4451 1.50507 10.1717C1.77844 9.89833 2.22166 9.89833 2.49502 10.1717L3.96672 11.6434V2.66667C3.96672 2.28008 4.28012 1.96667 4.66672 1.96667ZM11.6667 3.36667C11.4103 3.36667 11.1645 3.46852 10.9832 3.6498C10.8019 3.83109 10.7 4.07697 10.7 4.33334V4.63334H12.6334V4.33334C12.6334 4.07697 12.5315 3.83109 12.3503 3.6498C12.169 3.46852 11.9231 3.36667 11.6667 3.36667ZM14.0334 4.33334C14.0334 3.70566 13.784 3.10369 13.3402 2.65986C12.8964 2.21602 12.2944 1.96667 11.6667 1.96667C11.039 1.96667 10.4371 2.21602 9.99323 2.65986C9.54939 3.10369 9.30005 3.70566 9.30005 4.33334V6.66667C9.30005 7.05327 9.61345 7.36667 10 7.36667C10.3866 7.36667 10.7 7.05327 10.7 6.66667V6.03334H12.6334V6.66667C12.6334 7.05327 12.9468 7.36667 13.3334 7.36667C13.72 7.36667 14.0334 7.05327 14.0334 6.66667V4.33334ZM9.30005 9.33334C9.30005 8.94674 9.61345 8.63334 10 8.63334H13.3334C13.605 8.63334 13.8521 8.79046 13.9673 9.03643C14.0825 9.2824 14.045 9.57281 13.8711 9.78147L11.4946 12.6333H13.3334C13.72 12.6333 14.0334 12.9467 14.0334 13.3333C14.0334 13.7199 13.72 14.0333 13.3334 14.0333H10C9.72844 14.0333 9.48134 13.8762 9.36614 13.6302C9.25093 13.3843 9.28841 13.0939 9.46229 12.8852L11.8389 10.0333H10C9.61345 10.0333 9.30005 9.71994 9.30005 9.33334Z"
      fill="currentColor"
      fillOpacity="0.65"
    />
  </svg>
);

export default ArrowDownAZIcon;
