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

const AlertCloseIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g>
      <g>
        <path
          d="M29,244.5c-4.2,0-8.5-1.6-11.7-4.9c-6.5-6.5-6.5-17,0-23.5L216.2,17.3c6.5-6.5,16.9-6.5,23.5,0
			c6.5,6.5,6.5,17,0,23.4L40.7,239.6C37.5,242.9,33.2,244.5,29,244.5z"
        />
      </g>
      <g>
        <path
          d="M227.9,244.5c-4.2,0-8.5-1.6-11.7-4.9L17.3,40.7c-6.5-6.5-6.5-17,0-23.4c6.5-6.5,17-6.5,23.4,0l198.9,198.9
			c6.5,6.5,6.5,17,0,23.5C236.4,242.9,232.1,244.5,227.9,244.5z"
        />
      </g>
    </g>
  </svg>
);

export default AlertCloseIcon;
