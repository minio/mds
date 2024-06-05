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

const ArchiveRestoreIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M2.03336 2.69999V4.63332H13.9667V2.69999H2.03336ZM14.0334 6.03292C14.7727 6.01522 15.3667 5.4103 15.3667 4.66665V2.66665C15.3667 1.91187 14.7548 1.29999 14 1.29999H2.00003C1.24524 1.29999 0.633362 1.91187 0.633362 2.66665V4.66665C0.633362 5.4103 1.22731 6.01522 1.9667 6.03292V12.6667C1.9667 13.2059 2.18092 13.7231 2.56224 14.1044C2.94357 14.4858 3.46075 14.7 4.00003 14.7H5.33336C5.71996 14.7 6.03336 14.3866 6.03336 14C6.03336 13.6134 5.71996 13.3 5.33336 13.3H4.00003C3.83206 13.3 3.67097 13.2333 3.55219 13.1145C3.43342 12.9957 3.3667 12.8346 3.3667 12.6667V6.03332H12.6334V12.6667C12.6334 12.8346 12.5666 12.9957 12.4479 13.1145C12.3291 13.2333 12.168 13.3 12 13.3H10.6667C10.2801 13.3 9.96669 13.6134 9.96669 14C9.96669 14.3866 10.2801 14.7 10.6667 14.7H12C12.5393 14.7 13.0565 14.4858 13.4378 14.1044C13.8191 13.7231 14.0334 13.2059 14.0334 12.6667V6.03292ZM8.00003 7.29999C8.18568 7.29999 8.36373 7.37374 8.495 7.50501L10.495 9.50501C10.7684 9.77838 10.7684 10.2216 10.495 10.495C10.2216 10.7683 9.77842 10.7683 9.50505 10.495L8.70003 9.68994V14C8.70003 14.3866 8.38663 14.7 8.00003 14.7C7.61343 14.7 7.30003 14.3866 7.30003 14V9.68994L6.495 10.495C6.22164 10.7683 5.77842 10.7683 5.50505 10.495C5.23169 10.2216 5.23169 9.77838 5.50505 9.50501L7.50505 7.50501C7.63633 7.37374 7.81438 7.29999 8.00003 7.29999Z"
      fill="currentColor"
    />
  </svg>
);
export default ArchiveRestoreIcon;
