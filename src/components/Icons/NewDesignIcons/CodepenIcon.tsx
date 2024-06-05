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

const CodepenIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.61851 0.746421C7.85049 0.595635 8.14951 0.595635 8.38149 0.746421L15.0482 5.07975C15.2468 5.20888 15.3667 5.42973 15.3667 5.66666V10.3333C15.3667 10.5703 15.2468 10.7911 15.0482 10.9202L8.38149 15.2536C8.14951 15.4044 7.85049 15.4044 7.61851 15.2536L0.951843 10.9202C0.753188 10.7911 0.633335 10.5703 0.633335 10.3333V5.66666C0.633335 5.42973 0.753188 5.20888 0.951843 5.07975L7.61851 0.746421ZM2.03334 7.01112L3.44601 8L2.03334 8.98887V7.01112ZM2.5847 10.3118L7.3 13.3768V10.6978L4.66667 8.85446L2.5847 10.3118ZM5.88732 8L8 9.47887L10.1127 8L8 6.52112L5.88732 8ZM8.7 5.30221L11.3333 7.14554L13.4153 5.68816L8.7 2.62321V5.30221ZM7.3 2.62321V5.30221L4.66667 7.14554L2.5847 5.68816L7.3 2.62321ZM13.9667 7.01112L12.554 8L13.9667 8.98887V7.01112ZM13.4153 10.3118L11.3333 8.85446L8.7 10.6978V13.3768L13.4153 10.3118Z"
      fill="currentColor"
    />
  </svg>
);
export default CodepenIcon;
