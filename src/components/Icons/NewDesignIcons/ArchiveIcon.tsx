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

const ArchiveIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.03336 2.69999V4.63332H13.9667V2.69999H2.03336ZM14.0334 6.03292C14.7727 6.01522 15.3667 5.4103 15.3667 4.66665V2.66665C15.3667 1.91187 14.7548 1.29999 14 1.29999H2.00003C1.24524 1.29999 0.633362 1.91187 0.633362 2.66665V4.66665C0.633362 5.4103 1.22731 6.01522 1.9667 6.03292V12.6667C1.9667 13.2059 2.18092 13.7231 2.56224 14.1044C2.94357 14.4858 3.46075 14.7 4.00003 14.7H12C12.5393 14.7 13.0565 14.4858 13.4378 14.1044C13.8191 13.7231 14.0334 13.2059 14.0334 12.6667V6.03292ZM12.6334 6.03332H3.3667V12.6667C3.3667 12.8346 3.43342 12.9957 3.55219 13.1145C3.67097 13.2333 3.83206 13.3 4.00003 13.3H12C12.168 13.3 12.3291 13.2333 12.4479 13.1145C12.5666 12.9957 12.6334 12.8346 12.6334 12.6667V6.03332ZM5.96669 7.99999C5.96669 7.61339 6.2801 7.29999 6.66669 7.29999H9.33336C9.71996 7.29999 10.0334 7.61339 10.0334 7.99999C10.0334 8.38659 9.71996 8.69999 9.33336 8.69999H6.66669C6.2801 8.69999 5.96669 8.38659 5.96669 7.99999Z"
      fill="currentColor"
    />
  </svg>
);
export default ArchiveIcon;
