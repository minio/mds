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

const DBIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M34.3,46.5c0,0,0,0.1,0,0.2c0,0.1,0.1,0.4,0.4,0.8c0.5,0.8,1.5,2,3.4,3.5c3.8,3,10.1,6.3,18.9,9.2
	c17.5,5.8,42.4,9.6,70.5,9.6c28.1,0,53-3.8,70.5-9.6c8.8-2.9,15.1-6.2,18.9-9.2c1.9-1.5,2.9-2.7,3.4-3.5c0.2-0.4,0.3-0.6,0.4-0.8
	c0-0.1,0-0.2,0-0.2c0,0,0-0.1,0-0.2c0-0.1-0.1-0.4-0.4-0.8c-0.5-0.8-1.5-2-3.4-3.5c-3.8-3-10.1-6.3-18.9-9.2
	c-17.5-5.8-42.4-9.6-70.5-9.6c-28,0-53,3.8-70.5,9.6c-8.8,2.9-15.1,6.2-18.9,9.2c-1.9,1.5-2.9,2.7-3.4,3.5c-0.2,0.4-0.3,0.6-0.4,0.8
	C34.3,46.5,34.3,46.5,34.3,46.5z M49.7,10.8C70.1,4,97.6,0,127.5,0c29.9,0,57.4,4,77.8,10.8c10.2,3.4,19.2,7.7,26,13
	C238,29,244,36.6,244,46.5c0,9.9-6,17.5-12.7,22.7c-6.8,5.3-15.8,9.6-26,13c-20.5,6.8-48,10.8-77.8,10.8c-29.9,0-57.4-4-77.8-10.8
	c-10.2-3.4-19.2-7.7-26-13C17,64.1,11,56.5,11,46.5c0-9.9,6-17.5,12.7-22.7C30.4,18.5,39.5,14.2,49.7,10.8z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.6,34.9c6.4,0,11.6,5.2,11.6,11.6v162.9l0,0c0,0,0,0.1,0,0.1c0,0.1,0.1,0.4,0.3,0.7c0.5,0.8,1.4,2,3.3,3.4
	c3.7,3,10,6.3,19.1,9.4c18.1,6,43.5,9.6,70.5,9.6s52.3-3.6,70.5-9.6c9.1-3,15.4-6.3,19.1-9.4c1.8-1.5,2.8-2.7,3.3-3.4
	c0.2-0.4,0.3-0.6,0.3-0.7c0-0.1,0-0.1,0-0.1l0,0V46.5c0-6.4,5.2-11.6,11.7-11.6c6.4,0,11.6,5.2,11.6,11.6v162.9
	c0,9.6-5.7,17.1-12.3,22.4c-6.7,5.4-15.8,9.8-26.3,13.3c-21.2,7.1-49.2,10.8-77.8,10.8c-28.7,0-56.6-3.8-77.8-10.8
	c-10.6-3.5-19.6-7.9-26.3-13.3c-6.6-5.3-12.3-12.8-12.3-22.4V46.5C11,40.1,16.2,34.9,22.6,34.9z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M22.6,116.4c6.4,0,11.6,5.2,11.6,11.6l0,0c0,0,0,0.1,0,0.1c0,0.1,0.1,0.4,0.3,0.7c0.5,0.8,1.4,2,3.3,3.4
	c3.7,3,10,6.3,19.1,9.4c18.1,6,43.5,9.6,70.5,9.6s52.3-3.6,70.5-9.6c9.1-3,15.4-6.3,19.1-9.4c1.8-1.5,2.8-2.7,3.3-3.4
	c0.2-0.4,0.3-0.6,0.3-0.7c0-0.1,0-0.1,0-0.1l0,0c0-6.4,5.2-11.6,11.7-11.6c6.4,0,11.6,5.2,11.6,11.6c0,9.6-5.7,17.1-12.3,22.4
	c-6.7,5.4-15.8,9.8-26.3,13.3c-21.2,7.1-49.2,10.8-77.8,10.8c-28.7,0-56.6-3.8-77.8-10.8c-10.6-3.5-19.6-7.9-26.3-13.3
	C16.7,145.1,11,137.6,11,128C11,121.6,16.2,116.4,22.6,116.4z"
    />
  </svg>
);

export default DBIcon;
