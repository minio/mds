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

const UngroupIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M4.03333 3.36667V5.96667H7.96666V3.36667H4.03333ZM2.63333 3.33334C2.63333 2.57855 3.24521 1.96667 4 1.96667H8C8.75479 1.96667 9.36666 2.57855 9.36666 3.33334V6.00001C9.36666 6.7548 8.75479 7.36667 8 7.36667H4C3.24521 7.36667 2.63333 6.7548 2.63333 6.00001V3.33334ZM8.03333 10.0333V12.6333H11.9667V10.0333H8.03333ZM6.63333 10C6.63333 9.24522 7.24521 8.63334 8 8.63334H12C12.7548 8.63334 13.3667 9.24522 13.3667 10V12.6667C13.3667 13.4215 12.7548 14.0333 12 14.0333H8C7.24521 14.0333 6.63333 13.4215 6.63333 12.6667V10Z"
      fill="currentColor"
    />
  </svg>
);
export default UngroupIcon;
