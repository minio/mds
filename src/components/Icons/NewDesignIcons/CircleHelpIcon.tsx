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

const CircleHelpIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 16 16"
    fill="none"
    className={`min-icon`}
    {...props}
  >
    <path
      d="M8,12L8,12l0-1.4h0V12z M9.2,6.7C9.2,7,9,7.3,8.6,7.6C8.4,7.7,8.1,7.8,8,7.9C7.9,7.9,7.8,8,7.8,8c0,0,0,0,0,0
	c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.2,0.7c0.2,0.7,0.2,0.7,0.2,0.7c0,0,0,0,0,0c0,0,0,0,0,0
	c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0,0c0,0,0,0,0.1,0c0.1,0,0.2-0.1,0.3-0.1C8.8,9.1,9,8.9,9.3,8.7c0.5-0.4,1.3-1,1.3-2.1H9.2z
	 M8.9,5.8c0.2,0.2,0.3,0.5,0.3,0.8l1.4,0c0-0.6-0.2-1.3-0.6-1.7L8.9,5.8z M8.2,5.4c0.3,0.1,0.6,0.2,0.8,0.4L10,4.9
	C9.6,4.4,9,4.1,8.4,4L8.2,5.4z M7.3,5.5c0.3-0.2,0.6-0.2,0.9-0.2L8.4,4C7.8,3.9,7.1,4,6.6,4.3L7.3,5.5z M6.7,6.2
	C6.8,5.9,7,5.7,7.3,5.5L6.6,4.3C6,4.7,5.6,5.2,5.4,5.8L6.7,6.2z M8,2c3.3,0,6,2.7,6,6h1.4c0-4.1-3.3-7.4-7.4-7.4V2z M2,8
	c0-3.3,2.7-6,6-6V0.6C3.9,0.6,0.6,3.9,0.6,8H2z M8,14c-3.3,0-6-2.7-6-6H0.6c0,4.1,3.3,7.4,7.4,7.4V14z M14,8c0,3.3-2.7,6-6,6v1.4
	c4.1,0,7.4-3.3,7.4-7.4H14z M8,12c0.4,0,0.7-0.3,0.7-0.7S8.4,10.6,8,10.6V12z M8,10.6c-0.4,0-0.7,0.3-0.7,0.7S7.6,12,8,12V10.6z
	 M7.7,8C7.4,8.1,7.2,8.5,7.3,8.9c0.1,0.4,0.5,0.6,0.9,0.4L7.7,8z M9.9,6.7l-0.7,0v0H9.9z M5.4,5.8C5.3,6.1,5.5,6.5,5.8,6.7
	c0.4,0.1,0.8-0.1,0.9-0.4L5.4,5.8z"
      fill={"currentColor"}
    />
  </svg>
);

export default CircleHelpIcon;
