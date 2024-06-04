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

const ForwardIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M9.50503 4.1717C9.77839 3.89833 10.2216 3.89833 10.495 4.1717L13.8283 7.50503C14.1017 7.7784 14.1017 8.22162 13.8283 8.49498L10.495 11.8283C10.2216 12.1017 9.77839 12.1017 9.50503 11.8283C9.23166 11.5549 9.23166 11.1117 9.50503 10.8384L11.6434 8.70001H5.33333C4.81174 8.70001 4.31151 8.90721 3.94269 9.27603C3.57387 9.64485 3.36667 10.1451 3.36667 10.6667V12C3.36667 12.3866 3.05327 12.7 2.66667 12.7C2.28007 12.7 1.96667 12.3866 1.96667 12V10.6667C1.96667 9.77378 2.32137 8.91745 2.95274 8.28608C3.58411 7.65471 4.44044 7.30001 5.33333 7.30001H11.6434L9.50503 5.16165C9.23166 4.88828 9.23166 4.44507 9.50503 4.1717Z"
      fill="currentColor"
    />
  </svg>
);
export default ForwardIcon;
