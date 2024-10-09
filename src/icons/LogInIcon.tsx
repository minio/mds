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

const LogInIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.30005 1.99999C9.30005 1.61339 9.61345 1.29999 10 1.29999H12.6667C13.206 1.29999 13.7232 1.51421 14.1045 1.89554C14.4858 2.27686 14.7 2.79405 14.7 3.33332V12.6667C14.7 13.2059 14.4858 13.7231 14.1045 14.1044C13.7232 14.4858 13.206 14.7 12.6667 14.7H10C9.61345 14.7 9.30005 14.3866 9.30005 14C9.30005 13.6134 9.61345 13.3 10 13.3H12.6667C12.8347 13.3 12.9958 13.2333 13.1145 13.1145C13.2333 12.9957 13.3 12.8346 13.3 12.6667V3.33332C13.3 3.16535 13.2333 3.00426 13.1145 2.88549C12.9958 2.76671 12.8347 2.69999 12.6667 2.69999H10C9.61345 2.69999 9.30005 2.38659 9.30005 1.99999ZM6.17174 4.17168C6.44511 3.89831 6.88832 3.89831 7.16169 4.17168L10.495 7.50501C10.7684 7.77838 10.7684 8.2216 10.495 8.49496L7.16169 11.8283C6.88832 12.1017 6.44511 12.1017 6.17174 11.8283C5.89837 11.5549 5.89837 11.1117 6.17174 10.8383L8.3101 8.69999H2.00005C1.61345 8.69999 1.30005 8.38659 1.30005 7.99999C1.30005 7.61339 1.61345 7.29999 2.00005 7.29999H8.3101L6.17174 5.16163C5.89837 4.88826 5.89837 4.44505 6.17174 4.17168Z"
      fill="currentColor"
    />
  </svg>
);
export default LogInIcon;
