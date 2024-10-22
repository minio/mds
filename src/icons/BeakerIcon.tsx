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

const BeakerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.30005 2C2.30005 1.6134 2.61345 1.3 3.00005 1.3H13C13.3866 1.3 13.7 1.6134 13.7 2C13.7 2.3866 13.3866 2.7 13 2.7H12.7V12.6667C12.7 13.2059 12.4858 13.7231 12.1045 14.1045C11.7232 14.4858 11.206 14.7 10.6667 14.7H5.33338C4.79411 14.7 4.27692 14.4858 3.8956 14.1045C3.51427 13.7231 3.30005 13.2059 3.30005 12.6667V2.7H3.00005C2.61345 2.7 2.30005 2.3866 2.30005 2ZM4.70005 2.7V8.63334H11.3V2.7H4.70005ZM11.3 10.0333H4.70005V12.6667C4.70005 12.8346 4.76677 12.9957 4.88555 13.1145C5.00432 13.2333 5.16541 13.3 5.33338 13.3H10.6667C10.8347 13.3 10.9958 13.2333 11.1145 13.1145C11.2333 12.9957 11.3 12.8346 11.3 12.6667V10.0333Z"
      fill="currentColor"
    />
  </svg>
);
export default BeakerIcon;
