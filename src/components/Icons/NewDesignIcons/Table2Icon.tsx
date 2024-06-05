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

const Table2Icon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.8956 1.8956C2.27692 1.51427 2.79411 1.30005 3.33338 1.30005H12.6667C13.206 1.30005 13.7232 1.51427 14.1045 1.8956C14.4858 2.27692 14.7 2.79411 14.7 3.33338V12.6667C14.7 13.206 14.4858 13.7232 14.1045 14.1045C13.7232 14.4858 13.206 14.7 12.6667 14.7H3.33338C2.79411 14.7 2.27692 14.4858 1.8956 14.1045C1.51427 13.7232 1.30005 13.206 1.30005 12.6667V3.33338C1.30005 2.79411 1.51427 2.27692 1.8956 1.8956ZM3.33338 2.70005C3.16541 2.70005 3.00432 2.76677 2.88555 2.88555C2.76677 3.00432 2.70005 3.16541 2.70005 3.33338V5.30005H5.30005V2.70005H3.33338ZM6.70005 2.70005V5.30005H13.3V3.33338C13.3 3.16541 13.2333 3.00432 13.1145 2.88555C12.9958 2.76677 12.8347 2.70005 12.6667 2.70005H6.70005ZM13.3 6.70005H6.70005V13.3H12.6667C12.8347 13.3 12.9958 13.2333 13.1145 13.1145C13.2333 12.9958 13.3 12.8347 13.3 12.6667V6.70005ZM5.30005 13.3V6.70005H2.70005V12.6667C2.70005 12.8347 2.76677 12.9958 2.88555 13.1145C3.00432 13.2333 3.16541 13.3 3.33338 13.3H5.30005Z"
      fill="currentColor"
    />
  </svg>
);
export default Table2Icon;
