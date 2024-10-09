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

const SquareMousePointerIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.8956 1.8956C2.27692 1.51427 2.79411 1.30005 3.33338 1.30005H12.6667C13.206 1.30005 13.7232 1.51427 14.1045 1.8956C14.4858 2.27692 14.7 2.79411 14.7 3.33338V7.33338C14.7 7.71998 14.3866 8.03338 14 8.03338C13.6135 8.03338 13.3 7.71998 13.3 7.33338V3.33338C13.3 3.16541 13.2333 3.00432 13.1145 2.88555C12.9958 2.76677 12.8347 2.70005 12.6667 2.70005H3.33338C3.16541 2.70005 3.00432 2.76677 2.88555 2.88555C2.76677 3.00432 2.70005 3.16541 2.70005 3.33338V12.6667C2.70005 12.8347 2.76677 12.9958 2.88555 13.1145C3.00432 13.2333 3.16541 13.3 3.33338 13.3H7.33338C7.71998 13.3 8.03338 13.6135 8.03338 14C8.03338 14.3866 7.71998 14.7 7.33338 14.7H3.33338C2.79411 14.7 2.27692 14.4858 1.8956 14.1045C1.51427 13.7232 1.30005 13.206 1.30005 12.6667V3.33338C1.30005 2.79411 1.51427 2.27692 1.8956 1.8956ZM7.50507 7.50507C7.70308 7.30707 8.00003 7.24612 8.26002 7.35012L14.9267 10.0168C15.1929 10.1233 15.3673 10.3814 15.3667 10.6681C15.3661 10.9549 15.1907 11.2123 14.9241 11.3177L12.3395 12.3395L11.3177 14.9241C11.2123 15.1907 10.9549 15.3661 10.6681 15.3667C10.3814 15.3673 10.1233 15.1929 10.0168 14.9267L7.35012 8.26002C7.24612 8.00003 7.30707 7.70308 7.50507 7.50507ZM9.25659 9.25659L10.6629 12.7724L11.1491 11.5427C11.2202 11.3627 11.3627 11.2202 11.5427 11.1491L12.7724 10.6629L9.25659 9.25659Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareMousePointerIcon;
