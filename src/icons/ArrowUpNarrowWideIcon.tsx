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

const ArrowUpNarrowWideIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.17168 2.1717C4.44505 1.89833 4.88826 1.89833 5.16163 2.1717L7.8283 4.83837C8.10166 5.11173 8.10166 5.55495 7.8283 5.82832C7.55493 6.10168 7.11171 6.10168 6.83835 5.82832L5.36665 4.35662V13.3333C5.36665 13.7199 5.05325 14.0333 4.66665 14.0333C4.28006 14.0333 3.96665 13.7199 3.96665 13.3333V4.35662L2.49496 5.82832C2.2216 6.10168 1.77838 6.10168 1.50501 5.82832C1.23165 5.55495 1.23165 5.11173 1.50501 4.83837L4.17168 2.1717ZM9.99999 8.70001H7.33332C6.94672 8.70001 6.63332 8.38661 6.63332 8.00001C6.63332 7.61341 6.94672 7.30001 7.33332 7.30001H9.99999C10.3866 7.30001 10.7 7.61341 10.7 8.00001C10.7 8.38661 10.3866 8.70001 9.99999 8.70001ZM6.63332 10.6667C6.63332 10.2801 6.94672 9.96667 7.33332 9.96667H12C12.3866 9.96667 12.7 10.2801 12.7 10.6667C12.7 11.0533 12.3866 11.3667 12 11.3667H7.33332C6.94672 11.3667 6.63332 11.0533 6.63332 10.6667ZM14 14.0333H7.33332C6.94672 14.0333 6.63332 13.7199 6.63332 13.3333C6.63332 12.9467 6.94672 12.6333 7.33332 12.6333H14C14.3866 12.6333 14.7 12.9467 14.7 13.3333C14.7 13.7199 14.3866 14.0333 14 14.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowUpNarrowWideIcon;
