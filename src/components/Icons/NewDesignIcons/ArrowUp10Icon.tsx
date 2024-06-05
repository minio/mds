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

const ArrowUp10Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.17168 2.1717C4.44505 1.89833 4.88826 1.89833 5.16163 2.1717L7.8283 4.83837C8.10166 5.11173 8.10166 5.55495 7.8283 5.82832C7.55493 6.10168 7.11171 6.10168 6.83835 5.82832L5.36665 4.35662V13.3333C5.36665 13.7199 5.05325 14.0333 4.66665 14.0333C4.28006 14.0333 3.96665 13.7199 3.96665 13.3333V4.35662L2.49496 5.82832C2.2216 6.10168 1.77838 6.10168 1.50501 5.82832C1.23165 5.55495 1.23165 5.11173 1.50501 4.83837L4.17168 2.1717ZM9.99999 1.96667H11.3333C11.7199 1.96667 12.0333 2.28008 12.0333 2.66667V5.96667H12.6667C13.0533 5.96667 13.3667 6.28008 13.3667 6.66667C13.3667 7.05327 13.0533 7.36667 12.6667 7.36667H9.99999C9.61339 7.36667 9.29999 7.05327 9.29999 6.66667C9.29999 6.28008 9.61339 5.96667 9.99999 5.96667H10.6333V3.36667H9.99999C9.61339 3.36667 9.29999 3.05327 9.29999 2.66667C9.29999 2.28008 9.61339 1.96667 9.99999 1.96667ZM11.3333 10.0333C10.9835 10.0333 10.7 10.3169 10.7 10.6667V12C10.7 12.3498 10.9835 12.6333 11.3333 12.6333C11.6831 12.6333 11.9667 12.3498 11.9667 12V10.6667C11.9667 10.3169 11.6831 10.0333 11.3333 10.0333ZM9.29999 10.6667C9.29999 9.5437 10.2103 8.63334 11.3333 8.63334C12.4563 8.63334 13.3667 9.5437 13.3667 10.6667V12C13.3667 13.123 12.4563 14.0333 11.3333 14.0333C10.2103 14.0333 9.29999 13.123 9.29999 12V10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowUp10Icon;
