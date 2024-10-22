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

const XIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M3.50507 3.50507C3.77844 3.23171 4.22166 3.23171 4.49502 3.50507L8.00005 7.0101L11.5051 3.50507C11.7784 3.23171 12.2217 3.23171 12.495 3.50507C12.7684 3.77844 12.7684 4.22166 12.495 4.49502L8.99 8.00005L12.495 11.5051C12.7684 11.7784 12.7684 12.2217 12.495 12.495C12.2217 12.7684 11.7784 12.7684 11.5051 12.495L8.00005 8.99L4.49502 12.495C4.22166 12.7684 3.77844 12.7684 3.50507 12.495C3.23171 12.2217 3.23171 11.7784 3.50507 11.5051L7.0101 8.00005L3.50507 4.49502C3.23171 4.22166 3.23171 3.77844 3.50507 3.50507Z"
      fill="currentColor"
    />
  </svg>
);
export default XIcon;
