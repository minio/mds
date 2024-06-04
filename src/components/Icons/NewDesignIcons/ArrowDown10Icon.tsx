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

const ArrowDown10Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66672 1.96667C5.05331 1.96667 5.36672 2.28008 5.36672 2.66667V11.6434L6.83841 10.1717C7.11177 9.89833 7.55499 9.89833 7.82836 10.1717C8.10172 10.4451 8.10172 10.8883 7.82836 11.1616L5.16169 13.8283C4.88832 14.1017 4.44511 14.1017 4.17174 13.8283L1.50507 11.1616C1.23171 10.8883 1.23171 10.4451 1.50507 10.1717C1.77844 9.89833 2.22166 9.89833 2.49502 10.1717L3.96672 11.6434V2.66667C3.96672 2.28008 4.28012 1.96667 4.66672 1.96667ZM9.30005 2.66667C9.30005 2.28008 9.61345 1.96667 10 1.96667H11.3334C11.72 1.96667 12.0334 2.28008 12.0334 2.66667V5.96667H12.6667C13.0533 5.96667 13.3667 6.28008 13.3667 6.66667C13.3667 7.05327 13.0533 7.36667 12.6667 7.36667H10C9.61345 7.36667 9.30005 7.05327 9.30005 6.66667C9.30005 6.28008 9.61345 5.96667 10 5.96667H10.6334V3.36667H10C9.61345 3.36667 9.30005 3.05327 9.30005 2.66667ZM11.3334 10.0333C10.9836 10.0333 10.7 10.3169 10.7 10.6667V12C10.7 12.3498 10.9836 12.6333 11.3334 12.6333C11.6832 12.6333 11.9667 12.3498 11.9667 12V10.6667C11.9667 10.3169 11.6832 10.0333 11.3334 10.0333ZM9.30005 10.6667C9.30005 9.5437 10.2104 8.63334 11.3334 8.63334C12.4564 8.63334 13.3667 9.5437 13.3667 10.6667V12C13.3667 13.123 12.4564 14.0333 11.3334 14.0333C10.2104 14.0333 9.30005 13.123 9.30005 12V10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDown10Icon;
