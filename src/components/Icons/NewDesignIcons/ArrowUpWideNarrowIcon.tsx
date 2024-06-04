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

const ArrowUpWideNarrowIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.17174 2.1717C4.44511 1.89833 4.88832 1.89833 5.16169 2.1717L7.82836 4.83837C8.10172 5.11173 8.10172 5.55495 7.82836 5.82832C7.55499 6.10168 7.11177 6.10168 6.83841 5.82832L5.36672 4.35662V13.3333C5.36672 13.7199 5.05331 14.0333 4.66672 14.0333C4.28012 14.0333 3.96672 13.7199 3.96672 13.3333V4.35662L2.49502 5.82832C2.22166 6.10168 1.77844 6.10168 1.50507 5.82832C1.23171 5.55495 1.23171 5.11173 1.50507 4.83837L4.17174 2.1717ZM14 8.70001H7.33338C6.94678 8.70001 6.63338 8.38661 6.63338 8.00001C6.63338 7.61341 6.94678 7.30001 7.33338 7.30001H14C14.3866 7.30001 14.7 7.61341 14.7 8.00001C14.7 8.38661 14.3866 8.70001 14 8.70001ZM6.63338 10.6667C6.63338 10.2801 6.94678 9.96667 7.33338 9.96667H12C12.3866 9.96667 12.7 10.2801 12.7 10.6667C12.7 11.0533 12.3866 11.3667 12 11.3667H7.33338C6.94678 11.3667 6.63338 11.0533 6.63338 10.6667ZM10 14.0333H7.33338C6.94678 14.0333 6.63338 13.7199 6.63338 13.3333C6.63338 12.9467 6.94678 12.6333 7.33338 12.6333H10C10.3866 12.6333 10.7 12.9467 10.7 13.3333C10.7 13.7199 10.3866 14.0333 10 14.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowUpWideNarrowIcon;
