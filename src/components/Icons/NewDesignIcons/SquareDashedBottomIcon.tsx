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

const SquareDashedBottomIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33332 2.70005C3.16535 2.70005 3.00426 2.76677 2.88549 2.88555C2.76671 3.00432 2.69999 3.16541 2.69999 3.33338V12.6667C2.69999 12.8347 2.76671 12.9958 2.88549 13.1145C3.00426 13.2333 3.16535 13.3 3.33332 13.3C3.71992 13.3 4.03332 13.6135 4.03332 14C4.03332 14.3866 3.71992 14.7 3.33332 14.7C2.79405 14.7 2.27686 14.4858 1.89554 14.1045C1.51421 13.7232 1.29999 13.206 1.29999 12.6667V3.33338C1.29999 2.79411 1.51421 2.27692 1.89554 1.8956C2.27686 1.51427 2.79405 1.30005 3.33332 1.30005H12.6667C13.2059 1.30005 13.7231 1.51427 14.1044 1.8956C14.4858 2.27692 14.7 2.79411 14.7 3.33338V12.6667C14.7 13.206 14.4858 13.7232 14.1044 14.1045C13.7231 14.4858 13.2059 14.7 12.6667 14.7C12.2801 14.7 11.9667 14.3866 11.9667 14C11.9667 13.6135 12.2801 13.3 12.6667 13.3C12.8346 13.3 12.9957 13.2333 13.1145 13.1145C13.2333 12.9958 13.3 12.8347 13.3 12.6667V3.33338C13.3 3.16541 13.2333 3.00432 13.1145 2.88555C12.9957 2.76677 12.8346 2.70005 12.6667 2.70005H3.33332ZM5.29999 14C5.29999 13.6135 5.61339 13.3 5.99999 13.3H6.66665C7.05325 13.3 7.36665 13.6135 7.36665 14C7.36665 14.3866 7.05325 14.7 6.66665 14.7H5.99999C5.61339 14.7 5.29999 14.3866 5.29999 14ZM8.63332 14C8.63332 13.6135 8.94672 13.3 9.33332 13.3H9.99999C10.3866 13.3 10.7 13.6135 10.7 14C10.7 14.3866 10.3866 14.7 9.99999 14.7H9.33332C8.94672 14.7 8.63332 14.3866 8.63332 14Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareDashedBottomIcon;
