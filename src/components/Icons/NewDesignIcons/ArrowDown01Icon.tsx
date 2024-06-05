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

const ArrowDown01Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66672 1.96667C5.05331 1.96667 5.36672 2.28008 5.36672 2.66667V11.6434L6.83841 10.1717C7.11177 9.89833 7.55499 9.89833 7.82836 10.1717C8.10172 10.4451 8.10172 10.8883 7.82836 11.1616L5.16169 13.8283C4.88832 14.1017 4.44511 14.1017 4.17174 13.8283L1.50507 11.1616C1.23171 10.8883 1.23171 10.4451 1.50507 10.1717C1.77844 9.89833 2.22166 9.89833 2.49502 10.1717L3.96672 11.6434V2.66667C3.96672 2.28008 4.28012 1.96667 4.66672 1.96667ZM11.3334 3.36667C10.9836 3.36667 10.7 3.65023 10.7 4.00001V5.33334C10.7 5.68312 10.9836 5.96667 11.3334 5.96667C11.6832 5.96667 11.9667 5.68312 11.9667 5.33334V4.00001C11.9667 3.65023 11.6832 3.36667 11.3334 3.36667ZM9.30005 4.00001C9.30005 2.87703 10.2104 1.96667 11.3334 1.96667C12.4564 1.96667 13.3667 2.87703 13.3667 4.00001V5.33334C13.3667 6.45632 12.4564 7.36667 11.3334 7.36667C10.2104 7.36667 9.30005 6.45632 9.30005 5.33334V4.00001ZM9.30005 9.33334C9.30005 8.94674 9.61345 8.63334 10 8.63334H11.3334C11.72 8.63334 12.0334 8.94674 12.0334 9.33334V12.6333H12.6667C13.0533 12.6333 13.3667 12.9467 13.3667 13.3333C13.3667 13.7199 13.0533 14.0333 12.6667 14.0333H10C9.61345 14.0333 9.30005 13.7199 9.30005 13.3333C9.30005 12.9467 9.61345 12.6333 10 12.6333H10.6334V10.0333H10C9.61345 10.0333 9.30005 9.71994 9.30005 9.33334Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDown01Icon;
