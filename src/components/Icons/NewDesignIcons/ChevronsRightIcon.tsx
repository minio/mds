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

const ChevronsRightIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.50507 4.17169C3.77844 3.89833 4.22166 3.89833 4.49502 4.17169L7.82836 7.50503C7.95963 7.6363 8.03338 7.81435 8.03338 8C8.03338 8.18565 7.95963 8.3637 7.82836 8.49498L4.49502 11.8283C4.22166 12.1017 3.77844 12.1017 3.50507 11.8283C3.23171 11.5549 3.23171 11.1117 3.50507 10.8384L6.34343 8L3.50507 5.16164C3.23171 4.88827 3.23171 4.44506 3.50507 4.17169ZM8.17174 4.17169C8.44511 3.89833 8.88832 3.89833 9.16169 4.17169L12.495 7.50503C12.6263 7.6363 12.7 7.81435 12.7 8C12.7 8.18565 12.6263 8.3637 12.495 8.49498L9.16169 11.8283C8.88832 12.1017 8.44511 12.1017 8.17174 11.8283C7.89837 11.5549 7.89837 11.1117 8.17174 10.8384L11.0101 8L8.17174 5.16164C7.89837 4.88827 7.89837 4.44506 8.17174 4.17169Z"
      fill="currentColor"
    />
  </svg>
);
export default ChevronsRightIcon;
