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

const ArrowDownZAIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66672 1.96667C5.05331 1.96667 5.36672 2.28008 5.36672 2.66667V11.6434L6.83841 10.1717C7.11177 9.89833 7.55499 9.89833 7.82836 10.1717C8.10172 10.4451 8.10172 10.8883 7.82836 11.1616L5.16169 13.8283C5.03041 13.9596 4.85237 14.0333 4.66672 14.0333C4.48106 14.0333 4.30302 13.9596 4.17174 13.8283L1.50507 11.1616C1.23171 10.8883 1.23171 10.4451 1.50507 10.1717C1.77844 9.89833 2.22166 9.89833 2.49502 10.1717L3.96672 11.6434V2.66667C3.96672 2.28008 4.28012 1.96667 4.66672 1.96667ZM9.30005 2.66667C9.30005 2.28008 9.61345 1.96667 10 1.96667H13.3334C13.605 1.96667 13.8521 2.1238 13.9673 2.36977C14.0825 2.61574 14.045 2.90615 13.8711 3.1148L11.4946 5.96667H13.3334C13.72 5.96667 14.0334 6.28008 14.0334 6.66667C14.0334 7.05327 13.72 7.36667 13.3334 7.36667H10C9.72844 7.36667 9.48134 7.20955 9.36614 6.96358C9.25093 6.71761 9.28841 6.4272 9.46229 6.21855L11.8389 3.36667H10C9.61345 3.36667 9.30005 3.05327 9.30005 2.66667ZM11.6667 10.0333C11.4103 10.0333 11.1645 10.1352 10.9832 10.3165C10.8019 10.4978 10.7 10.7436 10.7 11V11.3H12.6334V11C12.6334 10.7436 12.5315 10.4978 12.3503 10.3165C12.169 10.1352 11.9231 10.0333 11.6667 10.0333ZM14.0334 11C14.0334 10.3723 13.784 9.77036 13.3402 9.32652C12.8964 8.88269 12.2944 8.63334 11.6667 8.63334C11.039 8.63334 10.4371 8.88269 9.99323 9.32652C9.54939 9.77036 9.30005 10.3723 9.30005 11V13.3333C9.30005 13.7199 9.61345 14.0333 10 14.0333C10.3866 14.0333 10.7 13.7199 10.7 13.3333V12.7H12.6334V13.3333C12.6334 13.7199 12.9468 14.0333 13.3334 14.0333C13.72 14.0333 14.0334 13.7199 14.0334 13.3333V11Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDownZAIcon;
