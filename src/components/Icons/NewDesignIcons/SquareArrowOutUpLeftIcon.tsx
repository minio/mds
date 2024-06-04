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

const SquareArrowOutUpLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.30005 2.00005C1.30005 1.61345 1.61345 1.30005 2.00005 1.30005H6.00005C6.38665 1.30005 6.70005 1.61345 6.70005 2.00005C6.70005 2.38665 6.38665 2.70005 6.00005 2.70005H3.69L8.49502 7.50507C8.76839 7.77844 8.76839 8.22166 8.49502 8.49502C8.22166 8.76839 7.77844 8.76839 7.50507 8.49502L2.70005 3.69V6.00005C2.70005 6.38665 2.38665 6.70005 2.00005 6.70005C1.61345 6.70005 1.30005 6.38665 1.30005 6.00005V2.00005ZM7.96672 2.00005C7.96672 1.61345 8.28012 1.30005 8.66672 1.30005H12.6667C13.206 1.30005 13.7232 1.51427 14.1045 1.8956C14.4858 2.27692 14.7 2.79411 14.7 3.33338V12.6667C14.7 13.206 14.4858 13.7232 14.1045 14.1045C13.7232 14.4858 13.206 14.7 12.6667 14.7H3.33338C2.79411 14.7 2.27692 14.4858 1.8956 14.1045C1.51427 13.7232 1.30005 13.206 1.30005 12.6667V8.66672C1.30005 8.28012 1.61345 7.96672 2.00005 7.96672C2.38665 7.96672 2.70005 8.28012 2.70005 8.66672V12.6667C2.70005 12.8347 2.76677 12.9958 2.88555 13.1145C3.00432 13.2333 3.16541 13.3 3.33338 13.3H12.6667C12.8347 13.3 12.9958 13.2333 13.1145 13.1145C13.2333 12.9958 13.3 12.8347 13.3 12.6667V3.33338C13.3 3.16541 13.2333 3.00432 13.1145 2.88555C12.9958 2.76677 12.8347 2.70005 12.6667 2.70005H8.66672C8.28012 2.70005 7.96672 2.38665 7.96672 2.00005Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareArrowOutUpLeftIcon;
