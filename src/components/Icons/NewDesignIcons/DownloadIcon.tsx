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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 1.29999C8.3866 1.29999 8.7 1.61339 8.7 1.99999V8.31004L10.8384 6.17168C11.1117 5.89831 11.5549 5.89831 11.8283 6.17168C12.1017 6.44505 12.1017 6.88826 11.8283 7.16163L8.49498 10.495C8.22161 10.7683 7.7784 10.7683 7.50503 10.495L4.17169 7.16163C3.89833 6.88826 3.89833 6.44505 4.17169 6.17168C4.44506 5.89831 4.88828 5.89831 5.16164 6.17168L7.3 8.31004V1.99999C7.3 1.61339 7.6134 1.29999 8 1.29999ZM2 9.29999C2.3866 9.29999 2.7 9.61339 2.7 9.99999V12.6667C2.7 12.8346 2.76673 12.9957 2.8855 13.1145C3.00428 13.2333 3.16537 13.3 3.33334 13.3H12.6667C12.8346 13.3 12.9957 13.2333 13.1145 13.1145C13.2333 12.9957 13.3 12.8346 13.3 12.6667V9.99999C13.3 9.61339 13.6134 9.29999 14 9.29999C14.3866 9.29999 14.7 9.61339 14.7 9.99999V12.6667C14.7 13.2059 14.4858 13.7231 14.1045 14.1044C13.7231 14.4858 13.2059 14.7 12.6667 14.7H3.33334C2.79406 14.7 2.27688 14.4858 1.89555 14.1044C1.51423 13.7231 1.3 13.2059 1.3 12.6667V9.99999C1.3 9.61339 1.6134 9.29999 2 9.29999Z"
      fill="currentColor"
    />
  </svg>
);
export default DownloadIcon;
