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

const DownloadIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M14.7 10C14.7 9.6134 14.3866 9.3 14 9.3C13.6134 9.3 13.3 9.6134 13.3 10H14.7ZM2 12.6667H1.3H2ZM2.7 10C2.7 9.6134 2.3866 9.3 2 9.3C1.6134 9.3 1.3 9.6134 1.3 10H2.7ZM5.16164 6.17169C4.88827 5.89832 4.44506 5.89832 4.17169 6.17169C3.89832 6.44506 3.89832 6.88827 4.17169 7.16164L5.16164 6.17169ZM8 10L7.50503 10.495C7.77839 10.7683 8.22161 10.7683 8.49498 10.495L8 10ZM11.8283 7.16164C12.1017 6.88827 12.1017 6.44506 11.8283 6.17169C11.5549 5.89832 11.1117 5.89832 10.8384 6.17169L11.8283 7.16164ZM8.7 2C8.7 1.6134 8.3866 1.3 8 1.3C7.6134 1.3 7.3 1.6134 7.3 2H8.7ZM13.3 10V12.6667H14.7V10H13.3ZM13.3 12.6667C13.3 12.8346 13.2333 12.9957 13.1145 13.1145L14.1045 14.1045C14.4858 13.7231 14.7 13.2059 14.7 12.6667H13.3ZM13.1145 13.1145C12.9957 13.2333 12.8346 13.3 12.6667 13.3V14.7C13.2059 14.7 13.7231 14.4858 14.1045 14.1045L13.1145 13.1145ZM12.6667 13.3H3.33333V14.7H12.6667V13.3ZM3.33333 13.3C3.16536 13.3 3.00427 13.2333 2.8855 13.1145L1.89555 14.1045C2.27687 14.4858 2.79406 14.7 3.33333 14.7V13.3ZM2.8855 13.1145C2.76673 12.9957 2.7 12.8346 2.7 12.6667H1.3C1.3 13.2059 1.51423 13.7231 1.89555 14.1045L2.8855 13.1145ZM2.7 12.6667V10H1.3V12.6667H2.7ZM4.17169 7.16164L7.50503 10.495L8.49498 9.50503L5.16164 6.17169L4.17169 7.16164ZM8.49498 10.495L11.8283 7.16164L10.8384 6.17169L7.50503 9.50503L8.49498 10.495ZM8.7 10V2H7.3V10H8.7Z"
      fill="currentColor"
    />
  </svg>
);

export default DownloadIcon;
