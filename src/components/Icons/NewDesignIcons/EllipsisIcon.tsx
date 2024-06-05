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
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.33334 8.03333C3.35175 8.03333 3.36667 8.01841 3.36667 8C3.36667 7.98159 3.35175 7.96666 3.33334 7.96666C3.31493 7.96666 3.30001 7.98159 3.30001 8C3.30001 8.01841 3.31493 8.03333 3.33334 8.03333ZM1.96667 8C1.96667 7.24521 2.57855 6.63333 3.33334 6.63333C4.08813 6.63333 4.70001 7.24521 4.70001 8C4.70001 8.75479 4.08813 9.36666 3.33334 9.36666C2.57855 9.36666 1.96667 8.75479 1.96667 8ZM8.00001 8.03333C8.01842 8.03333 8.03334 8.01841 8.03334 8C8.03334 7.98159 8.01842 7.96666 8.00001 7.96666C7.9816 7.96666 7.96667 7.98159 7.96667 8C7.96667 8.01841 7.9816 8.03333 8.00001 8.03333ZM6.63334 8C6.63334 7.24521 7.24522 6.63333 8.00001 6.63333C8.7548 6.63333 9.36667 7.24521 9.36667 8C9.36667 8.75479 8.7548 9.36666 8.00001 9.36666C7.24522 9.36666 6.63334 8.75479 6.63334 8ZM12.6667 8.03333C12.6851 8.03333 12.7 8.01841 12.7 8C12.7 7.98159 12.6851 7.96666 12.6667 7.96666C12.6483 7.96666 12.6333 7.98159 12.6333 8C12.6333 8.01841 12.6483 8.03333 12.6667 8.03333ZM11.3 8C11.3 7.24521 11.9119 6.63333 12.6667 6.63333C13.4215 6.63333 14.0333 7.24521 14.0333 8C14.0333 8.75479 13.4215 9.36666 12.6667 9.36666C11.9119 9.36666 11.3 8.75479 11.3 8Z"
      fill="currentColor"
    />
  </svg>
);
export default EllipsisIcon;
