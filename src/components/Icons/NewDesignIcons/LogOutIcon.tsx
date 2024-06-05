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

const LogOutIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.69999C3.16541 2.69999 3.00432 2.76671 2.88555 2.88549C2.76677 3.00426 2.70005 3.16535 2.70005 3.33332V12.6667C2.70005 12.8346 2.76677 12.9957 2.88555 13.1145C3.00432 13.2333 3.16541 13.3 3.33338 13.3H6.00005C6.38665 13.3 6.70005 13.6134 6.70005 14C6.70005 14.3866 6.38665 14.7 6.00005 14.7H3.33338C2.79411 14.7 2.27692 14.4858 1.8956 14.1044C1.51427 13.7231 1.30005 13.2059 1.30005 12.6667V3.33332C1.30005 2.79405 1.51427 2.27686 1.8956 1.89554C2.27692 1.51421 2.79411 1.29999 3.33338 1.29999H6.00005C6.38665 1.29999 6.70005 1.61339 6.70005 1.99999C6.70005 2.38659 6.38665 2.69999 6.00005 2.69999H3.33338ZM10.1717 4.17168C10.4451 3.89831 10.8883 3.89831 11.1617 4.17168L14.495 7.50501C14.7684 7.77838 14.7684 8.2216 14.495 8.49496L11.1617 11.8283C10.8883 12.1017 10.4451 12.1017 10.1717 11.8283C9.89837 11.5549 9.89837 11.1117 10.1717 10.8383L12.3101 8.69999H6.00005C5.61345 8.69999 5.30005 8.38659 5.30005 7.99999C5.30005 7.61339 5.61345 7.29999 6.00005 7.29999H12.3101L10.1717 5.16163C9.89837 4.88826 9.89837 4.44505 10.1717 4.17168Z"
      fill="currentColor"
    />
  </svg>
);
export default LogOutIcon;
