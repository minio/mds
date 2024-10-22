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

const TrendingUpIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M10.6666 5.36667C10.28 5.36667 9.96663 5.05327 9.96663 4.66667C9.96663 4.28008 10.28 3.96667 10.6666 3.96667H14.6666C15.0532 3.96667 15.3666 4.28008 15.3666 4.66667V8.66667C15.3666 9.05327 15.0532 9.36667 14.6666 9.36667C14.28 9.36667 13.9666 9.05327 13.9666 8.66667V6.35662L9.49494 10.8283C9.22157 11.1017 8.77836 11.1017 8.50499 10.8283L5.66663 7.98996L1.82828 11.8283C1.55491 12.1017 1.11169 12.1017 0.838326 11.8283C0.564959 11.5549 0.564959 11.1117 0.838326 10.8384L5.17166 6.50503C5.44503 6.23167 5.88824 6.23167 6.16161 6.50503L8.99997 9.34339L12.9767 5.36667H10.6666Z"
      fill="currentColor"
    />
  </svg>
);
export default TrendingUpIcon;
