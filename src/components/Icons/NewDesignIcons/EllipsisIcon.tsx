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

const EllipsisIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M8.00008 8.66668C8.36827 8.66668 8.66675 8.3682 8.66675 8.00001C8.66675 7.63182 8.36827 7.33334 8.00008 7.33334C7.63189 7.33334 7.33341 7.63182 7.33341 8.00001C7.33341 8.3682 7.63189 8.66668 8.00008 8.66668Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.6667 8.66668C13.0349 8.66668 13.3334 8.3682 13.3334 8.00001C13.3334 7.63182 13.0349 7.33334 12.6667 7.33334C12.2986 7.33334 12.0001 7.63182 12.0001 8.00001C12.0001 8.3682 12.2986 8.66668 12.6667 8.66668Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.33341 8.66668C3.7016 8.66668 4.00008 8.3682 4.00008 8.00001C4.00008 7.63182 3.7016 7.33334 3.33341 7.33334C2.96522 7.33334 2.66675 7.63182 2.66675 8.00001C2.66675 8.3682 2.96522 8.66668 3.33341 8.66668Z"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default EllipsisIcon;
