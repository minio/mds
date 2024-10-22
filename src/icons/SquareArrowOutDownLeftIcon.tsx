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

const SquareArrowOutDownLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.8956 1.8956C2.27692 1.51427 2.79411 1.30005 3.33338 1.30005H12.6667C13.206 1.30005 13.7232 1.51427 14.1045 1.8956C14.4858 2.27692 14.7 2.79411 14.7 3.33338V12.6667C14.7 13.206 14.4858 13.7232 14.1045 14.1045C13.7232 14.4858 13.206 14.7 12.6667 14.7H8.66672C8.28012 14.7 7.96672 14.3866 7.96672 14C7.96672 13.6135 8.28012 13.3 8.66672 13.3H12.6667C12.8347 13.3 12.9958 13.2333 13.1145 13.1145C13.2333 12.9958 13.3 12.8347 13.3 12.6667V3.33338C13.3 3.16541 13.2333 3.00432 13.1145 2.88555C12.9958 2.76677 12.8347 2.70005 12.6667 2.70005H3.33338C3.16541 2.70005 3.00432 2.76677 2.88555 2.88555C2.76677 3.00432 2.70005 3.16541 2.70005 3.33338V7.33338C2.70005 7.71998 2.38665 8.03338 2.00005 8.03338C1.61345 8.03338 1.30005 7.71998 1.30005 7.33338V3.33338C1.30005 2.79411 1.51427 2.27692 1.8956 1.8956ZM8.49502 7.50507C8.76839 7.77844 8.76839 8.22166 8.49502 8.49502L3.69 13.3H6.00005C6.38665 13.3 6.70005 13.6135 6.70005 14C6.70005 14.3866 6.38665 14.7 6.00005 14.7H2.00005C1.61345 14.7 1.30005 14.3866 1.30005 14V10C1.30005 9.61345 1.61345 9.30005 2.00005 9.30005C2.38665 9.30005 2.70005 9.61345 2.70005 10V12.3101L7.50507 7.50507C7.77844 7.23171 8.22166 7.23171 8.49502 7.50507Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareArrowOutDownLeftIcon;
