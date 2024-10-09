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

const SquarePercentIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33338 2.70005C2.9836 2.70005 2.70005 2.9836 2.70005 3.33338V12.6667C2.70005 13.0165 2.9836 13.3 3.33338 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33338ZM1.30005 3.33338C1.30005 2.2104 2.2104 1.30005 3.33338 1.30005H12.6667C13.7897 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7897 14.7 12.6667 14.7H3.33338C2.2104 14.7 1.30005 13.7897 1.30005 12.6667V3.33338ZM6.00005 6.70005C5.61345 6.70005 5.30005 6.38665 5.30005 6.00005C5.30005 5.61345 5.61345 5.30005 6.00005 5.30005H6.00672C6.39331 5.30005 6.70672 5.61345 6.70672 6.00005C6.70672 6.38665 6.39331 6.70005 6.00672 6.70005H6.00005ZM9.50507 5.50507C9.77844 5.23171 10.2217 5.23171 10.495 5.50507C10.7684 5.77844 10.7684 6.22166 10.495 6.49502L6.49502 10.495C6.22166 10.7684 5.77844 10.7684 5.50507 10.495C5.23171 10.2217 5.23171 9.77844 5.50507 9.50507L9.50507 5.50507ZM10.0067 10.7H10C9.61345 10.7 9.30005 10.3866 9.30005 10C9.30005 9.61345 9.61345 9.30005 10 9.30005H10.0067C10.3933 9.30005 10.7067 9.61345 10.7067 10C10.7067 10.3866 10.3933 10.7 10.0067 10.7Z"
      fill="currentColor"
    />
  </svg>
);
export default SquarePercentIcon;
