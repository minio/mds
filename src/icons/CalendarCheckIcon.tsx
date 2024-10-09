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

const CalendarCheckIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.33332 0.633333C5.71992 0.633333 6.03332 0.946734 6.03332 1.33333V1.96667H9.96665V1.33333C9.96665 0.946734 10.2801 0.633333 10.6667 0.633333C11.0533 0.633333 11.3667 0.946734 11.3667 1.33333V1.96667H12.6667C13.7896 1.96667 14.7 2.87702 14.7 4V13.3333C14.7 14.4563 13.7896 15.3667 12.6667 15.3667H3.33332C2.21034 15.3667 1.29999 14.4563 1.29999 13.3333V4C1.29999 2.87702 2.21034 1.96667 3.33332 1.96667H4.63332V1.33333C4.63332 0.946734 4.94672 0.633333 5.33332 0.633333ZM4.63332 3.36667H3.33332C2.98354 3.36667 2.69999 3.65022 2.69999 4V5.96667H13.3V4C13.3 3.65022 13.0164 3.36667 12.6667 3.36667H11.3667V4C11.3667 4.3866 11.0533 4.7 10.6667 4.7C10.2801 4.7 9.96665 4.3866 9.96665 4V3.36667H6.03332V4C6.03332 4.3866 5.71992 4.7 5.33332 4.7C4.94672 4.7 4.63332 4.3866 4.63332 4V3.36667ZM13.3 7.36667H2.69999V13.3333C2.69999 13.6831 2.98354 13.9667 3.33332 13.9667H12.6667C13.0164 13.9667 13.3 13.6831 13.3 13.3333V7.36667ZM10.495 8.83836C10.7683 9.11172 10.7683 9.55494 10.495 9.82831L7.8283 12.495C7.55493 12.7683 7.11171 12.7683 6.83835 12.495L5.50501 11.1616C5.23165 10.8883 5.23165 10.4451 5.50501 10.1717C5.77838 9.89832 6.2216 9.89832 6.49496 10.1717L7.33332 11.01L9.50501 8.83836C9.77838 8.56499 10.2216 8.56499 10.495 8.83836Z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarCheckIcon;
