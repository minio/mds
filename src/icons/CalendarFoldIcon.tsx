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

const CalendarFoldIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M5.33332 0.633333C5.71992 0.633333 6.03332 0.946734 6.03332 1.33333V1.96667H9.96665V1.33333C9.96665 0.946734 10.2801 0.633333 10.6667 0.633333C11.0533 0.633333 11.3667 0.946734 11.3667 1.33333V1.96667H12.6667C13.2059 1.96667 13.7231 2.18089 14.1044 2.56222C14.4858 2.94354 14.7 3.46073 14.7 4V11.3333C14.7 11.519 14.6262 11.697 14.495 11.8283L11.1616 15.1616C11.0304 15.2929 10.8523 15.3667 10.6667 15.3667H3.33332C2.79405 15.3667 2.27686 15.1524 1.89554 14.7711C1.51421 14.3898 1.29999 13.8726 1.29999 13.3333V4C1.29999 3.46073 1.51421 2.94354 1.89554 2.56222C2.27686 2.18089 2.79405 1.96667 3.33332 1.96667H4.63332V1.33333C4.63332 0.946734 4.94672 0.633333 5.33332 0.633333ZM4.63332 3.36667H3.33332C3.16535 3.36667 3.00426 3.43339 2.88549 3.55217C2.76671 3.67094 2.69999 3.83203 2.69999 4V5.96667H13.3V4C13.3 3.83203 13.2333 3.67094 13.1145 3.55217C12.9957 3.43339 12.8346 3.36667 12.6667 3.36667H11.3667V4C11.3667 4.3866 11.0533 4.7 10.6667 4.7C10.2801 4.7 9.96665 4.3866 9.96665 4V3.36667H6.03332V4C6.03332 4.3866 5.71992 4.7 5.33332 4.7C4.94672 4.7 4.63332 4.3866 4.63332 4V3.36667ZM13.3 7.36667H2.69999V13.3333C2.69999 13.5013 2.76671 13.6624 2.88549 13.7812C3.00426 13.8999 3.16535 13.9667 3.33332 13.9667H9.29999V12C9.29999 11.4607 9.51421 10.9435 9.89554 10.5622C10.2769 10.1809 10.794 9.96667 11.3333 9.96667H13.3V7.36667ZM12.9767 11.3667H11.3333C11.1654 11.3667 11.0043 11.4334 10.8855 11.5522C10.7667 11.6709 10.7 11.832 10.7 12V13.6434L12.9767 11.3667Z"
      fill="currentColor"
    />
  </svg>
);
export default CalendarFoldIcon;
