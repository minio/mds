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

const SquarePenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M13.25 2.03574C13.0606 2.03574 12.879 2.11099 12.745 2.24493L6.63212 8.35783L6.29544 9.70457L7.64217 9.36788L13.7551 3.25498C13.889 3.12104 13.9643 2.93938 13.9643 2.74996C13.9643 2.56053 13.889 2.37887 13.7551 2.24493C13.6211 2.11099 13.4395 2.03574 13.25 2.03574ZM11.7551 1.25498C12.1516 0.858489 12.6893 0.635742 13.25 0.635742C13.8108 0.635742 14.3485 0.858489 14.745 1.25498C15.1415 1.65147 15.3643 2.18923 15.3643 2.74996C15.3643 3.31068 15.1415 3.84844 14.745 4.24493L8.49502 10.4949C8.40531 10.5846 8.29291 10.6483 8.16982 10.6791L5.50316 11.3457C5.26461 11.4054 5.01227 11.3355 4.83841 11.1616C4.66454 10.9877 4.59465 10.7354 4.65428 10.4968L5.32095 7.83018C5.35172 7.7071 5.41536 7.59469 5.50507 7.50498L11.7551 1.25498ZM1.8956 1.89551C2.27692 1.51418 2.79411 1.29996 3.33338 1.29996H8.00005C8.38665 1.29996 8.70005 1.61336 8.70005 1.99996C8.70005 2.38655 8.38665 2.69996 8.00005 2.69996H3.33338C3.16541 2.69996 3.00432 2.76668 2.88555 2.88545C2.76677 3.00423 2.70005 3.16532 2.70005 3.33329V12.6666C2.70005 12.8346 2.76677 12.9957 2.88555 13.1145C3.00432 13.2332 3.16541 13.3 3.33338 13.3H12.6667C12.8347 13.3 12.9958 13.2332 13.1145 13.1145C13.2333 12.9957 13.3 12.8346 13.3 12.6666V7.99996C13.3 7.61336 13.6135 7.29996 14 7.29996C14.3866 7.29996 14.7 7.61336 14.7 7.99996V12.6666C14.7 13.2059 14.4858 13.7231 14.1045 14.1044C13.7232 14.4857 13.206 14.7 12.6667 14.7H3.33338C2.79411 14.7 2.27692 14.4857 1.8956 14.1044C1.51427 13.7231 1.30005 13.2059 1.30005 12.6666V3.33329C1.30005 2.79402 1.51427 2.27683 1.8956 1.89551Z"
      fill="currentColor"
    />
  </svg>
);
export default SquarePenIcon;
