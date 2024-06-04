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

const ArrowUpLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.96667 4.66667C3.96667 4.28008 4.28008 3.96667 4.66667 3.96667H11.3333C11.7199 3.96667 12.0333 4.28008 12.0333 4.66667C12.0333 5.05327 11.7199 5.36667 11.3333 5.36667H6.35662L11.8283 10.8384C12.1017 11.1117 12.1017 11.5549 11.8283 11.8283C11.5549 12.1017 11.1117 12.1017 10.8384 11.8283L5.36667 6.35662V11.3333C5.36667 11.7199 5.05327 12.0333 4.66667 12.0333C4.28008 12.0333 3.96667 11.7199 3.96667 11.3333V4.66667Z"
      fill="currentColor"
    />
  </svg>
);
export default ArrowUpLeftIcon;
