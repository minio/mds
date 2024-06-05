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

const CircleDivideIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.03333C4.7047 2.03333 2.03333 4.7047 2.03333 8C2.03333 11.2953 4.7047 13.9667 8 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8C13.9667 4.7047 11.2953 2.03333 8 2.03333ZM0.633331 8C0.633331 3.9315 3.9315 0.633331 8 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8 15.3667C3.9315 15.3667 0.633331 12.0685 0.633331 8ZM8 5.36666C8.01841 5.36666 8.03333 5.35174 8.03333 5.33333C8.03333 5.31492 8.01841 5.3 8 5.3C7.98159 5.3 7.96666 5.31492 7.96666 5.33333C7.96666 5.35174 7.98159 5.36666 8 5.36666ZM6.63333 5.33333C6.63333 4.57854 7.24521 3.96666 8 3.96666C8.75479 3.96666 9.36666 4.57854 9.36666 5.33333C9.36666 6.08812 8.75479 6.7 8 6.7C7.24521 6.7 6.63333 6.08812 6.63333 5.33333ZM4.63333 8C4.63333 7.6134 4.94673 7.3 5.33333 7.3H10.6667C11.0533 7.3 11.3667 7.6134 11.3667 8C11.3667 8.3866 11.0533 8.7 10.6667 8.7H5.33333C4.94673 8.7 4.63333 8.3866 4.63333 8ZM8 10.7C8.01841 10.7 8.03333 10.6851 8.03333 10.6667C8.03333 10.6483 8.01841 10.6333 8 10.6333C7.98159 10.6333 7.96666 10.6483 7.96666 10.6667C7.96666 10.6851 7.98159 10.7 8 10.7ZM6.63333 10.6667C6.63333 9.91187 7.24521 9.3 8 9.3C8.75479 9.3 9.36666 9.91187 9.36666 10.6667C9.36666 11.4215 8.75479 12.0333 8 12.0333C7.24521 12.0333 6.63333 11.4215 6.63333 10.6667Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleDivideIcon;
