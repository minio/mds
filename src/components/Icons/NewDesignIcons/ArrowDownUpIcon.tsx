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

const ArrowDownUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.66672 1.96667C5.05331 1.96667 5.36672 2.28008 5.36672 2.66667V11.6434L6.83841 10.1717C7.11177 9.89833 7.55499 9.89833 7.82836 10.1717C8.10172 10.4451 8.10172 10.8883 7.82836 11.1616L5.16169 13.8283C4.88832 14.1017 4.44511 14.1017 4.17174 13.8283L1.50507 11.1616C1.23171 10.8883 1.23171 10.4451 1.50507 10.1717C1.77844 9.89833 2.22166 9.89833 2.49502 10.1717L3.96672 11.6434V2.66667C3.96672 2.28008 4.28012 1.96667 4.66672 1.96667ZM10.8384 2.1717C11.1118 1.89833 11.555 1.89833 11.8284 2.1717L14.495 4.83837C14.7684 5.11173 14.7684 5.55495 14.495 5.82832C14.2217 6.10168 13.7784 6.10168 13.5051 5.82832L12.0334 4.35662V13.3333C12.0334 13.7199 11.72 14.0333 11.3334 14.0333C10.9468 14.0333 10.6334 13.7199 10.6334 13.3333V4.35662L9.16169 5.82832C8.88832 6.10168 8.44511 6.10168 8.17174 5.82832C7.89837 5.55495 7.89837 5.11173 8.17174 4.83837L10.8384 2.1717Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowDownUpIcon;
