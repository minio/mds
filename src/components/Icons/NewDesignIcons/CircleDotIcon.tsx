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

const CircleDotIcon = (props: SVGProps<SVGSVGElement>) => (
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
      d="M8 2.03333C4.7047 2.03333 2.03333 4.7047 2.03333 8C2.03333 11.2953 4.7047 13.9667 8 13.9667C11.2953 13.9667 13.9667 11.2953 13.9667 8C13.9667 4.7047 11.2953 2.03333 8 2.03333ZM0.633331 8C0.633331 3.9315 3.9315 0.633331 8 0.633331C12.0685 0.633331 15.3667 3.9315 15.3667 8C15.3667 12.0685 12.0685 15.3667 8 15.3667C3.9315 15.3667 0.633331 12.0685 0.633331 8ZM8 8.03333C8.01841 8.03333 8.03333 8.01841 8.03333 8C8.03333 7.98159 8.01841 7.96666 8 7.96666C7.98159 7.96666 7.96666 7.98159 7.96666 8C7.96666 8.01841 7.98159 8.03333 8 8.03333ZM6.63333 8C6.63333 7.24521 7.24521 6.63333 8 6.63333C8.75479 6.63333 9.36666 7.24521 9.36666 8C9.36666 8.75479 8.75479 9.36666 8 9.36666C7.24521 9.36666 6.63333 8.75479 6.63333 8Z"
      fill="currentColor"
    />
  </svg>
);
export default CircleDotIcon;
