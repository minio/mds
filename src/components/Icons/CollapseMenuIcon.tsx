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

const CollapseMenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(0 0.004)">
      <path
        d="M79.8,115.3h158c2.7-0.4,5.5,0.4,7.6,2.3c2.2,1.9,3.1,5,2.3,7.8c-0.7,3-3.1,5.3-6.1,5.9
		c-1.4,0.2-2.7,0.2-4.1,0.2H79.2c1,1,1.6,1.8,2.3,2.5l56.7,56.7c2.4,2,3.4,5.2,2.5,8.2c-0.7,3-3.1,5.3-6.1,5.9
		c-2.8,0.5-5.7-0.5-7.6-2.7L114,189.2c-19.4-19.4-39.1-38.9-58.3-58.5c-1.7-1.8-3-4-3.7-6.3c-0.4-3,0.7-5.9,3.1-7.8
		C75.5,96.1,96,75.8,116.3,55.4c3.7-3.7,7.4-7.6,11.3-11.1c2.7-2.5,6.7-3,9.8-1c3.1,1.5,4.6,5.1,3.5,8.4c-0.6,1.9-1.8,3.6-3.3,4.9
		c-18.6,18.8-37.5,37.5-56.3,56.3l-2.3,2.3L79.8,115.3z"
      />
      <path
        d="M25.6,128.2V16.9c0.1-1.4-0.1-2.9-0.4-4.3C24.5,9.5,22.1,7,19,6.2c-2.9-0.8-6,0.2-8,2.5
		c-2,2.2-2.9,5.1-2.5,8v111.6l0,0v111.4c-0.1,1.4,0.1,2.9,0.4,4.3c0.6,3.1,3,5.6,6.1,6.3c2.9,0.9,6.1-0.1,8-2.5
		c1.9-2.2,2.8-5.1,2.5-8L25.6,128.2C25.6,128.2,25.6,128.2,25.6,128.2z"
      />
    </g>
  </svg>
);

export default CollapseMenuIcon;
