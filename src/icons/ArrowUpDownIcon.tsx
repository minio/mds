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

const ArrowUpDownIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.17168 2.1717C4.44505 1.89833 4.88826 1.89833 5.16163 2.1717L7.8283 4.83837C8.10166 5.11173 8.10166 5.55495 7.8283 5.82832C7.55493 6.10168 7.11171 6.10168 6.83835 5.82832L5.36665 4.35662V13.3333C5.36665 13.7199 5.05325 14.0333 4.66665 14.0333C4.28006 14.0333 3.96665 13.7199 3.96665 13.3333V4.35662L2.49496 5.82832C2.2216 6.10168 1.77838 6.10168 1.50501 5.82832C1.23165 5.55495 1.23165 5.11173 1.50501 4.83837L4.17168 2.1717ZM11.3333 1.96667C11.7199 1.96667 12.0333 2.28008 12.0333 2.66667V11.6434L13.505 10.1717C13.7784 9.89833 14.2216 9.89833 14.495 10.1717C14.7683 10.4451 14.7683 10.8883 14.495 11.1616L11.8283 13.8283C11.5549 14.1017 11.1117 14.1017 10.8383 13.8283L8.17168 11.1616C7.89831 10.8883 7.89831 10.4451 8.17168 10.1717C8.44505 9.89833 8.88826 9.89833 9.16163 10.1717L10.6333 11.6434V2.66667C10.6333 2.28008 10.9467 1.96667 11.3333 1.96667Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowUpDownIcon;
