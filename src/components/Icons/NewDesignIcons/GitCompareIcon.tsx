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

const GitCompareIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.00005 2.69999C3.28208 2.69999 2.70005 3.28202 2.70005 3.99999C2.70005 4.71796 3.28208 5.29999 4.00005 5.29999C4.71802 5.29999 5.30005 4.71796 5.30005 3.99999C5.30005 3.28202 4.71802 2.69999 4.00005 2.69999ZM1.30005 3.99999C1.30005 2.50882 2.50888 1.29999 4.00005 1.29999C5.49122 1.29999 6.70005 2.50882 6.70005 3.99999C6.70005 5.24906 5.85187 6.30003 4.70005 6.60836V10.6667C4.70005 10.8346 4.76677 10.9957 4.88555 11.1145C5.00432 11.2333 5.16541 11.3 5.33338 11.3H7.33338C7.71998 11.3 8.03338 11.6134 8.03338 12C8.03338 12.3866 7.71998 12.7 7.33338 12.7H5.33338C4.79411 12.7 4.27692 12.4858 3.8956 12.1044C3.51427 11.7231 3.30005 11.2059 3.30005 10.6667V6.60836C2.14823 6.30003 1.30005 5.24906 1.30005 3.99999ZM7.96672 3.99999C7.96672 3.61339 8.28012 3.29999 8.66672 3.29999H10.6667C11.206 3.29999 11.7232 3.51421 12.1045 3.89554C12.4858 4.27686 12.7 4.79405 12.7 5.33332V9.39161C13.8519 9.69995 14.7 10.7509 14.7 12C14.7 13.4912 13.4912 14.7 12 14.7C10.5089 14.7 9.30005 13.4912 9.30005 12C9.30005 10.7509 10.1482 9.69995 11.3 9.39161V5.33332C11.3 5.16535 11.2333 5.00426 11.1145 4.88549C10.9958 4.76671 10.8347 4.69999 10.6667 4.69999H8.66672C8.28012 4.69999 7.96672 4.38659 7.96672 3.99999ZM12 10.7C11.2821 10.7 10.7 11.282 10.7 12C10.7 12.718 11.2821 13.3 12 13.3C12.718 13.3 13.3 12.718 13.3 12C13.3 11.282 12.718 10.7 12 10.7Z"
      fill="currentColor"
    />
  </svg>
);
export default GitCompareIcon;
