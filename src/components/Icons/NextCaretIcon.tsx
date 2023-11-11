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

const NextCaretIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className={`min-icon`}
    fill={"currentcolor"}
    viewBox="0 0 256 256"
    {...props}
  >
    <g transform="translate(4 4.984)">
      <g transform="translate(0.167 4.016) rotate(-90)">
        <path
          d="M7.7,63.6c0-4.2-1.6-8.3-4.5-11.4c-5.1-5.9-14-6.4-19.9-1.3c-0.5,0.4-0.9,0.9-1.3,1.3L-118.8,161
			L-220.1,52.3c-5.1-5.9-14-6.4-19.9-1.3c-0.5,0.4-0.9,0.9-1.3,1.3c-5.9,6.5-5.9,16.4,0,22.8l111.7,120.4c2.6,3,6.4,4.7,10.4,4.8
			s7.9-1.7,10.4-4.8L2.9,75.2C5.9,72.1,7.7,67.9,7.7,63.6z"
        />
      </g>
    </g>
  </svg>
);

export default NextCaretIcon;
