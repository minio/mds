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

const ExpandIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M1.30005 1.99999C1.30005 1.61339 1.61345 1.29999 2.00005 1.29999H5.20005C5.58665 1.29999 5.90005 1.61339 5.90005 1.99999C5.90005 2.38659 5.58665 2.69999 5.20005 2.69999H3.69L6.49502 5.50501C6.76839 5.77838 6.76839 6.2216 6.49502 6.49496C6.22166 6.76833 5.77844 6.76833 5.50507 6.49496L2.70005 3.68994V5.19999C2.70005 5.58659 2.38665 5.89999 2.00005 5.89999C1.61345 5.89999 1.30005 5.58659 1.30005 5.19999V1.99999ZM10.1 1.99999C10.1 1.61339 10.4135 1.29999 10.8 1.29999H14C14.3866 1.29999 14.7 1.61339 14.7 1.99999V5.19999C14.7 5.58659 14.3866 5.89999 14 5.89999C13.6135 5.89999 13.3 5.58659 13.3 5.19999V3.68994L10.495 6.49496C10.2217 6.76833 9.77844 6.76833 9.50507 6.49496C9.23171 6.2216 9.23171 5.77838 9.50507 5.50501L12.3101 2.69999H10.8C10.4135 2.69999 10.1 2.38659 10.1 1.99999ZM6.49502 9.50501C6.76839 9.77838 6.76839 10.2216 6.49502 10.495L3.69 13.3H5.20005C5.58665 13.3 5.90005 13.6134 5.90005 14C5.90005 14.3866 5.58665 14.7 5.20005 14.7H2.00005C1.61345 14.7 1.30005 14.3866 1.30005 14V10.8C1.30005 10.4134 1.61345 10.1 2.00005 10.1C2.38665 10.1 2.70005 10.4134 2.70005 10.8V12.31L5.50507 9.50501C5.77844 9.23165 6.22166 9.23165 6.49502 9.50501ZM9.50507 9.50501C9.77844 9.23165 10.2217 9.23165 10.495 9.50501L13.3 12.31V10.8C13.3 10.4134 13.6135 10.1 14 10.1C14.3866 10.1 14.7 10.4134 14.7 10.8V14C14.7 14.3866 14.3866 14.7 14 14.7H10.8C10.4135 14.7 10.1 14.3866 10.1 14C10.1 13.6134 10.4135 13.3 10.8 13.3H12.3101L9.50507 10.495C9.23171 10.2216 9.23171 9.77838 9.50507 9.50501Z"
      fill="currentColor"
    />
  </svg>
);
export default ExpandIcon;
