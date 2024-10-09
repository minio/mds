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

const StarHalfIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8.30094 0.70134C8.64999 0.867552 8.7982 1.28525 8.63199 1.6343L6.63199 5.8343C6.53119 6.04599 6.33109 6.19315 6.09898 6.22631L2.85433 6.68983L5.15143 8.89504C5.31941 9.0563 5.3962 9.29053 5.3563 9.51995L4.79774 12.7317L7.67894 11.2446C8.02248 11.0673 8.44471 11.2021 8.62202 11.5456C8.79933 11.8892 8.66458 12.3114 8.32104 12.4887L4.18771 14.622C3.95152 14.7439 3.66667 14.7216 3.45241 14.5643C3.23816 14.407 3.13147 14.1419 3.17701 13.8801L3.91319 9.64703L0.84855 6.70498C0.655424 6.51958 0.584957 6.24026 0.66702 5.98544C0.749083 5.73061 0.969303 5.54491 1.23433 5.50704L5.52938 4.89347L7.36799 1.03239C7.5342 0.683343 7.9519 0.535128 8.30094 0.70134Z"
      fill="currentColor"
    />
  </svg>
);
export default StarHalfIcon;
