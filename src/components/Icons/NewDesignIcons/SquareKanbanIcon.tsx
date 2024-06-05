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

const SquareKanbanIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C2.98354 2.70005 2.69999 2.9836 2.69999 3.33338V12.6667C2.69999 13.0165 2.98354 13.3 3.33332 13.3H12.6667C13.0164 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0164 2.70005 12.6667 2.70005H3.33332ZM1.29999 3.33338C1.29999 2.2104 2.21034 1.30005 3.33332 1.30005H12.6667C13.7896 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7896 14.7 12.6667 14.7H3.33332C2.21034 14.7 1.29999 13.7897 1.29999 12.6667V3.33338ZM5.33332 3.96672C5.71992 3.96672 6.03332 4.28012 6.03332 4.66672V9.33338C6.03332 9.71998 5.71992 10.0334 5.33332 10.0334C4.94672 10.0334 4.63332 9.71998 4.63332 9.33338V4.66672C4.63332 4.28012 4.94672 3.96672 5.33332 3.96672ZM7.99999 3.96672C8.38659 3.96672 8.69999 4.28012 8.69999 4.66672V7.33338C8.69999 7.71998 8.38659 8.03338 7.99999 8.03338C7.61339 8.03338 7.29999 7.71998 7.29999 7.33338V4.66672C7.29999 4.28012 7.61339 3.96672 7.99999 3.96672ZM10.6667 3.96672C11.0533 3.96672 11.3667 4.28012 11.3667 4.66672V10.6667C11.3667 11.0533 11.0533 11.3667 10.6667 11.3667C10.2801 11.3667 9.96665 11.0533 9.96665 10.6667V4.66672C9.96665 4.28012 10.2801 3.96672 10.6667 3.96672Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareKanbanIcon;
