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

const CakeSliceIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.92349 1.43252C9.13476 1.27994 9.4133 1.25736 9.64639 1.3739C11.0775 2.08947 12.318 3.15484 13.2044 4.21854C13.6485 4.75149 14.0141 5.29633 14.2719 5.81195C14.5234 6.31492 14.7 6.84481 14.7 7.33333V13.3333C14.7 13.6924 14.5773 14.046 14.3116 14.3116C14.046 14.5773 13.6924 14.7 13.3333 14.7H2.66667C2.3076 14.7 1.95397 14.5773 1.68836 14.3116C1.42275 14.046 1.3 13.6924 1.3 13.3333V7.33333C1.3 7.11112 1.40552 6.9021 1.58431 6.77013L3.99264 4.99255C3.97555 4.88644 3.96667 4.77759 3.96667 4.66667C3.96667 3.54369 4.87702 2.63333 6 2.63333C6.33973 2.63333 6.66 2.71665 6.9415 2.86397L8.92349 1.43252ZM6.37618 4.1571C6.41543 4.20877 6.46056 4.25349 6.50995 4.29101C6.5875 4.39611 6.63334 4.52603 6.63334 4.66667C6.63334 5.01645 6.34978 5.3 6 5.3C5.65022 5.3 5.36667 5.01645 5.36667 4.66667C5.36667 4.31689 5.65022 4.03333 6 4.03333C6.14087 4.03333 6.27099 4.07932 6.37618 4.1571ZM7.88708 3.90799L9.38997 2.82257C10.4733 3.4326 11.4274 4.27303 12.1289 5.1148C12.5181 5.58185 12.8192 6.037 13.0197 6.43805C13.2266 6.85175 13.3 7.15519 13.3 7.33333V13.3H2.7V12.0333H10.6667C11.0533 12.0333 11.3667 11.7199 11.3667 11.3333C11.3667 10.9467 11.0533 10.6333 10.6667 10.6333H2.7V9.36667H10.6667C11.0533 9.36667 11.3667 9.05327 11.3667 8.66667C11.3667 8.28007 11.0533 7.96667 10.6667 7.96667H2.7V7.68669L4.68751 6.21972C5.04169 6.51935 5.49975 6.7 6 6.7C7.12298 6.7 8.03334 5.78965 8.03334 4.66667C8.03334 4.39848 7.98142 4.14242 7.88708 3.90799Z"
      fill="currentColor"
    />
  </svg>
);
export default CakeSliceIcon;
