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

const ArrowUpZAIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66672 1.96667C4.85237 1.96667 5.03041 2.04042 5.16169 2.1717L7.82836 4.83837C8.10172 5.11173 8.10172 5.55495 7.82836 5.82832C7.55499 6.10168 7.11177 6.10168 6.83841 5.82832L5.36672 4.35662V13.3333C5.36672 13.7199 5.05331 14.0333 4.66672 14.0333C4.28012 14.0333 3.96672 13.7199 3.96672 13.3333V4.35662L2.49502 5.82832C2.22166 6.10168 1.77844 6.10168 1.50507 5.82832C1.23171 5.55495 1.23171 5.11173 1.50507 4.83837L4.17174 2.1717C4.30302 2.04042 4.48106 1.96667 4.66672 1.96667ZM11.8389 3.36667H10C9.61345 3.36667 9.30005 3.05327 9.30005 2.66667C9.30005 2.28008 9.61345 1.96667 10 1.96667H13.3334C13.605 1.96667 13.8521 2.1238 13.9673 2.36977C14.0825 2.61574 14.045 2.90615 13.8711 3.1148L11.4946 5.96667H13.3334C13.72 5.96667 14.0334 6.28008 14.0334 6.66667C14.0334 7.05327 13.72 7.36667 13.3334 7.36667H10C9.72844 7.36667 9.48134 7.20955 9.36614 6.96358C9.25093 6.71761 9.28841 6.4272 9.46229 6.21855L11.8389 3.36667ZM11.6667 10.0333C11.4103 10.0333 11.1645 10.1352 10.9832 10.3165C10.8019 10.4978 10.7 10.7436 10.7 11V11.3H12.6334V11C12.6334 10.7436 12.5315 10.4978 12.3503 10.3165C12.169 10.1352 11.9231 10.0333 11.6667 10.0333ZM14.0334 11C14.0334 10.3723 13.784 9.77036 13.3402 9.32652C12.8964 8.88269 12.2944 8.63334 11.6667 8.63334C11.039 8.63334 10.4371 8.88269 9.99323 9.32652C9.54939 9.77036 9.30005 10.3723 9.30005 11V13.3333C9.30005 13.7199 9.61345 14.0333 10 14.0333C10.3866 14.0333 10.7 13.7199 10.7 13.3333V12.7H12.6334V13.3333C12.6334 13.7199 12.9468 14.0333 13.3334 14.0333C13.72 14.0333 14.0334 13.7199 14.0334 13.3333V11Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowUpZAIcon;
