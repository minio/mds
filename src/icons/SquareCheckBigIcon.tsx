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

const SquareCheckBigIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33333 2.70005C3.16536 2.70005 3.00427 2.76677 2.8855 2.88555C2.76673 3.00432 2.7 3.16541 2.7 3.33338V12.6667C2.7 12.8347 2.76673 12.9958 2.8855 13.1145C3.00427 13.2333 3.16536 13.3 3.33333 13.3H12.6667C12.8346 13.3 12.9957 13.2333 13.1145 13.1145C13.2333 12.9958 13.3 12.8347 13.3 12.6667V8.00005C13.3 7.61345 13.6134 7.30005 14 7.30005C14.3866 7.30005 14.7 7.61345 14.7 8.00005V12.6667C14.7 13.206 14.4858 13.7232 14.1044 14.1045C13.7231 14.4858 13.2059 14.7 12.6667 14.7H3.33333C2.79406 14.7 2.27687 14.4858 1.89555 14.1045C1.51422 13.7232 1.3 13.206 1.3 12.6667V3.33338C1.3 2.79411 1.51422 2.27692 1.89555 1.8956C2.27687 1.51427 2.79406 1.30005 3.33333 1.30005H10.6667C11.0533 1.30005 11.3667 1.61345 11.3667 2.00005C11.3667 2.38665 11.0533 2.70005 10.6667 2.70005H3.33333ZM15.1616 2.17174C15.435 2.44511 15.435 2.88832 15.1616 3.16169L8.49497 9.82836C8.22161 10.1017 7.77839 10.1017 7.50502 9.82836L5.50502 7.82836C5.23166 7.55499 5.23166 7.11177 5.50502 6.83841C5.77839 6.56504 6.22161 6.56504 6.49497 6.83841L8 8.34343L14.1717 2.17174C14.4451 1.89837 14.8883 1.89837 15.1616 2.17174Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareCheckBigIcon;
