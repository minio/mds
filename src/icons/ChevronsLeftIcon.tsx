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

const ChevronsLeftIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M7.82836 4.17169C8.10172 4.44506 8.10172 4.88827 7.82836 5.16164L4.99 8L7.82836 10.8384C8.10172 11.1117 8.10172 11.5549 7.82836 11.8283C7.55499 12.1017 7.11177 12.1017 6.83841 11.8283L3.50507 8.49498C3.3738 8.3637 3.30005 8.18565 3.30005 8C3.30005 7.81435 3.3738 7.6363 3.50507 7.50503L6.83841 4.17169C7.11177 3.89833 7.55499 3.89833 7.82836 4.17169ZM12.495 4.17169C12.7684 4.44506 12.7684 4.88827 12.495 5.16164L9.65666 8L12.495 10.8384C12.7684 11.1117 12.7684 11.5549 12.495 11.8283C12.2217 12.1017 11.7784 12.1017 11.5051 11.8283L8.17174 8.49498C8.04047 8.3637 7.96672 8.18565 7.96672 8C7.96672 7.81435 8.04047 7.6363 8.17174 7.50503L11.5051 4.17169C11.7784 3.89833 12.2217 3.89833 12.495 4.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronsLeftIcon;
