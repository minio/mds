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

const JoystickIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.00005 2.69999C7.28208 2.69999 6.70005 3.28202 6.70005 3.99999C6.70005 4.71796 7.28208 5.29999 8.00005 5.29999C8.71802 5.29999 9.30005 4.71796 9.30005 3.99999C9.30005 3.28202 8.71802 2.69999 8.00005 2.69999ZM5.30005 3.99999C5.30005 2.50882 6.50888 1.29999 8.00005 1.29999C9.49122 1.29999 10.7 2.50882 10.7 3.99999C10.7 5.24906 9.85187 6.30003 8.70005 6.60836V9.29999H12.6667C13.206 9.29999 13.7232 9.51421 14.1045 9.89554C14.4858 10.2769 14.7 10.794 14.7 11.3333V12.6667C14.7 13.2059 14.4858 13.7231 14.1045 14.1044C13.7232 14.4858 13.206 14.7 12.6667 14.7H3.33338C2.79411 14.7 2.27692 14.4858 1.8956 14.1044C1.51427 13.7231 1.30005 13.2059 1.30005 12.6667V11.3333C1.30005 10.794 1.51427 10.2769 1.8956 9.89554C2.26906 9.52208 2.77284 9.30889 3.30005 9.30026V8.66665C3.30005 8.28006 3.61345 7.96665 4.00005 7.96665C4.38665 7.96665 4.70005 8.28006 4.70005 8.66665V9.29999H7.30005V6.60836C6.14823 6.30003 5.30005 5.24906 5.30005 3.99999ZM3.33338 10.7C3.16541 10.7 3.00432 10.7667 2.88555 10.8855C2.76677 11.0043 2.70005 11.1654 2.70005 11.3333V12.6667C2.70005 12.8346 2.76677 12.9957 2.88555 13.1145C3.00432 13.2333 3.16541 13.3 3.33338 13.3H12.6667C12.8347 13.3 12.9958 13.2333 13.1145 13.1145C13.2333 12.9957 13.3 12.8346 13.3 12.6667V11.3333C13.3 11.1654 13.2333 11.0043 13.1145 10.8855C12.9958 10.7667 12.8347 10.7 12.6667 10.7H3.33338Z"
      fill="currentColor"
    />
  </svg>
);
export default JoystickIcon;
