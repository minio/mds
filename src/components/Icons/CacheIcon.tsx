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

const BucketsIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <path
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      d="M105.3,93.7c-6.4,0-11.6,5.2-11.6,11.6v46.4c0,6.4,5.2,11.6,11.6,11.6h46.4c6.4,0,11.6-5.2,11.6-11.6v-46.4
	c0-6.4-5.2-11.6-11.6-11.6H105.3z M70.5,105.3c0-19.2,15.6-34.8,34.8-34.8h46.4c19.2,0,34.8,15.6,34.8,34.8v46.4
	c0,19.2-15.6,34.8-34.8,34.8h-46.4c-19.2,0-34.8-15.6-34.8-34.8V105.3z"
    />
    <path
      fillRule={"evenodd"}
      clipRule={"evenodd"}
      d="M35.8,24.2c-3.1,0-6,1.2-8.2,3.4s-3.4,5.1-3.4,8.2v46.4c0,3.1,1.2,6,3.4,8.2c2.2,2.2,5.1,3.4,8.2,3.4
	c6.4,0,11.6,5.2,11.6,11.6c0,6.4-5.2,11.6-11.6,11.6c-9.2,0-18.1-3.7-24.6-10.2C4.7,100.2,1,91.4,1,82.1V35.8
	c0-9.2,3.7-18.1,10.2-24.6C17.7,4.7,26.6,1,35.8,1h46.4c9.2,0,18.1,3.7,24.6,10.2c6.5,6.5,10.2,15.4,10.2,24.6
	c0,6.4-5.2,11.6-11.6,11.6c-6.4,0-11.6-5.2-11.6-11.6c0-3.1-1.2-6-3.4-8.2c-2.2-2.2-5.1-3.4-8.2-3.4H35.8z M209.6,151.7
	c0-6.4,5.2-11.6,11.6-11.6c9.2,0,18.1,3.7,24.6,10.2c6.5,6.5,10.2,15.4,10.2,24.6v46.4c0,9.2-3.7,18.1-10.2,24.6
	S230.4,256,221.2,256h-46.4c-9.2,0-18.1-3.7-24.6-10.2c-6.5-6.5-10.2-15.4-10.2-24.6c0-6.4,5.2-11.6,11.6-11.6
	c6.4,0,11.6,5.2,11.6,11.6c0,3.1,1.2,6,3.4,8.2c2.2,2.2,5.1,3.4,8.2,3.4h46.4c3.1,0,6-1.2,8.2-3.4c2.2-2.2,3.4-5.1,3.4-8.2v-46.4
	c0-3.1-1.2-6-3.4-8.2c-2.2-2.2-5.1-3.4-8.2-3.4C214.8,163.3,209.6,158.1,209.6,151.7z"
    />
  </svg>
);

export default BucketsIcon;
