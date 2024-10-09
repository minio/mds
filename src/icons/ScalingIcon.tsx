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

const ScalingIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.89554 1.8956C2.27686 1.51427 2.79405 1.30005 3.33332 1.30005H7.99999C8.38659 1.30005 8.69999 1.61345 8.69999 2.00005C8.69999 2.38665 8.38659 2.70005 7.99999 2.70005H3.33332C3.16535 2.70005 3.00426 2.76677 2.88549 2.88555C2.76671 3.00432 2.69999 3.16541 2.69999 3.33338V12.6667C2.69999 12.8347 2.76671 12.9958 2.88549 13.1145C3.00426 13.2333 3.16535 13.3 3.33332 13.3H12.6667C12.8346 13.3 12.9957 13.2333 13.1145 13.1145C13.2333 12.9958 13.3 12.8347 13.3 12.6667V8.00005C13.3 7.61345 13.6134 7.30005 14 7.30005C14.3866 7.30005 14.7 7.61345 14.7 8.00005V12.6667C14.7 13.206 14.4858 13.7232 14.1044 14.1045C13.7231 14.4858 13.2059 14.7 12.6667 14.7H3.33332C2.79405 14.7 2.27686 14.4858 1.89554 14.1045C1.51421 13.7232 1.29999 13.206 1.29999 12.6667V3.33338C1.29999 2.79411 1.51421 2.27692 1.89554 1.8956ZM10.6667 2.70005C10.2801 2.70005 9.96665 2.38665 9.96665 2.00005C9.96665 1.61345 10.2801 1.30005 10.6667 1.30005H14C14.3866 1.30005 14.7 1.61345 14.7 2.00005V5.33338C14.7 5.71998 14.3866 6.03338 14 6.03338C13.6134 6.03338 13.3 5.71998 13.3 5.33338V3.69L7.68994 9.30005H9.33332C9.71992 9.30005 10.0333 9.61345 10.0333 10C10.0333 10.3866 9.71992 10.7 9.33332 10.7H5.99999C5.61339 10.7 5.29999 10.3866 5.29999 10V6.66672C5.29999 6.28012 5.61339 5.96672 5.99999 5.96672C6.38659 5.96672 6.69999 6.28012 6.69999 6.66672V8.3101L12.31 2.70005H10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default ScalingIcon;
