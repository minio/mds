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

const ChevronsLeftRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M6.49498 4.17169C6.76835 4.44506 6.76835 4.88827 6.49498 5.16164L3.65662 8L6.49498 10.8384C6.76835 11.1117 6.76835 11.5549 6.49498 11.8283C6.22162 12.1017 5.7784 12.1017 5.50503 11.8283L2.1717 8.49498C2.04042 8.3637 1.96667 8.18565 1.96667 8C1.96667 7.81435 2.04042 7.6363 2.1717 7.50503L5.50503 4.17169C5.7784 3.89833 6.22162 3.89833 6.49498 4.17169ZM9.50503 4.17169C9.7784 3.89833 10.2216 3.89833 10.495 4.17169L13.8283 7.50503C13.9596 7.6363 14.0333 7.81435 14.0333 8C14.0333 8.18565 13.9596 8.3637 13.8283 8.49498L10.495 11.8283C10.2216 12.1017 9.7784 12.1017 9.50503 11.8283C9.23167 11.5549 9.23167 11.1117 9.50503 10.8384L12.3434 8L9.50503 5.16164C9.23167 4.88827 9.23167 4.44506 9.50503 4.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronsLeftRightIcon;
