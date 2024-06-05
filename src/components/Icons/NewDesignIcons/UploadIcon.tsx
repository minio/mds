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

const UploadIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.50501 1.50507C7.77838 1.23171 8.2216 1.23171 8.49496 1.50507L11.8283 4.83841C12.1017 5.11177 12.1017 5.55499 11.8283 5.82836C11.5549 6.10172 11.1117 6.10172 10.8383 5.82836L8.69999 3.69V10C8.69999 10.3866 8.38659 10.7 7.99999 10.7C7.61339 10.7 7.29999 10.3866 7.29999 10V3.69L5.16163 5.82836C4.88826 6.10172 4.44505 6.10172 4.17168 5.82836C3.89831 5.55499 3.89831 5.11177 4.17168 4.83841L7.50501 1.50507ZM1.99999 9.30005C2.38659 9.30005 2.69999 9.61345 2.69999 10V12.6667C2.69999 12.8347 2.76671 12.9958 2.88549 13.1145C3.00426 13.2333 3.16535 13.3 3.33332 13.3H12.6667C12.8346 13.3 12.9957 13.2333 13.1145 13.1145C13.2333 12.9958 13.3 12.8347 13.3 12.6667V10C13.3 9.61345 13.6134 9.30005 14 9.30005C14.3866 9.30005 14.7 9.61345 14.7 10V12.6667C14.7 13.206 14.4858 13.7232 14.1044 14.1045C13.7231 14.4858 13.2059 14.7 12.6667 14.7H3.33332C2.79405 14.7 2.27686 14.4858 1.89554 14.1045C1.51421 13.7232 1.29999 13.206 1.29999 12.6667V10C1.29999 9.61345 1.61339 9.30005 1.99999 9.30005Z"
      fill="currentColor"
    />
  </svg>
);
export default UploadIcon;
