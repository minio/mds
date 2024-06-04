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

const UserSearchIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.66672 2.70005C5.58055 2.70005 4.70005 3.58056 4.70005 4.66672C4.70005 5.75288 5.58056 6.63338 6.66672 6.63338C7.75288 6.63338 8.63338 5.75288 8.63338 4.66672C8.63338 3.58056 7.75288 2.70005 6.66672 2.70005ZM3.30005 4.66672C3.30005 2.80736 4.80736 1.30005 6.66672 1.30005C8.52607 1.30005 10.0334 2.80736 10.0334 4.66672C10.0334 6.52607 8.52607 8.03338 6.66672 8.03338C4.80736 8.03338 3.30005 6.52607 3.30005 4.66672ZM11.3334 10.0334C10.6154 10.0334 10.0334 10.6154 10.0334 11.3334C10.0334 12.0514 10.6154 12.6334 11.3334 12.6334C11.6436 12.6334 11.9285 12.5247 12.1519 12.3434C12.1768 12.3063 12.2057 12.2712 12.2384 12.2384C12.2712 12.2057 12.3063 12.1768 12.3434 12.1519C12.5247 11.9285 12.6334 11.6436 12.6334 11.3334C12.6334 10.6154 12.0514 10.0334 11.3334 10.0334ZM13.6726 12.6826C13.9021 12.2857 14.0334 11.8249 14.0334 11.3334C14.0334 9.84221 12.8246 8.63338 11.3334 8.63338C9.84221 8.63338 8.63338 9.84221 8.63338 11.3334C8.63338 12.8246 9.84221 14.0334 11.3334 14.0334C11.8249 14.0334 12.2857 13.9021 12.6826 13.6726L13.5051 14.495C13.7784 14.7684 14.2217 14.7684 14.495 14.495C14.7684 14.2217 14.7684 13.7784 14.495 13.5051L13.6726 12.6826ZM2.28612 10.2861C2.91749 9.65475 3.77382 9.30005 4.66672 9.30005H6.86672C7.25331 9.30005 7.56672 9.61345 7.56672 10C7.56672 10.3866 7.25331 10.7 6.86672 10.7H4.66672C4.14512 10.7 3.64489 10.9073 3.27607 11.2761C2.90725 11.6449 2.70005 12.1451 2.70005 12.6667V14C2.70005 14.3866 2.38665 14.7 2.00005 14.7C1.61345 14.7 1.30005 14.3866 1.30005 14V12.6667C1.30005 11.7738 1.65475 10.9175 2.28612 10.2861Z"
      fill="currentColor"
    />
  </svg>
);
export default UserSearchIcon;
