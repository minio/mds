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

const StickyNoteIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.89554 1.8956C2.27686 1.51427 2.79405 1.30005 3.33332 1.30005H10.6667C10.8523 1.30005 11.0304 1.3738 11.1616 1.50507L14.495 4.83841C14.6262 4.96968 14.7 5.14773 14.7 5.33338V12.6667C14.7 13.206 14.4858 13.7232 14.1044 14.1045C13.7231 14.4858 13.2059 14.7 12.6667 14.7H3.33332C2.79405 14.7 2.27686 14.4858 1.89554 14.1045C1.51421 13.7232 1.29999 13.206 1.29999 12.6667V3.33338C1.29999 2.79411 1.51421 2.27692 1.89554 1.8956ZM12.9767 5.30005L10.7 3.02333V4.66672C10.7 4.83469 10.7667 4.99578 10.8855 5.11455C11.0043 5.23332 11.1654 5.30005 11.3333 5.30005H12.9767ZM9.29999 2.70005V4.66672C9.29999 5.20599 9.51421 5.72318 9.89554 6.1045C10.2769 6.48582 10.794 6.70005 11.3333 6.70005H13.3V12.6667C13.3 12.8347 13.2333 12.9958 13.1145 13.1145C12.9957 13.2333 12.8346 13.3 12.6667 13.3H3.33332C3.16535 13.3 3.00426 13.2333 2.88549 13.1145C2.76671 12.9958 2.69999 12.8347 2.69999 12.6667V3.33338C2.69999 3.16541 2.76671 3.00432 2.88549 2.88555C3.00426 2.76677 3.16535 2.70005 3.33332 2.70005H9.29999Z"
      fill="currentColor"
    />
  </svg>
);
export default StickyNoteIcon;
