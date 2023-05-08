// This file is part of MinIO Design System
// Copyright (c) 2023 MinIO, Inc.
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

const UserFilledIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <path
        d="M128.1,144c39.2,0.1,71.1-31.4,71.4-70.6c0-39.4-32-71.4-71.4-71.4s-71.4,32-71.4,71.4
		C57,112.6,89,144.1,128.1,144"
      />
      <path
        d="M214.6,197.3c-10.8-13.9-24.9-25-41-32.2c-7.3-3.3-14.9-5.9-22.7-7.6
		c-7.7-1.7-15.5-2.6-23.4-2.6c-1.6,0-3.2,0-4.7,0.1h-0.5c-3.9,0.2-7.7,0.6-11.5,1.2c-27.1,4.3-51.6,18.7-68.6,40.2
		c-0.6,0.8-1.2,1.6-1.8,2.4l0,0c-7.8,11-8.9,25.4-2.8,37.3c1.4,2.7,3.2,5.2,5.3,7.5c2.1,2.2,4.5,4.1,7.1,5.6
		c2.6,1.5,5.4,2.7,8.4,3.5c3.1,0.8,6.2,1.2,9.4,1.2h120.6c3.2,0,6.4-0.4,9.5-1.2c2.9-0.8,5.8-2,8.4-3.5c2.6-1.5,5-3.5,7-5.7
		c2.1-2.3,3.9-4.8,5.3-7.6C224.7,223.4,223.2,208.4,214.6,197.3"
      />
    </g>
  </svg>
);

export default UserFilledIcon;
