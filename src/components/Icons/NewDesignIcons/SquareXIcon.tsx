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

const SquareXIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.33334 2.70005C2.98356 2.70005 2.7 2.9836 2.7 3.33338V12.6667C2.7 13.0165 2.98356 13.3 3.33334 13.3H12.6667C13.0165 13.3 13.3 13.0165 13.3 12.6667V3.33338C13.3 2.9836 13.0165 2.70005 12.6667 2.70005H3.33334ZM1.3 3.33338C1.3 2.2104 2.21036 1.30005 3.33334 1.30005H12.6667C13.7896 1.30005 14.7 2.2104 14.7 3.33338V12.6667C14.7 13.7897 13.7896 14.7 12.6667 14.7H3.33334C2.21036 14.7 1.3 13.7897 1.3 12.6667V3.33338ZM5.50503 5.50507C5.7784 5.23171 6.22161 5.23171 6.49498 5.50507L8 7.0101L9.50503 5.50507C9.7784 5.23171 10.2216 5.23171 10.495 5.50507C10.7683 5.77844 10.7683 6.22166 10.495 6.49502L8.98995 8.00005L10.495 9.50507C10.7683 9.77844 10.7683 10.2217 10.495 10.495C10.2216 10.7684 9.7784 10.7684 9.50503 10.495L8 8.99L6.49498 10.495C6.22161 10.7684 5.7784 10.7684 5.50503 10.495C5.23166 10.2217 5.23166 9.77844 5.50503 9.50507L7.01005 8.00005L5.50503 6.49502C5.23166 6.22166 5.23166 5.77844 5.50503 5.50507Z"
      fill="currentColor"
    />
  </svg>
);
export default SquareXIcon;
