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

const FlipVerticalIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.89555 1.89554C2.27687 1.51421 2.79406 1.29999 3.33333 1.29999H12.6667C13.2059 1.29999 13.7231 1.51421 14.1044 1.89554C14.4858 2.27686 14.7 2.79405 14.7 3.33332V5.33332C14.7 5.71992 14.3866 6.03332 14 6.03332C13.6134 6.03332 13.3 5.71992 13.3 5.33332V3.33332C13.3 3.16535 13.2333 3.00426 13.1145 2.88549C12.9957 2.76671 12.8346 2.69999 12.6667 2.69999H3.33333C3.16536 2.69999 3.00427 2.76671 2.8855 2.88549C2.76672 3.00426 2.7 3.16535 2.7 3.33332V5.33332C2.7 5.71992 2.3866 6.03332 2 6.03332C1.6134 6.03332 1.3 5.71992 1.3 5.33332V3.33332C1.3 2.79405 1.51422 2.27686 1.89555 1.89554ZM0.633331 7.99999C0.633331 7.61339 0.946732 7.29999 1.33333 7.29999H2.66666C3.05326 7.29999 3.36666 7.61339 3.36666 7.99999C3.36666 8.38659 3.05326 8.69999 2.66666 8.69999H1.33333C0.946732 8.69999 0.633331 8.38659 0.633331 7.99999ZM4.63333 7.99999C4.63333 7.61339 4.94673 7.29999 5.33333 7.29999H6.66666C7.05326 7.29999 7.36666 7.61339 7.36666 7.99999C7.36666 8.38659 7.05326 8.69999 6.66666 8.69999H5.33333C4.94673 8.69999 4.63333 8.38659 4.63333 7.99999ZM8.63333 7.99999C8.63333 7.61339 8.94673 7.29999 9.33333 7.29999H10.6667C11.0533 7.29999 11.3667 7.61339 11.3667 7.99999C11.3667 8.38659 11.0533 8.69999 10.6667 8.69999H9.33333C8.94673 8.69999 8.63333 8.38659 8.63333 7.99999ZM12.6333 7.99999C12.6333 7.61339 12.9467 7.29999 13.3333 7.29999H14.6667C15.0533 7.29999 15.3667 7.61339 15.3667 7.99999C15.3667 8.38659 15.0533 8.69999 14.6667 8.69999H13.3333C12.9467 8.69999 12.6333 8.38659 12.6333 7.99999ZM2 9.96665C2.3866 9.96665 2.7 10.2801 2.7 10.6667V12.6667C2.7 12.8346 2.76672 12.9957 2.8855 13.1145C3.00427 13.2333 3.16536 13.3 3.33333 13.3H12.6667C12.8346 13.3 12.9957 13.2333 13.1145 13.1145C13.2333 12.9957 13.3 12.8346 13.3 12.6667V10.6667C13.3 10.2801 13.6134 9.96665 14 9.96665C14.3866 9.96665 14.7 10.2801 14.7 10.6667V12.6667C14.7 13.2059 14.4858 13.7231 14.1044 14.1044C13.7231 14.4858 13.2059 14.7 12.6667 14.7H3.33333C2.79406 14.7 2.27687 14.4858 1.89555 14.1044C1.51422 13.7231 1.3 13.2059 1.3 12.6667V10.6667C1.3 10.2801 1.6134 9.96665 2 9.96665Z"
      fill="currentColor"
    />
  </svg>
);
export default FlipVerticalIcon;