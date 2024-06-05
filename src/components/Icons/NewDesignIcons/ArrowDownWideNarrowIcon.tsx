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

const ArrowDownWideNarrowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66672 1.96667C5.05331 1.96667 5.36672 2.28008 5.36672 2.66667V11.6434L6.83841 10.1717C7.11177 9.89833 7.55499 9.89833 7.82836 10.1717C8.10172 10.4451 8.10172 10.8883 7.82836 11.1616L5.16169 13.8283C4.88832 14.1017 4.44511 14.1017 4.17174 13.8283L1.50507 11.1616C1.23171 10.8883 1.23171 10.4451 1.50507 10.1717C1.77844 9.89833 2.22166 9.89833 2.49502 10.1717L3.96672 11.6434V2.66667C3.96672 2.28008 4.28012 1.96667 4.66672 1.96667ZM6.63338 2.66667C6.63338 2.28008 6.94678 1.96667 7.33338 1.96667H14C14.3866 1.96667 14.7 2.28008 14.7 2.66667C14.7 3.05327 14.3866 3.36667 14 3.36667H7.33338C6.94678 3.36667 6.63338 3.05327 6.63338 2.66667ZM6.63338 5.33334C6.63338 4.94674 6.94678 4.63334 7.33338 4.63334H12C12.3866 4.63334 12.7 4.94674 12.7 5.33334C12.7 5.71994 12.3866 6.03334 12 6.03334H7.33338C6.94678 6.03334 6.63338 5.71994 6.63338 5.33334ZM6.63338 8.00001C6.63338 7.61341 6.94678 7.30001 7.33338 7.30001H10C10.3866 7.30001 10.7 7.61341 10.7 8.00001C10.7 8.38661 10.3866 8.70001 10 8.70001H7.33338C6.94678 8.70001 6.63338 8.38661 6.63338 8.00001Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDownWideNarrowIcon;
