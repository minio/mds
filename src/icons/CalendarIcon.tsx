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

const CalendarIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.33338 0.633333C5.71998 0.633333 6.03338 0.946734 6.03338 1.33333V1.96667H9.96672V1.33333C9.96672 0.946734 10.2801 0.633333 10.6667 0.633333C11.0533 0.633333 11.3667 0.946734 11.3667 1.33333V1.96667H12.6667C13.7897 1.96667 14.7 2.87702 14.7 4V13.3333C14.7 14.4563 13.7897 15.3667 12.6667 15.3667H3.33338C2.2104 15.3667 1.30005 14.4563 1.30005 13.3333V4C1.30005 2.87702 2.2104 1.96667 3.33338 1.96667H4.63338V1.33333C4.63338 0.946734 4.94678 0.633333 5.33338 0.633333ZM4.63338 3.36667H3.33338C2.9836 3.36667 2.70005 3.65022 2.70005 4V5.96667H13.3V4C13.3 3.65022 13.0165 3.36667 12.6667 3.36667H11.3667V4C11.3667 4.3866 11.0533 4.7 10.6667 4.7C10.2801 4.7 9.96672 4.3866 9.96672 4V3.36667H6.03338V4C6.03338 4.3866 5.71998 4.7 5.33338 4.7C4.94678 4.7 4.63338 4.3866 4.63338 4V3.36667ZM13.3 7.36667H2.70005V13.3333C2.70005 13.6831 2.9836 13.9667 3.33338 13.9667H12.6667C13.0165 13.9667 13.3 13.6831 13.3 13.3333V7.36667Z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarIcon;
